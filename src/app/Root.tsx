import { Outlet } from "react-router";
import Navigation from "./components/Navigation";

export default function Root() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#0F0F0F', fontFamily: 'Inter, sans-serif' }}>
      <Navigation />
      <Outlet />
    </div>
  );
}
