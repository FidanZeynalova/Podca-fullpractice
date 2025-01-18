
import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import { ROUTES } from './routes/routes'

function App() {
  const router = createBrowserRouter(ROUTES)

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
