import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'
import { Contact,Error,Despre, HomeLayout, Landing, LemnConstructii, LemneDeFocPeleti } from './pages'

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomeLayout/>,
    errorElement: <Error/>,
    children:[
      {
        index:true,
        element:<Landing/>
      },
      {
        path:'despre',
        element:<Despre/>
      },
      {
        path:'materiale-lemn-constructii',
        element:<LemnConstructii/>
      },
      {
        path:'lemn-foc-peleti',
        element:<LemneDeFocPeleti/>
      },
      {
        path:'contact',
        element:<Contact/>
      },

    ]
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
