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
import { Shifts } from "./pages/Shifts";
import { HRcontacts } from "./pages/HRcontacts";
import { Toaster } from "sonner";
import { Schema } from "./pages/Schema";
import { TestResults } from "./pages/TestResults";

function App() {

  const router = createBrowserRouter(
    [
      {
        element: (
          <div>
            <Header/>
            <Outlet />
            <Footer />
          </div>
        ),
        children: [
          { path: "/", element: <Home/> },
          { path: "/profile", element: <Profile /> },
          {
            path: "/signin",
            element: <Authentication/>,
          },
          { path: "/apply", element: <Authentication/> },
          { path: "/resetpassword", element: <PasswordReset /> },
          { path: "/contact", element: <Contact /> },

          { path: "/analytics", element: <Analytics /> },
          { path: "/workers", element: <Workers /> },
          { path: "/gate", element: <Gate /> },
          { path: "/workerdetails/:id", element: <WorkerDetails /> },

          { path: "/backendtests", element: <Backendtests /> },
          { path: "/shifts", element: <Shifts /> },
          { path: "/hrcontact", element: <HRcontacts /> },
          { path: "/schema", element: <Schema /> },
          { path: "/tests", element: <TestResults /> },
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
    <>
      <RouterProvider router={router} future={{ v7_startTransition: true }} />
      <Toaster position="top-center" richColors duration={1250} />
    </>
  );
}

export default App;
