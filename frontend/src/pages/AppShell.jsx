import { Outlet } from "react-router-dom";

// Centers a fixed-size mobile app viewport on the page
const AppShell = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral-950">
      <div className="relative w-[390px] max-w-[390px] h-[844px] max-h-[844px] bg-neutral-900 rounded-[32px] shadow-2xl border border-neutral-800 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default AppShell;


