import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Quiz from "./components/Quiz"
import Result from "./components/Result"

//react routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/quiz",
    element: <Quiz></Quiz>
  },
  {
    path: "/result",
    element: <Result></Result>
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
