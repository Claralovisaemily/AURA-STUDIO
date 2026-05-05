import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Heart, Minus, Plus, Star } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { cn } from '../lib/utils';

export default function ProductDetail() {
  const { id } = useParams();
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[0];
  const [selectedSize, setSelectedSize] = useState('S');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '#E6E6FA');

  return (
    <div className="w-full pt-32">
      <section className="max-w-7xl mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 py-16">
        {/* Image Gallery */}
        <div className="lg:col-span-7 grid grid-cols-2 gap-4">
          <div className="col-span-2 overflow-hidden bg-surface-container-low aspect-[4/5] rounded-sm">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              src={product.image} 
              alt={product.name} 
            />
          </div>
          <div className="overflow-hidden bg-surface-container-low aspect-square rounded-sm">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8A7Va8r1-2AytPeb-FXt2TV0krZm0EXCna5O6V9pjRAqtz1NlklFY7eCua8wyfQ_cFXs4OB_ZNvTpQuh3o4bZBacIHUrItZ6YK8zn9k20qRYU5vAbAx_9_zlGQpR67roRAo_BybIUQ7-a6W1uuz4cET-EFHb_4who61-66memw2JoKYfx-n4mrXJ2qFmSg9Vtx6gDKqcj4xJt9D_NyfUYzDAcAobOSHVkbgbkJmnwn7W0oqjfz_KRjdWvYnwINjW9gaWU8WPdv80" 
              alt="Detail 1"
            />
          </div>
          <div className="overflow-hidden bg-surface-container-low aspect-square rounded-sm">
            <img 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDquryog5YKhujihfjSfFMLNiPi7sEf4hp1AbpaHJlfMVlt8opT_AwfcR45Ulut3hzXCZ1xaX-Sd08bECy0Z5BWX1rXYa3TDatW-zQd0mwyhvArxtjxUqm9o3PxL0ACdq0wjbcKoLTEoKeoN5BDi_4m7Hh739aVoLsNzQtw_RnMgG-tG_7Ufos-5wm02irvsHB_AA5-cs3JEQcCpIcZdLSo901xgg95DIQGqWSIsnv1hzpi59B6KQqGXDq6DwsjvZ49BqpzBtBqPIk" 
              alt="Detail 2"
            />
          </div>
        </div>

        {/* Details */}
        <div className="lg:col-span-5 space-y-10">
          <div>
            <span className="text-xs text-primary font-sans font-semibold uppercase tracking-[0.2em] mb-4 block">{product.category} Collection</span>
            <h1 className="text-5xl font-serif text-on-background mb-2">{product.name}</h1>
            <p className="text-2xl font-serif text-on-surface-variant">${product.price.toFixed(2)}</p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs font-sans font-semibold text-stone-500 uppercase tracking-widest mb-4">Color: {product.colorName}</p>
              <div className="flex gap-4">
                {product.colors?.map(color => (
                  <button 
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      "w-8 h-8 rounded-full border-2 transition-transform hover:scale-110",
                      selectedColor === color ? "border-primary ring-offset-2 ring-1 ring-stone-200" : "border-stone-100"
                    )}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div>
              <div className="flex justify-between items-end mb-4">
                <p className="text-xs font-sans font-semibold text-stone-500 uppercase tracking-widest">Select Size</p>
                <button className="text-[10px] font-sans font-semibold uppercase tracking-widest text-primary underline">Size Guide</button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {['XS', 'S', 'M', 'L'].map(size => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "py-3 text-center border font-sans font-semibold transition-colors",
                      selectedSize === size ? "border-primary bg-primary-container text-on-primary-container" : "border-stone-200 hover:border-primary"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-6">
            <button className="w-full py-5 bg-primary text-white font-sans font-bold uppercase tracking-[0.2em] shadow-lg shadow-primary/20 hover:opacity-90 transition-all active:scale-[0.99]">
              Add to Studio Bag
            </button>
            <button className="w-full py-5 border border-secondary text-secondary font-sans font-bold uppercase tracking-[0.2em] hover:bg-secondary/5 transition-all">
              Wishlist
            </button>
          </div>

          <div className="pt-8 border-t border-stone-100 space-y-6">
            <details className="group" open>
              <summary className="flex justify-between items-center cursor-pointer list-none py-2 font-serif uppercase tracking-widest text-sm">
                <span>Reformer Ready Features</span>
                <ChevronDown className="w-4 h-4 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="pt-4 space-y-4">
                {product.features?.map((feature, idx) => {
                  const [title, desc] = feature.split(': ');
                  return (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <div>
                        <h4 className="text-sm font-sans font-bold text-on-background">{title}</h4>
                        <p className="text-sm font-sans text-stone-500">{desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="bg-surface-container-low py-32 mt-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 md:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-24">
            <div className="space-y-8">
              <h2 className="text-5xl font-serif leading-tight">Designed for the <br/><span className="italic text-primary">Art of Movement.</span></h2>
              <p className="text-lg font-sans text-on-surface-variant max-w-md">{product.description}</p>
              <div className="flex items-center gap-12 pt-4">
                <div className="text-center">
                  <p className="text-2xl font-serif text-primary">0.4mm</p>
                  <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-stone-400">Fabric Gauge</p>
                </div>
                <div className="h-12 w-px bg-stone-200" />
                <div className="text-center">
                  <p className="text-2xl font-serif text-primary">100%</p>
                  <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-stone-400">Squat Proof</p>
                </div>
                <div className="h-12 w-px bg-stone-200" />
                <div className="text-center">
                  <p className="text-2xl font-serif text-primary">4-Way</p>
                  <p className="text-[10px] font-sans font-semibold uppercase tracking-widest text-stone-400">Dynamic Stretch</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] w-full bg-white shadow-2xl overflow-hidden rounded-sm">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6cK9kzVXNxfTFn-QhKxeFTxJrPmFDE2HqsBQDxrncIE8v60BpoyFv_m4n-R09KynLAatdMEqTPxKCzUjudinkeK48hZUWvPhyZ0V1QpF9H8t2ormByj9k6lhNz_nCMAgZPHvM84ov9TLy056KyB6LED2Pg3Yr16ZCWWNbS0L71h-NfvYkbaawL32bjd1qY9nKIjxDqPAUiVyYZYpNoOuoBw_qgWPAlGmZ6PTzH9P_egd9zTM_QML5LzfZ3-3A7hq_hoY7wA9FI8c" alt="Art of movement" />
              </div>
              <div className="absolute -bottom-12 -left-12 w-48 h-48 glass-card border border-white/40 p-6 flex flex-col justify-center items-center text-center">
                <Star className="text-primary w-8 h-8 mb-2" />
                <p className="text-[10px] font-sans font-semibold uppercase tracking-widest leading-relaxed">Sustainably Crafted In Milan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="max-w-7xl mx-auto px-8 md:px-24 py-32">
        <div className="text-center mb-16">
          <span className="text-xs text-primary font-sans font-semibold uppercase tracking-[0.2em] mb-4 block">Curated For You</span>
          <h2 className="text-3xl font-serif">Complete the Studio Look</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {PRODUCTS.slice(1, 4).map(p => (
            <div key={p.id} className="group cursor-pointer">
              <Link to={`/product/${p.id}`}>
                <div className="aspect-[3/4] overflow-hidden bg-surface-container mb-6 rounded-sm">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={p.image} alt={p.name} />
                </div>
                <h3 className="text-xs font-sans font-semibold uppercase tracking-widest mb-1">{p.name}</h3>
                <p className="text-sm font-sans text-stone-500">${p.price.toFixed(2)}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
