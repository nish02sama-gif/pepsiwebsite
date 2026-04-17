import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Search, Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-navy/95 backdrop-blur-md py-4 border-b border-white/5' : 'bg-gradient-to-bottom from-dark-navy/80 to-transparent py-8'
      }`}
    >
      <div className="container-custom px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white relative overflow-hidden flex items-center justify-center border-2 border-white">
            <div className="absolute top-0 w-full h-1/2 bg-pepsi-red"></div>
            <div className="absolute bottom-0 w-full h-1/2 bg-pepsi-blue"></div>
            <div className="absolute w-full h-[6px] bg-white rotate-[-15deg]"></div>
          </div>
          <span className="font-display text-3xl tracking-wider">PEPSI</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {['Home', 'Products', 'Pepsi Pulse', 'Our Story'].map((link) => (
            <Link 
              key={link} 
              to={link === 'Products' ? '/products' : '/'} 
              className="text-xs font-bold uppercase tracking-[0.15em] opacity-80 hover:opacity-100 hover:text-pepsi-cyan transition-all"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Right side CTA */}
        <div className="flex items-center gap-6">
          <button className="hidden sm:block hover:text-pepsi-cyan transition-colors">
            <Search size={20} />
          </button>
          <Link to="/products" className="hidden md:block">
            <button className="bg-pepsi-red text-white py-2.5 px-6 rounded-full font-bold text-xs uppercase tracking-widest hover:scale-105 transition-transform">
              Shop Now
            </button>
          </Link>
          <button 
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-dark-navy z-[60] p-8 flex flex-col items-center justify-center gap-8"
          >
            <button 
              className="absolute top-8 right-8 text-pepsi-cyan"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={32} />
            </button>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-display text-4xl hover:text-pepsi-cyan">Home</Link>
            <Link to="/products" onClick={() => setMobileMenuOpen(false)} className="font-display text-4xl hover:text-pepsi-cyan">Products</Link>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-display text-4xl hover:text-pepsi-cyan">Pepsi Pulse</Link>
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="font-display text-4xl hover:text-pepsi-cyan">Our Story</Link>
            <Link to="/products" onClick={() => setMobileMenuOpen(false)}>
              <button className="btn-primary mt-4">Shop Now</button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
