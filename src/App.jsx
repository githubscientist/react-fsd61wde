import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Notes from "./components/Notes";
import Users from "./components/Users";
import notesLoader from "./loaders/notesLoader";
import usersLoader from "./loaders/usersLoader";
import Note from "./components/Note";

// create a router
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/notes",
    element: <Notes />,
    loader: notesLoader
  },
  {
    path: "/notes/:notesId",
    element: <Note />,
    loader: notesLoader
  },
  {
    path: "/users",
    element: <Users />,
    loader: usersLoader
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App;