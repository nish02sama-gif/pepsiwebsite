import React from 'react';
import { Instagram, Twitter, Facebook, Youtube, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark-navy pt-20 pb-12 border-t border-white/5 relative">
      <div className="bg-dots"></div>
      <div className="container-custom px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start mb-20 gap-16">
          <div className="max-w-sm">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-white relative overflow-hidden flex items-center justify-center border-2 border-white">
                <div className="absolute top-0 w-full h-1/2 bg-pepsi-red"></div>
                <div className="absolute bottom-0 w-full h-1/2 bg-pepsi-blue"></div>
                <div className="absolute w-full h-[6px] bg-white rotate-[-15deg]"></div>
              </div>
              <span className="font-display text-3xl tracking-wider">PEPSI</span>
            </Link>
            <p className="text-soft-grey leading-relaxed text-sm">
              Refreshingly bold. Impossibly refreshing. Experience the pulse of a generation in every sip of ice-cold Pepsi. Since 1893.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-16 flex-1">
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-[0.2em] text-pepsi-cyan font-bold">Products</h4>
              <ul className="space-y-3 text-sm font-medium text-white/60">
                <li className="hover:text-pepsi-cyan cursor-pointer transition-colors">All Flavours</li>
                <li className="hover:text-pepsi-cyan cursor-pointer transition-colors">Zero Sugar</li>
                <li className="hover:text-pepsi-cyan cursor-pointer transition-colors">Limited Drop</li>
                <li className="hover:text-pepsi-cyan cursor-pointer transition-colors">Multipacks</li>
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-xs uppercase tracking-[0.2em] text-pepsi-cyan font-bold">Company</h4>
              <ul className="space-y-3 text-sm font-medium text-white/60">
                <li className="hover:text-pepsi-cyan cursor-pointer transition-colors">Our Story</li>
                <li className="hover:text-pepsi-cyan cursor-pointer transition-colors">Sustainability</li>
                <li className="hover:text-pepsi-cyan cursor-pointer transition-colors">Press Room</li>
                <li className="hover:text-pepsi-cyan cursor-pointer transition-colors">Careers</li>
              </ul>
            </div>
            <div className="space-y-6 hidden lg:block">
              <h4 className="text-xs uppercase tracking-[0.2em] text-pepsi-cyan font-bold">Connect</h4>
              <div className="flex gap-4">
                 {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                   <Icon key={i} size={20} className="opacity-50 hover:opacity-100 hover:text-pepsi-cyan transition-all cursor-pointer" />
                 ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] uppercase tracking-[0.2em] text-soft-grey">
            © 2025 PepsiCo Inc. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] text-soft-grey">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-white cursor-pointer transition-colors">Accessibility</span>
          </div>
          <button className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-soft-grey border border-white/10 rounded-full px-5 py-2 hover:bg-white/5 transition-all">
            <Globe size={14} />
            UK · English
          </button>
        </div>
        <div className="mt-8 text-center">
           <span className="text-[9px] uppercase tracking-[0.5em] text-soft-grey/20">Drink Responsibly</span>
        </div>
      </div>
    </footer>
  );
}

import { ChevronRight } from 'lucide-react';
