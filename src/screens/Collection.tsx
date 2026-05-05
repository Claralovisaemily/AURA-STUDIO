import { motion } from 'motion/react';
import { ChevronDown, Heart, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

export default function Collection() {
  return (
    <div className="w-full pt-32">
      <section className="px-8 md:px-24 mb-24">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-6xl font-serif text-on-background mb-6">The Spring Movement Collection</h1>
          <p className="text-xl text-on-surface-variant max-w-2xl font-sans">
            Elevated silhouettes engineered for the fluid transitions of Pilates and Yoga. Experience the tactile luxury of our signature AirTouch™ fabric.
          </p>
        </motion.div>
      </section>

      {/* Filters & Sort */}
      <section className="px-8 md:px-24 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-surface-container-high pb-8">
          <div className="flex flex-wrap gap-4 font-sans">
            <button className="px-6 py-2 rounded-full bg-primary-container text-on-primary-container font-semibold text-sm">All Activity</button>
            <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant font-semibold text-sm hover:bg-primary-container/30 transition-all">Pilates</button>
            <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant font-semibold text-sm hover:bg-primary-container/30 transition-all">Yoga</button>
            <button className="px-6 py-2 rounded-full bg-surface-container text-on-surface-variant font-semibold text-sm hover:bg-primary-container/30 transition-all">Reformer</button>
          </div>
          <div className="flex items-center gap-8 font-semibold text-sm text-on-surface-variant font-sans">
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <span>Color: All</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 hover:text-primary transition-colors">
              <span>Sort: New Arrival</span>
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="px-8 md:px-24 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-12">
          {PRODUCTS.filter(p => !p.isLimited).map((product, idx) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low mb-6 transition-all duration-700 ease-out group-hover:shadow-ambient rounded-sm">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" 
                    src={product.image} 
                    alt={product.name} 
                  />
                  <div className="absolute top-4 right-4">
                    <button className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-on-surface hover:bg-white transition-colors">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                  {product.isBestSeller && (
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[10px] font-bold tracking-widest uppercase">Best Seller</span>
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-serif mb-1">{product.name}</h3>
                    <p className="text-xs font-sans font-semibold text-outline uppercase tracking-widest">{product.colorName}</p>
                  </div>
                  <span className="text-lg font-sans">${product.price}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
