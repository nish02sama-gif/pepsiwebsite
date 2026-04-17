import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS } from '../constants';
import { Search, SlidersHorizontal, Grid3X3, List as ListIcon, X, ShoppingCart } from 'lucide-react';

export default function ProductsPage() {
  const [filter, setFilter] = useState('All');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Featured');

  const categories = ['All', 'Cola', 'Zero Sugar', 'Fruity', 'Limited Edition'];

  const filteredProducts = PRODUCTS.filter(p => 
    filter === 'All' || 
    p.tag?.includes(filter) || 
    p.description.toLowerCase().includes(filter.toLowerCase()) ||
    (filter === 'Cola' && p.id === 'original')
  );

  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="container-custom px-6">
        {/* Header */}
        <div className="mb-12">
          <div className="text-sm text-soft-grey mb-4 uppercase tracking-widest flex items-center gap-2">
            Home <span className="text-[10px]">/</span> <span className="text-white">Products</span>
          </div>
          <h1 className="text-6xl md:text-8xl mb-8">All Pepsi Products</h1>
          
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white/5 p-4 rounded-3xl border border-white/10">
            <div className="flex items-center gap-4 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2 rounded-full font-display text-lg whitespace-nowrap transition-all ${
                    filter === cat ? 'bg-pepsi-cyan text-dark-navy' : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4 w-full md:w-auto">
              <button 
                className="md:hidden flex-1 btn-secondary flex items-center justify-center gap-2 py-2 px-4 h-11"
                onClick={() => setMobileFilterOpen(true)}
              >
                <SlidersHorizontal size={18} /> Filter
              </button>
              <div className="hidden md:flex items-center bg-dark-navy border border-white/10 rounded-full px-4 py-2 h-11">
                <span className="text-xs text-soft-grey mr-2 uppercase font-bold">Sort By:</span>
                <select 
                  className="bg-transparent text-sm focus:outline-none cursor-pointer"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option className="bg-dark-navy">Featured</option>
                  <option className="bg-dark-navy">Newest</option>
                  <option className="bg-dark-navy">Price: Low to High</option>
                  <option className="bg-dark-navy">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <AnimatePresence>
            {filteredProducts.map((product, idx) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group bg-white/5 border border-white/10 rounded-[32px] p-6 hover:bg-white/10 transition-all"
              >
                <div className="relative aspect-square mb-6 flex items-center justify-center">
                  <div className={`absolute inset-0 rounded-full blur-[40px] opacity-10 ${product.color}`}></div>
                  <div className={`w-32 h-56 rounded-[20px] shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3 overflow-hidden ${product.color}`}>
                    <div className="absolute top-0 w-full h-[30%] bg-black/20"></div>
                    <div className="absolute top-[30%] w-full h-1/2 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white relative overflow-hidden flex items-center justify-center scale-110 rotate-[20deg]">
                        <div className="absolute top-0 w-full h-1/2 bg-pepsi-red"></div>
                        <div className="absolute bottom-0 w-full h-1/2 bg-pepsi-blue"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl mb-1">{product.name}</h3>
                <p className="text-xs text-soft-grey mb-4 line-clamp-1">{product.description}</p>
                
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-display">£{product.price}</span>
                    <span className="text-[10px] text-soft-grey ml-2 uppercase">{product.calories}</span>
                  </div>
                  <button className="bg-pepsi-red text-white p-3 rounded-2xl hover:scale-110 transition-transform">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-3xl text-soft-grey">No products found for this filter.</h3>
            <button 
              onClick={() => setFilter('All')}
              className="mt-4 text-pepsi-cyan hover:underline"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Modal */}
      <AnimatePresence>
        {mobileFilterOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '100%' }}
            className="fixed inset-0 z-50 bg-dark-navy p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-4xl">Filter & Sort</h2>
              <button 
                onClick={() => setMobileFilterOpen(false)}
                className="text-pepsi-cyan"
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="space-y-8 flex-1 overflow-y-auto">
              <div className="space-y-4">
                <h3 className="text-xl text-pepsi-cyan">Category</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setFilter(cat)}
                      className={`px-6 py-2 rounded-full font-display text-lg ${
                        filter === cat ? 'bg-pepsi-cyan text-dark-navy' : 'bg-white/5'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl text-pepsi-cyan">Sort By</h3>
                <div className="flex flex-col gap-2">
                  {['Featured', 'Newest', 'Price Low-High', 'Price High-Low'].map(s => (
                    <button 
                      key={s}
                      onClick={() => setSortBy(s)}
                      className={`text-left text-2xl font-display py-2 ${sortBy === s ? 'text-pepsi-cyan' : 'text-white'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              className="btn-primary w-full py-5 text-2xl mt-8"
              onClick={() => setMobileFilterOpen(false)}
            >
              Apply Changes
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
