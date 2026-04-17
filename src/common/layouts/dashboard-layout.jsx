import { Outlet } from "react-router";
import Sidebar from "../components/sidebar/sidebar";

export function DashboardLayout() {
  return (
   <div className="min-h-screen bg-[#061350] text-slate-100">

      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-purple-600/10 blur-[120px] pointer-events-none"></div>

      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        <Sidebar />

        <main className="flex-1">
          <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col p-4 lg:p-8">

          <section className="mt-6 flex-1 rounded-3xl border border-white/5 bg-[#0f172a]/80 backdrop-blur-xl p-4 shadow-2xl shadow-black/50 sm:p-6 lg:p-8">
          <Outlet />
          </section>
          </div>
        </main>
      </div>
    </div>
  );
}