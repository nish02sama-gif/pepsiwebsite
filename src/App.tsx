import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Campaign from './components/Campaign';
import EmailCapture from './components/EmailCapture';
import ProductsPage from './components/ProductsPage';

function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <ProductShowcase />
      <Campaign />
      {/* Social Proof (Inlined for simplicity) */}
      <section className="bg-dark-navy py-20 border-y border-white/5">
        <div className="container-custom px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { val: "50M+", label: "Fans Worldwide" },
              { val: "140+", label: "Countries" },
              { val: "4.9★", label: "Average Rating" },
              { val: "1893", label: "Established Year" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-5xl md:text-7xl font-display text-pepsi-cyan mb-2">{stat.val}</div>
                <div className="text-soft-grey uppercase tracking-widest text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EmailCapture />
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
