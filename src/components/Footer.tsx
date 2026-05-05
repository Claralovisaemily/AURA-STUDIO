export default function Footer() {
  return (
    <footer className="bg-[#EFEFEF] w-full border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-12 md:px-24 py-32 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col gap-8 md:max-w-xs">
          <div className="text-lg font-light tracking-[0.2em] text-stone-800">ALUNÉA STUDIO</div>
          <p className="font-serif text-[11px] leading-relaxed text-stone-400 tracking-wider">
            PREMIUM ATHLEISURE DESIGNED FOR MINDFUL MOVEMENT AND ELEGANT STRENGTH. CRAFTED WITH PRECISION, INSPIRED BY GRACE.
          </p>
          <div className="flex gap-6">
            <a className="text-stone-400 hover:text-pink-400 transition-colors duration-300" href="#">Share</a>
            <a className="text-stone-400 hover:text-pink-400 transition-colors duration-300" href="#">Instagram</a>
            <a className="text-stone-400 hover:text-pink-400 transition-colors duration-300" href="#">Journal</a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-2 gap-16">
          <div className="flex flex-col gap-4">
            <span className="font-serif text-[10px] tracking-widest uppercase text-stone-900 font-semibold mb-4">Shop</span>
            <a className="font-serif text-[10px] tracking-widest uppercase text-stone-400 hover:text-pink-400 transition-colors duration-300" href="#">All Collections</a>
            <a className="font-serif text-[10px] tracking-widest uppercase text-stone-400 hover:text-pink-400 transition-colors duration-300" href="#">New Arrivals</a>
            <a className="font-serif text-[10px] tracking-widest uppercase text-stone-400 hover:text-pink-400 transition-colors duration-300" href="#">Sets</a>
            <a className="font-serif text-[10px] tracking-widest uppercase text-stone-400 hover:text-pink-400 transition-colors duration-300" href="#">Accessories</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-serif text-[10px] tracking-widest uppercase text-stone-900 font-semibold mb-4">Support</span>
            <a className="font-serif text-[10px] tracking-widest uppercase text-stone-400 hover:text-pink-400 transition-colors duration-300" href="#">Sustainability</a>
            <a className="font-serif text-[10px] tracking-widest uppercase text-stone-400 hover:text-pink-400 transition-colors duration-300" href="#">Size Guide</a>
            <a className="font-serif text-[10px] tracking-widest uppercase text-stone-400 hover:text-pink-400 transition-colors duration-300" href="#">Shipping</a>
            <a className="font-serif text-[10px] tracking-widest uppercase text-stone-400 hover:text-pink-400 transition-colors duration-300" href="#">Contact</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-12 md:px-24 pb-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-serif text-[10px] tracking-widest uppercase text-stone-400">© 2024 ALUNÉA STUDIO. DESIGNED FOR MOVEMENT.</span>
        <div className="flex gap-8">
          <span className="font-serif text-[10px] tracking-widest uppercase text-stone-400">Privacy Policy</span>
          <span className="font-serif text-[10px] tracking-widest uppercase text-stone-400">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
