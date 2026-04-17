import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#004B93', '#E32636', '#00BFFF', '#FFFFFF']
      });
      localStorage.setItem('pepsi_subscribed', 'true');
    }
  };

  return (
    <section className="relative section-padding bg-pepsi-blue">
      {/* Wave Dividers */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 fill-dark-navy">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="editorial-label !text-white opacity-60">Join the movement</span>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-5xl md:text-7xl mb-6 leading-tight"
            >
              BE FIRST. <br /> DRINK FIRST.
            </motion.h2>
            <p className="text-xl text-white/80 mb-8 max-w-lg">
              Join the Pepsi Inner Circle. Get early access to new flavours, exclusive merch drops, and money-off vouchers.
            </p>
            <ul className="grid gap-4">
              {[
                "Early access to limited editions",
                "Exclusive discounts (up to 20% off)",
                "Behind-the-scenes brand content"
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-pepsi-cyan" size={20} />
                  <span className="font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-[40px] p-8 md:p-12 border border-white/20">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold ml-4">First Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 focus:outline-none focus:border-pepsi-cyan transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold ml-4">Email Address</label>
                    <input 
                      required
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 focus:outline-none focus:border-pepsi-cyan transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest font-bold ml-4">How do you drink your Pepsi?</label>
                    <select className="w-full bg-white/5 border border-white/20 rounded-full px-6 py-4 focus:outline-none focus:border-pepsi-cyan transition-colors appearance-none">
                      <option className="bg-pepsi-blue">Ice Cold</option>
                      <option className="bg-pepsi-blue">Room Temp</option>
                      <option className="bg-pepsi-blue">Over Ice</option>
                    </select>
                  </div>
                  <div className="flex items-start gap-3 ml-4">
                    <input type="checkbox" required className="mt-1 accent-pepsi-cyan" />
                    <span className="text-xs text-white/60">I agree to Pepsi's Privacy Policy and to receive marketing updates.</span>
                  </div>
                  <button className="btn-primary w-full py-5 text-2xl flex items-center justify-center gap-3">
                    JOIN THE INNER CIRCLE <Send size={24} />
                  </button>
                  <p className="text-[10px] text-center text-white/40 uppercase tracking-widest">No spam. Unsubscribe anytime.</p>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-20 h-20 bg-pepsi-cyan text-dark-navy rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-4xl mb-2">Welcome to the inner circle!</h3>
                  <p className="text-white/80">Check your inbox for your first exclusive drop.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12 fill-dark-navy">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
}
