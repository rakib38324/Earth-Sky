
import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './Pages/Router/Router'
import { Toaster } from 'react-hot-toast'

function App() {
 

  return (
    <div className=''>
      <RouterProvider router={router}></RouterProvider>
      <Toaster></Toaster>
    </div>
  )
}

export default App
