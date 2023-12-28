import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import Home from "./pages/home/Home"
import Contact from "./pages/contact/Contact"
import Navigation from "./Layout/Navigation"
import Footer from "./Layout/Footer"



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/contact",
    element: <Contact />,
    // errorElement: <ErrorPage />,
  },
]);


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Navigation />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)
