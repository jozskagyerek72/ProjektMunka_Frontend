import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import { UserContext } from "../context/UserContext";
import {
  createMemoryRouter,
  MemoryRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import { NotFound } from "../pages/NotFound";

it("renders without crashing", async () => {
  const mockUser = { displayName: "Gyula", email: "gulya@mockuser.com" };
  render(
    <UserContext.Provider value={{ user: mockUser }}> 
      <App />
    </UserContext.Provider>
  );
});

it("renders NotFound page for unknown routes", () => {
  const testRouter = createMemoryRouter(
    [{ path: "*", element: <NotFound /> }],
    { initialEntries: ["/randomPage"] }
  );

  render(<RouterProvider router={testRouter} />);

  expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
});
