import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import Home from "./pages/home/Home"
import { Toaster } from "react-hot-toast"
import { SpeedInsights } from "@vercel/speed-insights/next"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: rootLoader,
    // children: [
    //   {
    // path: "/#contact",
    // element: <Contact />,
    // loader: teamLoader,
    //   },
    // ],
  },
])

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
    <SpeedInsights />
  </React.StrictMode>,
)
