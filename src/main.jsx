import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Gagal from './pages/Gagal.jsx'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
const router =createBrowserRouter([
  {path:'/', element:<App></App>},
  {path:'/Gagal', element:<Gagal></Gagal> }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
