import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const bubbles = Array.from({ length: 15 });

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-dark-navy">
      {/* Editorial Background Background */}
      <div className="bg-dots"></div>

      {/* Carbonation Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((_, i) => (
          <div 
            key={i}
            className="absolute bottom-[-10%] rounded-full bg-pepsi-cyan/10 animate-bubble-rise"
            style={{
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 15 + 5}px`,
              height: `${Math.random() * 15 + 5}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 4}s`
            }}
          />
        ))}
      </div>

      <div className="container-custom section-padding relative z-10 grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left pt-10 lg:pt-0"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="editorial-label"
          >
            Experience the fizz
          </motion.span>
          
          <h1 className="text-7xl md:text-9xl xl:text-[110px] mb-8 leading-[0.9]">
            THAT <span className="text-gradient">PEPSI</span> <br /> FEELING
          </h1>
          
          <p className="text-xl md:text-2xl text-soft-grey mb-12 max-w-lg mx-auto lg:mx-0">
            Refreshingly bold. Impossibly refreshing. Discover the pulse of a generation in every sip of ice-cold Pepsi.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-12">
            <Link to="/products">
              <button className="btn-primary w-full sm:w-auto">Shop Now</button>
            </Link>
            <Link to="/products">
              <button className="btn-secondary w-full sm:w-auto">Explore Flavours</button>
            </Link>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[#FFC107] text-[#FFC107]" />
              ))}
            </div>
            <span className="text-sm font-medium text-soft-grey">Loved by 50M+ fans worldwide</span>
          </div>
        </motion.div>

        {/* Right Content - Product Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
          animate={{ opacity: 1, scale: 1, rotate: -5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative flex items-center justify-center lg:justify-end"
        >
          {/* Circular Glow */}
          <div className="absolute w-full aspect-square bg-pepsi-blue/20 rounded-full blur-[120px] animate-pulse"></div>
          
          {/* Can Placeholder */}
          <div className="relative w-48 h-96 lg:w-[320px] lg:h-[520px] animate-float">
            <div className="absolute inset-0 rounded-[40px] bg-pepsi-blue overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_40px_rgba(0,75,147,0.3)] border-4 border-white/10">
              <div className="absolute top-0 w-full h-[35%] bg-pepsi-red"></div>
              <div className="absolute top-[35%] w-full h-1/2 flex items-center justify-center">
                <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full bg-white relative overflow-hidden flex items-center justify-center scale-150 rotate-[20deg] border-8 border-white">
                  <div className="absolute top-0 w-full h-1/2 bg-pepsi-red"></div>
                  <div className="absolute bottom-0 w-full h-1/2 bg-pepsi-blue"></div>
                  <div className="absolute w-full h-[3px] bg-white rotate-[-30deg]"></div>
                </div>
              </div>
              <div className="absolute bottom-10 left-0 right-0 text-center">
                <span className="font-display text-4xl lg:text-7xl text-white opacity-20">PEPSI</span>
              </div>
            </div>
            
            {/* Gloss Reflection */}
            <div className="absolute top-0 left-6 w-8 h-full bg-white/10 blur-xl rounded-full translate-x-12"></div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Strip Stats */}
      <div className="absolute bottom-12 left-12 hidden xl:flex gap-16 z-20">
        {[
          { val: "140+", label: "Countries" },
          { val: "4.9★", label: "Avg Rating" },
          { val: "1893", label: "Established" }
        ].map((stat, i) => (
          <div key={i} className="flex flex-col">
            <span className="font-display text-4xl text-white">{stat.val}</span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-soft-grey leading-none mt-1">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-pepsi-cyan flex flex-col items-center gap-2 cursor-pointer"
      >
        <span className="text-xs font-medium uppercase tracking-[0.2em] opacity-40">Explore</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
}
