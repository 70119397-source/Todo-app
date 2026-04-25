import React, { useState, useEffect } from 'react';

export const PokemonModule = () => {
  const [pokemons, setPokemons] = useState([]);
  const [filteredPokemons, setFilteredPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [offset, setOffset] = useState(0);
  const LIMIT = 20;

  const fetchPokemons = async (newOffset) => {
    try {
      if (newOffset === 0) setLoading(true);
      else setLoadingMore(true);

      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${newOffset}`);
      const data = await response.json();
      
      const detailedPromises = data.results.map(p => fetch(p.url).then(res => res.json()));
      const detailedResults = await Promise.all(detailedPromises);
      
      setPokemons(prev => [...prev, ...detailedResults]);
      setFilteredPokemons(prev => [...prev, ...detailedResults]);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchPokemons(0);
  }, []);

  useEffect(() => {
    const results = pokemons.filter(pokemon =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPokemons(results);
  }, [searchTerm, pokemons]);

  const handleLoadMore = () => {
    const nextOffset = offset + LIMIT;
    setOffset(nextOffset);
    fetchPokemons(nextOffset);
  };

  const getStat = (pokemon, statName) => {
    const stat = pokemon.stats.find(s => s.stat.name === statName);
    return stat ? stat.base_stat : 0;
  };

  if (loading) return <div className="text-white p-8 text-center animate-pulse font-light tracking-widest">INICIALIZANDO SISTEMA...</div>;


  if (selectedPokemon) {
    return (
      <div className="p-8 flex flex-col items-center min-h-screen">
        <button 
          onClick={() => setSelectedPokemon(null)}
          className="self-start mb-8 flex items-center text-slate-500 hover:text-blue-400 transition-all font-bold tracking-tighter"
        >
          <span className="text-2xl mr-2">←</span> VOLVER AL POKEDEX
        </button>

        <div className="relative max-w-4xl w-full bg-[#161b2c] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          
          <div className="lg:w-2/5 bg-[#0f172a] p-12 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-white/5">
            <img 
              src={selectedPokemon.sprites.other['official-artwork'].front_default} 
              alt={selectedPokemon.name}
              className="w-full h-auto drop-shadow-[0_0_30px_rgba(59,130,246,0.4)] mb-8"
            />
            <div className="flex gap-3">
              {selectedPokemon.types.map(t => (
                <span key={t.type.name} className="px-5 py-1.5 rounded-xl text-[10px] font-black uppercase bg-blue-500/20 text-blue-300 border border-blue-400/30">
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>

             <div className="lg:w-3/5 p-12">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-blue-500 font-mono text-sm tracking-widest font-bold">REGISTRO #{selectedPokemon.id}</span>
                <h2 className="text-5xl font-black capitalize text-white tracking-tighter mt-1">{selectedPokemon.name}</h2>
              </div>
            </div>

              <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="text-slate-500 text-[9px] uppercase font-bold mb-1">Altura</p>
                <p className="text-white text-lg font-bold">{selectedPokemon.height / 10}m</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="text-slate-500 text-[9px] uppercase font-bold mb-1">Peso</p>
                <p className="text-white text-lg font-bold">{selectedPokemon.weight / 10}kg</p>
              </div>
              <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                <p className="text-slate-500 text-[9px] uppercase font-bold mb-1">Exp. Base</p>
                <p className="text-white text-lg font-bold">{selectedPokemon.base_experience}</p>
              </div>
            </div>

            <div className="space-y-5">
              <p className="text-slate-400 text-[10px] uppercase font-black tracking-[0.2em] mb-4">Análisis de Atributos</p>
              
              {[
                { label: 'Ataque (Daño)', value: getStat(selectedPokemon, 'attack'), color: 'bg-red-500' },
                { label: 'Defensa', value: getStat(selectedPokemon, 'defense'), color: 'bg-blue-500' },
                { label: 'Velocidad', value: getStat(selectedPokemon, 'speed'), color: 'bg-yellow-500' },
                { label: 'HP (Vida)', value: getStat(selectedPokemon, 'hp'), color: 'bg-green-500' }
              ].map(stat => (
                <div key={stat.label}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-slate-300 font-medium">{stat.label}</span>
                    <span className="text-white font-bold">{stat.value}</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full ${stat.color} transition-all duration-1000`} 
                      style={{ width: `${(stat.value / 150) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/5">
              <p className="text-slate-500 text-[9px] uppercase font-bold mb-3">Habilidades de Especie</p>
              <div className="flex flex-wrap gap-2">
                {selectedPokemon.abilities.map(a => (
                  <span key={a.ability.name} className="text-[11px] text-slate-300 capitalize bg-[#0f172a] px-4 py-2 rounded-lg border border-white/5 tracking-wide">
                    {a.ability.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-[1500px] mx-auto min-h-screen"> 
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h1 className="text-6xl font-black text-white tracking-tighter mb-2">POKÉDEX<span className="text-blue-600">.</span></h1>
          <p className="text-slate-500 font-bold tracking-[0.3em] uppercase text-[10px]">database</p>
        </div>
        
        <div className="relative">
          <input 
            type="text"
            placeholder="BUSCAR POKEMON"
            className="bg-[#161b2c] border border-white/10 text-white px-8 py-5 rounded-2xl w-full md:w-[400px] focus:ring-2 focus:ring-blue-500/50 outline-none transition-all pl-16 shadow-2xl uppercase text-xs tracking-widest font-bold"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-7 top-5.5 text-xl opacity-30">🔍</span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10"> 
        {filteredPokemons.map((pokemon) => (
          <div 
            key={pokemon.id}
            onClick={() => setSelectedPokemon(pokemon)}
            className="bg-[#161b2c] border border-white/5 p-10 rounded-[3rem] hover:bg-[#1c223a] hover:border-blue-500/30 transition-all duration-500 cursor-pointer group relative shadow-2xl" 

          >
            <span className="absolute top-10 right-10 text-[11px] font-mono text-slate-700 font-black group-hover:text-blue-500 transition-colors">
              #{pokemon.id.toString().padStart(3, '0')}
            </span>

              <div className="bg-[#0f172a] rounded-[2.5rem] p-10 mb-8 flex justify-center aspect-square items-center shadow-inner overflow-hidden relative">

              <img 
                loading="lazy" 
                src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
                alt={pokemon.name}
                className="w-40 h-40 object-contain relative z-10 transform group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 ease-out"
               />
            </div>

            <h3 className="text-white font-black capitalize text-2xl tracking-tight mb-4 group-hover:text-blue-400 transition-colors">
    
              {pokemon.name}
            </h3>
            
            <div className="flex flex-wrap gap-2"> 
              {pokemon.types.map(t => (
                <span key={t.type.name} className="text-[9px] bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-lg uppercase font-black tracking-widest border border-blue-500/10">
                  {t.type.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {!searchTerm && !loading && (
        <div className="mt-24 flex justify-center">
          <button 
            onClick={handleLoadMore}
            disabled={loadingMore}
            className="bg-blue-600 hover:bg-blue-500 text-white font-black px-14 py-5 rounded-2xl transition-all disabled:opacity-50 tracking-widest uppercase text-xs"
            >
            {loadingMore ? 'Sincronizando...' : 'Cargar más pokemones'}
          </button>
        </div>
      )}
    </div>
  );
};