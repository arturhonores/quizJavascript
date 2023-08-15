import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Quiz from "./components/Quiz"
import Result from "./components/Result"
import { CheckUserExist } from "./helper/helper"

//react routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/quiz",
    element: <CheckUserExist><Quiz /></CheckUserExist>
  },
  {
    path: "/result",
    element: <CheckUserExist><Result /></CheckUserExist>
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
