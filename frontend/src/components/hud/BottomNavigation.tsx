import { Home, Bell, Map, ShieldAlert, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", icon: Home },
  { to: "/alerts", label: "Alerts", icon: Bell },
  { to: "/map", label: "Map", icon: Map },
  { to: "/emergency", label: "SOS", icon: ShieldAlert },
  { to: "/profile", label: "Profile", icon: User },
];

function BottomNavigation() {
  return (
    <nav className="border-t bg-background">
      <ul className="flex justify-around py-3">
        {navItems.map(({ to, label, icon: Icon }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 text-xs ${
                  isActive ? "text-red-600 font-semibold" : "text-gray-500"
                }`
              }
            >
              <Icon size={20} />
              <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default BottomNavigation;
