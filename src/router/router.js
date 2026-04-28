import { lazy } from "react";

export const Blog = lazy(() => import("../pages/Blog/Blog"));
export const Contact = lazy(() => import("../pages/contact/contact"));
export const Home = lazy(() => import("../pages/Home/Home"));
export const Services = lazy(() => import("../pages/Services/Services"));
