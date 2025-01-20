import { ChakraProvider } from '@chakra-ui/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import './global.css'
import App from './App.jsx'
import { Contact } from './routes/Contact/Contact.jsx'
import { ErrorPage } from './routes/ErrorPage/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />
  },
  {
    path: '/contact',
    element: <Contact/>
  },
  {

  }
])

createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <StrictMode>
      <RouterProvider router={router} />  
    </StrictMode>
  </ChakraProvider>
 ,
)
