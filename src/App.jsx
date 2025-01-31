import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Profile } from './pages/Profile'
import { Analytics } from './pages/Analytics'
import { Workers } from './pages/Workers'
import { Gate } from './pages/Gate'
import { WorkerDetails } from './pages/WorkerDetails'
import { Backendtests } from './utils/Backendtests'

const router = createBrowserRouter([
  {
    element: <Header />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/profile', element: <Profile /> },
      { path: '/analytics', element: <Analytics /> },
      { path: '/workers', element: <Workers /> },
      { path: '/gate', element: <Gate /> },
      { path: '/workersdetails', element: <WorkerDetails /> },
      { path: '/tests', element: <Backendtests /> }
    ]
  }
],
  {
    future: {

      v7_relativeSplatPath: true,

      v7_normalizeFormMethod: true,

      v7_fetcherPersist: true,

      v7_partialHydration: true,

      v7_skipActionErrorRevalidation: true,
    }
  })

function App() {

  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }}>
      <Header />
      <Home />
      <Footer />
    </RouterProvider>
  )
}

export default App
