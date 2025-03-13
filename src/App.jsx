import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Analytics } from "./pages/Analytics";
import { Workers } from "./pages/Workers";
import { Gate } from "./pages/Gate";
import { WorkerDetails } from "./pages/WorkerDetails";
import { Authentication } from "./pages/Authentication";
import { Backendtests } from "./utils/Backendtests";
import { PasswordReset } from "./pages/PasswordReset";
import { Contact } from "./pages/Contact";
import { useState } from "react";
import { Shifts } from "./pages/Shifts";

function App() {
  const [role, setRole ] = useState("")

  const router = createBrowserRouter(
    [
      {
        element: (
          <div>
            <Header setRole={setRole}/>
            <Outlet />
            <Footer />
          </div>
        ),
        children: [
          { path: "/", element: <Home setRole={setRole}/> },
          { path: "/profile", element: <Profile /> },
          {
            path: "/authentication/signin",
            element: <Authentication role={role}/>,
          },
          { path: "/authentication/signup", element: <Authentication /> },
          { path: "/resetpassword", element: <PasswordReset /> },
          { path: "/contact", element: <Contact /> },

          { path: "/analytics", element: <Analytics /> },
          { path: "/workers", element: <Workers /> },
          { path: "/gate", element: <Gate /> },
          { path: "/workerdetails/:id", element: <WorkerDetails /> },

          { path: "/tests", element: <Backendtests /> },
          { path: "/shifts", element: <Shifts /> },
        ],
      },
    ],
    {
      future: {
        v7_relativeSplatPath: true,

        v7_normalizeFormMethod: true,

        v7_fetcherPersist: true,

        v7_partialHydration: true,

        v7_skipActionErrorRevalidation: true,
      },
    }
  );

  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}

export default App;
