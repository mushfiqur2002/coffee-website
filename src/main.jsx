import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Main from "./layout/Main";
import Home from "./layout/Home";
import Card from "./layout/Card";
import About from "./layout/About";
import Add from "./layout/Add";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<div>error go back</div>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/card',
        element : <Card></Card>,
        loader : ()=> fetch('http://localhost:3000/coffee')
      },
      {
        path : '/about',
        element : <About></About>
      },
      {
        path : '/add',
        element : <Add></Add>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);