import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/pages/HomePage";
import AlertsPage from "@/pages/AlertsPage";
import MapPage from "@/pages/MapPage";
import EmergencyPage from "@/pages/EmergencyPage";
import ProfilePage from "@/pages/ProfilePage";
import NotFoundPage from "@/pages/NotFoundPage";
import AppLayout from "@/layouts/AppLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "alerts",
        element: <AlertsPage />,
      },
      {
        path: "map",
        element: <MapPage />,
      },
      {
        path: "emergency",
        element: <EmergencyPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
