import { Link } from "react-router";

import miFoto from "../../../assets/foto.jpeg"; 

export default function Sidebar() {
  return (
    <aside className="lg:w-80 lg:min-h-screen bg-slate-950/85 backdrop-blur-xl border-white/10 border-b lg:border-r lg:border-b-0">
      <div className="flex h-full flex-col px-5 py-6 lg:px-6">
        
        <div className="flex flex-col items-center text-center mb-8 pb-8 border-b border-white/5">
          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-blue-500 shadow-lg shadow-blue-500/20 mb-3">
            <img 
              src={miFoto} 
              alt="Edson" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-white font-semibold text-lg">Edson</h2>
          <p className="text-slate-400 text-xs uppercase tracking-wider">Estudiante</p>
        </div>

        <div className="mt-2">
          <h2 className="px-3 text-xs font-medium uppercase text-slate-500">
            Navegación
          </h2>

          <nav className="mt-4 space-y-2 gap-4 flex lg:flex-col">
            <Link className="px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" to="/">
              Hogar
            </Link>

            <Link className="px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" to="/about-me">
              Acerca de mí
            </Link>
  
            <Link className="px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" to="/todo">
              HACER
            </Link>

            <Link className="px-3 py-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors" to="/pokemon">
              Pokémon
            </Link>            
          </nav>
        </div>
      </div>
    </aside>
  );
}