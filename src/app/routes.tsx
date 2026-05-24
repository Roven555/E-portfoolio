import { createBrowserRouter } from "react-router";
import Root from "./Root";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "experience", Component: Experience },
      { path: "contact", Component: Contact },
    ],
  },
]);
