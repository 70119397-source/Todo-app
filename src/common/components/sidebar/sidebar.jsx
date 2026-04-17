import { Link } from "react-router";

export default function Sidebar() {
  return (
    <aside className="lg:w-80 lg:min-h-screen bg-slate-950/85 backdrop-blur-xl border-white/10 border-b lg:border-r lg:border-b-0">
      <div className="flex h-full flex-col px-5 py-6 lg:px-6">
        <div className="mt-8">
          <h2 className="px-3 text-xs font-medium uppercase text-slate-500">
            Navigation
          </h2>

          <nav className="mt-4 space-y-2 gap-4 flex lg:flex-col">
            <Link to="/">Home</Link>

            <Link to="/about-me">About Me</Link>
  

            <Link to="/todo">TODO</Link>
          </nav>
        </div>
      </div>
    </aside>
  );
}
