import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { UserProvider, UserContext } from "../context/UserContext";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  getAuth,
} from "firebase/auth";
import { auth } from "../utils/firebaseApp";
import { useContext } from "react";
import { renderHook } from "@testing-library/react";

// Mock-oljuk a Firebase függvényeket
vi.mock("firebase/auth", () => ({
  signInWithEmailAndPassword: vi.fn(),
  signOut: vi.fn(),
  getAuth: vi.fn(() => ({
    currentUser: null,
  })),
  onAuthStateChanged: vi.fn((auth, callback) => {
    callback(null); // A kezdő állapotban a felhasználó `null`
    //return () => {}; // Leiratkozásként egy üres függvényt ad vissza
    const unsubscribeMock = vi.fn();
    return unsubscribeMock; // Az unsubscribe itt egy mock függvény lesz
  }),
}));
describe("UserContext tests", () => {
  it("should initialize user state as null", () => {
    render(
      <UserProvider>
        <UserContext.Consumer>
          {(value) => {
            expect(value.user).toBeNull();
            return null;
          }}
        </UserContext.Consumer>
      </UserProvider>
    );
  });

  it("should set user state when onAuthStateChanged fires", async () => {
    const mockUser = { uid: "123", email: "test@test.com" };

    // Mock-oljuk az onAuthStateChanged-et úgy, hogy az visszahívja a callback-et a mockUser-rel
    onAuthStateChanged.mockImplementation((auth, callback) => {
      callback(mockUser); // A callback meghívása a mockUser-tel
      return vi.fn(); // Visszaadunk egy mock unsubscribe függvényt
    });

    // A renderHook-ot körbe kell tenni a UserProvider-rel
    const { result } = renderHook(() => useContext(UserContext), {
      wrapper: UserProvider, // Itt adunk wrapper-t, hogy a hook hozzáférjen a kontextushoz
    });

    // Várakozunk, hogy az állapot megfelelően frissüljön
    await waitFor(() => expect(result.current.user).toEqual(mockUser));
  });

  it("should call signInWithEmailAndPassword and update state", async () => {
    const mockUser = { uid: "123", email: "kam@test.com" };

    signInWithEmailAndPassword.mockResolvedValue({ user: mockUser });

    render(
      <UserProvider>
        <UserContext.Consumer>
          {(value) => {
            value.signInUser("kam@test.com", "password");
            return null;
          }}
        </UserContext.Consumer>
      </UserProvider>
    );

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        "kam@test.com",
        "password"
      );
    });
  });

  it("should call signOut and reset user state", async () => {
    signOut.mockResolvedValue();

    render(
      <UserProvider>
        <UserContext.Consumer>
          {(value) => {
            value.signOut();
            return null;
          }}
        </UserContext.Consumer>
      </UserProvider>
    );

    await waitFor(() => {
      expect(signOut).toHaveBeenCalledWith(auth);
    });
  });
});
