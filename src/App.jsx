import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Nav from "./components/Nav";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    errorElement: <div><h1>404 Not Found</h1></div>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "about/:userId",
        element: <About />
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App;