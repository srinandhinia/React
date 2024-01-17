import { Link, Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
export default function RootLayoutPage() {
  return (
    <div>
      <MainNavigation />
      <Outlet />
    </div>
  );
}
