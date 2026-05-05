import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[884px] w-full overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0 scale-105">
          <img 
            className="w-full h-full object-cover grayscale-[20%] opacity-90" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmirUt64MR1DHBcIiLec1WEzyPiBDVxWjmLofxS6M94nSVsuAStPAQAwVCDUFoiXVc_-a452hg_m7cmHpaJXq1fUYKu1e8P1SBt4A5zUodWzpgDuyG5ybH9CzMxEEi-ebGzpkK5G0c-_4-wAcWT7S39XSmuzmrDzkd6og4UM-l0x6xrfWn43ZIlDupvCUT2k0_VYI67AW6SBwsS4mBsxgJ23Z7i1HgD190ABVYtj5YPejLzPpDR3YWW5TPW4XpY_qvVynTLw91498" 
            alt="Graceful reformer movement"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-serif font-light text-on-surface mb-6 max-w-4xl mx-auto"
          >
            Grace in Every <br/><span className="italic font-light">Movement</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl font-sans text-on-surface-variant mb-10 max-w-xl mx-auto opacity-80"
          >
            Designed for the studio, curated for the soul. High-performance fabrics meet an ethereal aesthetic.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/collection" className="px-10 py-4 bg-primary text-on-primary font-sans font-semibold tracking-wider text-sm rounded-full shadow-ambient hover:scale-105 transition-transform">
              Explore Collections
            </Link>
            <Link to="/brand-story" className="px-10 py-4 border border-outline/30 bg-white/20 backdrop-blur-md text-on-surface font-sans font-semibold tracking-wider text-sm rounded-full hover:bg-white/40 transition-all">
              Brand Story
            </Link>
          </motion.div>
        </div>
        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-[10px] font-sans tracking-[0.4em] uppercase text-stone-400">Discover</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-stone-400 to-transparent"></div>
        </div>
      </section>

      {/* Curated Collections */}
      <section className="py-[120px] px-8 md:px-24 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-md">
              <h2 className="text-4xl font-serif mb-6">Designed for Your Practice</h2>
              <p className="text-lg font-sans text-on-surface-variant">Every stitch is considered, every silhouette sculpted to support the fluidity of Pilates, the strength of Reformer, and the breath of Yoga.</p>
            </div>
            <div className="flex gap-4">
              <button className="p-4 rounded-full border border-stone-200 text-stone-400 hover:text-primary hover:border-primary transition-all">
                <ArrowLeft className="w-5 h-5" />
              </button>
              <button className="p-4 rounded-full border border-stone-200 text-stone-400 hover:text-primary hover:border-primary transition-all">
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-7 group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-surface-container-low">
                <img 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCXsiJjEKejjzpUC6-iIBHlEW2SWsWOYDxEWziOim7JPEXRgEPo0PvnQkXrAH3tOMBwOWzFsJHHbRe9SEiRVAJ_fBFB_1b1rxmdjh-BXrFt-uEgjZs0CNE53bNRfpbgSQziGwVyyyzUrS_6-B7ogzZp1wmy4ygKAooOzMMLtBUhSkM1HmawVP4GK5wPAqhZchoBiH8UnkAl_lgb1xUBRtVOOnxN54GZrvHGt45wBs1CqFzF8iHngZuy9Gde6MEs_WkrsOW7_B1eUo" 
                  alt="Pilates Edit"
                />
              </div>
              <h3 className="text-2xl font-serif mb-2">The Pilates Edit</h3>
              <p className="text-xs font-sans text-on-surface-variant uppercase tracking-widest">Mat & Studio Essentials</p>
            </div>
            
            <div className="md:col-span-5 flex flex-col gap-16">
              <div className="group cursor-pointer">
                <div className="relative aspect-square overflow-hidden mb-8 bg-surface-container-low">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ_XlLCnRzokUx2QCbvVWJ8OE3W0nwnbepiBHOHb4xXccZ7ofjdLomrODO4SKoyAcO8fiFgUJiZcjW9SZgswwhqQ7a_RHCE4rlRW2_f-xxS6nJW9dXFavx69d3LZ5TX-hvV-ejQaphDIxpM3fiARnx6Vgs5IxJIJ55DQrb_uDl7SHudF5gCWcDFUJl27eEe8mldqK4o5KPwYnfZaj6FV9zWl0JqrMKGbUtUt7Z4zvE-7498U26yFmmbd65L_fXxE7i92422X6jsHU" 
                    alt="Reformer Core"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2">Reformer Core</h3>
                <p className="text-xs font-sans text-on-surface-variant uppercase tracking-widest">Technical Performance</p>
              </div>
              
              <div className="group cursor-pointer">
                <div className="relative aspect-[4/3] overflow-hidden mb-8 bg-surface-container-low">
                  <img 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCdKbj0E_j9JPrTW4DSKzhHmHRR_lgGavJAiJA3nzvL8KN-jouG5MlcUb78NO8dtAbSxorwdvYbz4CtWahgHielrLGq_-f8vt7YVRd_PZxZKVbfjYkJ9WSGODoYW---Rd3aOUmqeCQ5jM6DvzUFckdieqGR2Ng6V_8taOTS6Gj-V_gggjWQBRfOfiphGjS7Od_plzb8Dbjm8Yu0fMofvilVfXY9zV3jq4AxFdhgQTJD4JfcbnOxVmOz-YqWAITdQE_27NiI8eaCZL4" 
                    alt="Soulful Flow"
                  />
                </div>
                <h3 className="text-2xl font-serif mb-2">Soulful Flow</h3>
                <p className="text-xs font-sans text-on-surface-variant uppercase tracking-widest">Yoga & Meditation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop the Look */}
      <section className="py-[120px] px-8 md:px-24 bg-surface-container">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-xs text-primary font-sans font-semibold tracking-[0.3em] uppercase mb-4 block">Curated Sets</span>
            <h2 className="text-4xl font-serif">Shop the Studio Look</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="md:col-span-2 md:row-span-2 bg-white p-12 flex flex-col justify-between group rounded-sm shadow-sm">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="bg-primary-container text-on-primary-container px-4 py-1 rounded-full text-[10px] font-sans font-semibold uppercase">Limited Edition</span>
                </div>
                <img 
                  className="w-4/5 mx-auto mb-12 transition-transform group-hover:scale-110 duration-500" 
                  src={PRODUCTS[0].image} 
                  alt={PRODUCTS[0].name} 
                />
              </div>
              <div>
                <h4 className="text-2xl font-serif mb-2">{PRODUCTS[0].name}</h4>
                <p className="text-stone-400 text-sm mb-6">Available in {PRODUCTS[0].colorName}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-serif text-primary">${PRODUCTS[0].price}</span>
                  <button className="w-12 h-12 bg-on-background text-white rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            
            {PRODUCTS.slice(1, 5).map((product) => (
              <div key={product.id} className="bg-white p-8 group rounded-sm shadow-sm">
                <div className="relative mb-6 overflow-hidden aspect-square">
                  <img 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                    src={product.image} 
                    alt={product.name} 
                  />
                </div>
                <h4 className="text-sm font-sans font-semibold text-stone-800 mb-1">{product.name}</h4>
                <p className="text-stone-400 text-sm mb-4">${product.price}</p>
                <button className="text-[10px] font-sans font-semibold uppercase tracking-widest text-primary border-b border-primary/20 pb-1">Quick Add</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Movement Invitation */}
      <section className="py-[160px] px-8 md:px-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-24">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[3/4] relative z-10">
              <img 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpIBOXPy84JQF_2KuB7u4jzcNHU0hbKoX7kp7ZSdvpgEc1YfvXsozFE4w691pz7J6_9Wbzaw9YVfj4cYTKLRLe0Ff0dN6XzLA532aAZ4GjcMaBmpBTcv3XYwyP2DY9kYQ4cx8IJ1-whxrfwSoEyR-TtSuavv5jRgqNsYGLmyWr4MPSx6iiYWvWHc5l1BePcyPQ2rLQWy7ynEbYmMb9iRNmLXIzci0S1w_CpZd7DBWXQAd_qBmiFQ3IbaFNZtd6AhvqOs77_czH7lk" 
                alt="Movement as Meditation"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-2/3 h-2/3 bg-primary-container/30 -z-10"></div>
          </div>
          <div className="w-full md:w-1/2">
            <span className="text-xs text-primary font-sans font-semibold tracking-[0.3em] uppercase mb-6 block">Join the Circle</span>
            <h2 className="text-5xl font-serif mb-8">Movement as Meditation</h2>
            <p className="text-xl text-on-surface-variant mb-12">Sign up for our Journal to receive exclusive studio guides, movement sequences, and early access to new collections.</p>
            <form className="flex flex-col gap-6">
              <div className="relative">
                <input 
                  className="w-full bg-transparent border-0 border-b border-stone-200 py-4 font-serif text-sm tracking-widest focus:ring-0 focus:border-primary transition-colors placeholder:text-stone-300" 
                  placeholder="YOUR EMAIL ADDRESS" 
                  type="email" 
                />
              </div>
              <button className="self-start px-12 py-4 bg-on-background text-white rounded-full font-sans font-semibold text-sm hover:bg-primary transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
