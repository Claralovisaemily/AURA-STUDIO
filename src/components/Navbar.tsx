import { Menu, Search, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-2xl border-b border-stone-100/50 flex justify-between items-center w-full px-8 md:px-24 py-6">
      <div className="flex items-center gap-6">
        <button className="hover:opacity-70 transition-all duration-500 ease-out active:scale-[0.98]">
          <Menu className="w-6 h-6 text-stone-800" />
        </button>
        <nav className="hidden md:flex gap-8 font-serif tracking-[0.15em] text-sm uppercase">
          <Link 
            to="/collection" 
            className={cn(
              "transition-all duration-300 pb-1",
              location.pathname === '/collection' ? "text-stone-900 border-b border-pink-200" : "text-stone-400 hover:text-stone-800"
            )}
          >
            Collections
          </Link>
          <Link 
            to="/brand-story" 
            className={cn(
              "transition-all duration-300 pb-1",
              location.pathname === '/brand-story' ? "text-stone-900 border-b border-pink-200" : "text-stone-400 hover:text-stone-800"
            )}
          >
            Brand Story
          </Link>
          <a className="text-stone-400 hover:text-stone-800 transition-all" href="#">Movement</a>
        </nav>
      </div>
      
      <Link to="/" className="absolute left-1/2 -translate-x-1/2 text-2xl font-light tracking-[0.3em] text-stone-900">
        ALUNÉA STUDIO
      </Link>

      <div className="flex items-center gap-6">
        <button className="hover:opacity-70 transition-all duration-500 ease-out active:scale-[0.98]">
          <Search className="w-5 h-5 text-stone-800" />
        </button>
        <button className="hover:opacity-70 transition-all duration-500 ease-out active:scale-[0.98]">
          <ShoppingBag className="w-5 h-5 text-stone-800" />
        </button>
      </div>
    </header>
  );
}
