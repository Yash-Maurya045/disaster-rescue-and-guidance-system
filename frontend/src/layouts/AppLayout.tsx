import { Outlet } from "react-router-dom";

import Header from "@/components/hud/Header";
import BottomNavigation from "@/components/hud/BottomNavigation";

function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1-p-4">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
}

export default AppLayout;
