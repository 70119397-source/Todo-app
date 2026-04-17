import { createBrowserRouter } from "react-router";

import { Home } from "../features/home/pages/home"; 
import { AboutMe } from "../features/about-me/pages/about-me"; 
import { DashboardLayout } from "../common/layouts/dashboard-layout";
import { TodoModule } from '../features/todo/TodoModule';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about-me",
        Component: AboutMe,
      },
      {
        path: "todo",
        Component: TodoModule,
      },
    ],
  },
]);