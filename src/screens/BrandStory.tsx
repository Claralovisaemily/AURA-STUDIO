import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function BrandStory() {
  return (
    <div className="w-full pt-24 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-[795px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            className="w-full h-full object-cover scale-105" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC55DgTRh2x6W7l0CTcXLE42zKNRQ82xv2Jgu8iRR1BR0SafaZOWCE4nY8XbGydVcyUK7yqXmcmhqDBKCgdC7k9UROXurP3ykQBHEPQxBWZYmeHFWbWQjzFEKc7xdINwbPbk1udSCaYCQbfblhX9M5LVBJqnESvk3E0uQ12ECaJjEjlRQrEkJ4EkiX8BshnxKvU02aa_i9V4qIxiXU9l6fVXe8Rpt1af6LjmEOzCKobNoqnkBVhbQ5N-MS2ggxhPZzf23ui-aLtLSo" 
            alt="Studio Architecture" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background"></div>
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs text-primary font-sans font-semibold tracking-[0.4em] uppercase mb-6 block"
          >
            The Philosophy
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-7xl font-serif text-on-background max-w-4xl mx-auto leading-tight"
          >
            Grace in Movement, <br/>Precision in Life.
          </motion.h1>
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-8 md:px-24 py-32 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5">
            <h2 className="text-4xl font-serif text-on-background mb-8">Rooted in the pursuit of intentionality.</h2>
            <p className="text-xl font-sans text-on-surface-variant mb-12">
              ALUNÉA was founded on the belief that movement should be a restorative dialogue between the mind and body. We have stripped away the noise of traditional fitness to reveal a practice centered on elegance, breath, and profound control.
            </p>
            <div className="flex items-center gap-4 text-primary group cursor-pointer font-sans font-semibold uppercase tracking-widest text-sm">
              <span className="border-b border-primary pb-1 group-hover:pr-4 transition-all duration-500">Discover our method</span>
            </div>
          </div>
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <div className="pt-12">
              <img 
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-ambient" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGlXzs0QWTnMEhyRnsGqbptBNQXlh7enWl_3P3teRIW7Rk9sHDz1DFJ-ZsHNR_EWH5vBFJK42V4FGF9ARha2swSwlYdTjpZZJJ0PGH-8FmGkKw1F_YIPY9wq00Vl-dwLwbsh47LoNfPIGPaZN9sWQIIVhfTxBCSWkfn5oWJWKmP8_vPlrpWr0QffANxLPeRtfJygJhf8jp91d5_T2VaRU9EV12PwpsPMJpOQO2HkoDroGJu5VzpZtvYkMjNLnuvjGgOGzoM2RAxQ8" 
                alt="Movement Detail"
              />
            </div>
            <div>
              <img 
                className="w-full aspect-[4/5] object-cover rounded-sm shadow-ambient" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvKNqYlKjI-Qe-XUUlBaowJtxdKaXS4T745t9k0KqKXNgJI7DPH0IS_ux1-LhMt8DRAoHN-cagQWnZ7ulCW4Qbd6gDDGdjJZGsUcbqqqc9N3ZY65oOhXFy7Fncu9fMQTE8EP4_vn4zUJ_5S7fA-1thoPs5eFFOazXSZRvll91IuVlaj3kuGiw69QTaDL-JTkqQOC1onklO7opvL_P4YDZv7YucHNo1VnxGM4hCAEE2ZJafcbyUhjY1iTxGVmIjetmng0txqCZB7_Q" 
                alt="Studio Detail"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="px-8 md:px-24 py-32 bg-surface-container">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-4xl font-serif text-stone-800">Our Core Pillars</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="bg-white p-12 flex flex-col justify-between aspect-square group hover:shadow-ambient transition-all duration-700 rounded-sm">
            <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary mb-8 transition-transform group-hover:scale-110">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">Pure Aesthetics</h3>
              <p className="text-sm font-sans text-stone-500">Every element of our space and practice is designed to inspire visual and mental clarity.</p>
            </div>
          </div>
          
          <div className="relative overflow-hidden aspect-square rounded-sm group">
            <img 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs3o-EVTiQhsu3w2rL9xyecPUX-L1spvAC3zzuDAL7fyQv1pKP7eBQ48seiJJZtHqsmMLfyiMGxICu__uIJ4h3Ku1t8XaHgFjIR9lQYQE4kg13nxaBtq8M6YLEsXbhK9K2fNDt0Bq-kxRG1T46M8ADMwxaxtrZhA70GcFOMFxctf46zoLpOJGhcdhZGQ2onT7-yyTLvbFofZJEaoTPpwaPZ_byGYpwNzB-PT2jEQOjSh_yRo3SHEiFaFd9b-vJWP9tlDcNcgHpYqU" 
              alt="Curated Spaces"
            />
            <div className="absolute inset-0 bg-stone-900/20 flex items-end p-12">
              <h3 className="text-2xl font-serif text-white">Curated Spaces</h3>
            </div>
          </div>

          <div className="bg-white p-12 flex flex-col justify-between aspect-square group hover:shadow-ambient transition-all duration-700 rounded-sm">
            <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary mb-8 transition-transform group-hover:scale-110">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-serif mb-4">Modern Technique</h3>
              <p className="text-sm font-sans text-stone-500">Traditional Joseph Pilates principles evolved for the demands of a high-performance lifestyle.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Quote */}
      <section className="relative py-48 px-8 md:px-24 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
          <span className="text-[20rem] font-serif font-light tracking-tighter">ALUNÉA</span>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Quote className="w-16 h-16 text-primary-container mx-auto mb-12 fill-current" />
          <p className="text-3xl font-serif italic leading-relaxed text-stone-700 mb-12">
            "Luxury is not about excess; it is about the space we create for ourselves to breathe, to move, and to simply be. ALUNÉA is that space."
          </p>
          <div className="flex flex-col items-center">
            <div className="w-12 h-[1px] bg-primary-container mb-6"></div>
            <span className="text-xs font-sans font-bold uppercase tracking-[0.3em] text-stone-900">Elena Valerius</span>
            <span className="text-sm font-sans text-stone-400 mt-2">Founder & Creative Director</span>
          </div>
        </div>
      </section>
    </div>
  );
}
