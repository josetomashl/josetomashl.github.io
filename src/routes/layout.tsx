import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <aside>information about me</aside>
      <div id="pages">
        <nav>Sidebar</nav>
        <Outlet />
      </div>
    </>
  );
}
