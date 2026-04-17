import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { ShoppingCart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductShowcase() {
  return (
    <section className="section-padding bg-black/20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="editorial-label">Our Iconic Range</span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl mb-6"
          >
            Pick Your <span className="text-pepsi-cyan">Pepsi</span>
          </motion.h2>
          <div className="w-24 h-1 bg-pepsi-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white/5 border border-pepsi-cyan/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,191,255,0.2)]"
            >
              {/* Product Badge */}
              {product.tag && (
                <div className="absolute top-4 right-4 bg-pepsi-cyan text-dark-navy text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider z-10">
                  {product.tag}
                </div>
              )}

              {/* Product Image Area */}
              <div className="relative aspect-square mb-6 flex items-center justify-center">
                <div className={`absolute inset-0 rounded-full blur-[40px] opacity-20 ${product.color}`}></div>
                <div className={`w-32 h-56 rounded-[20px] shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 overflow-hidden ${product.color}`}>
                  <div className="absolute top-0 w-full h-[30%] bg-black/20"></div>
                  <div className="absolute top-[30%] w-full h-1/2 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white relative overflow-hidden flex items-center justify-center scale-110 rotate-[20deg]">
                      <div className="absolute top-0 w-full h-1/2 bg-pepsi-red"></div>
                      <div className="absolute bottom-0 w-full h-1/2 bg-pepsi-blue"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-2xl mb-1">{product.name}</h3>
                <p className="text-xs text-soft-grey mb-3">{product.description}</p>
                <div className="flex items-center justify-center gap-4 mb-4">
                   <div className="px-2 py-1 bg-white/5 rounded-md text-[10px] text-soft-grey uppercase tracking-tighter">
                    {product.calories}
                   </div>
                   <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={10} className={`${i < product.rating ? 'fill-pepsi-cyan text-pepsi-cyan' : 'text-soft-grey/20'}`} />
                    ))}
                   </div>
                </div>
                <div className="flex items-center justify-between mt-auto">
                    <span className="text-2xl font-display">£{product.price}</span>
                    <button className="bg-pepsi-cyan text-dark-navy p-3 rounded-2xl hover:bg-white transition-colors">
                      <ShoppingCart size={20} />
                    </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link to="/products">
            <button className="btn-secondary group">
              View All Products
              <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
