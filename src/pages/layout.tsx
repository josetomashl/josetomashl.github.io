import Navigation from "@/components/Navigation";
import ProfileCard from "@/components/ProfileCard";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div className="layout">
      <ProfileCard />
      <div id="pages">
        <Navigation />
        <Outlet />
      </div>
    </div>
  );
}
