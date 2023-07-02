import { ContactPage, GalleryPage, HomePage } from "./pages";
import BoardMemberPage from "./pages/BoardMemberPage";

export const routes = [
  {
    title: "Home Page",
    subRoutes: [],
    component: <HomePage />,
    route: "/",
  },
  {
    title: "Board Page",
    subRoutes: [],
    component: <BoardMemberPage />,
    route: "/board",
  },
  {
    title: "Gallery",
    subRoutes: [],
    component: <GalleryPage />,
    route: "/gallery",
  },
  {
    title: "Contact",
    subRoutes: [],
    component: <ContactPage />,
    route: "/contact",
  },
];
