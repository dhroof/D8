import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Components/Home";
import Chat from "./Components/Chat";
import Help from "./Components/Help";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  }, 
  {
    path: "chat",
    element: <Chat />,
  },
  {
    path: "help",
    element: <Help />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <SignUp />,
  },
]);

function App() {
  return (
    <>
    <Navbar />,
    <RouterProvider router={router} />
    </>
  );
}

export default App;
