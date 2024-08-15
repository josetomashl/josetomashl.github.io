import ProfileCard from "@/components/ProfileCard";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="layout">
      <ProfileCard />
      <div id="pages">
        <Outlet />
      </div>
    </div>
  );
}
