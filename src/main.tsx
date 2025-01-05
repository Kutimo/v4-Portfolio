import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import Home from "./pages/home/Home"
import { Toaster } from "react-hot-toast"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "https://c6db8eb32e216559cf8459dcd93d1bab@o4508593407655936.ingest.de.sentry.io/4508593414602832",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  // Tracing
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});



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
    <button onClick={() => { throw new Error("This is your first error!"); }}>Break the world</button>;
    <Toaster />
    <RouterProvider router={router} />
    <SpeedInsights />
    <Analytics />
  </React.StrictMode>,
)
