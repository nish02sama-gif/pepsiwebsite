import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock } from 'lucide-react';

export default function Campaign() {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const campaigns = [
    { title: "Summer Sounds", category: "Music", color: "from-pepsi-blue to-purple-600" },
    { title: "Pepsi x UEFA", category: "Sports", color: "from-emerald-600 to-pepsi-blue" },
    { title: "Mango Twist", category: "Limited Drop", color: "from-orange-500 to-pepsi-red" }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Diagonal Background Split */}
      <div className="absolute inset-0 flex -z-10 bg-dark-navy">
        <div className="w-1/2 bg-pepsi-blue skew-x-[-15deg] origin-top translate-x-[-15%]"></div>
        <div className="w-1/2 bg-pepsi-red skew-x-[-15deg] origin-bottom translate-x-[15%]"></div>
      </div>

      <div className="container-custom section-padding">
        <div className="text-center mb-16 relative z-10">
          <span className="editorial-label">Live Campaigns</span>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-8xl text-white drop-shadow-2xl"
          >
            THE BEAT <span className="text-pepsi-cyan">NEVER</span> STOPS
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {campaigns.map((camp, i) => (
            <motion.div
              key={i}
              initial={{ rotateY: 90, opacity: 0 }}
              whileInView={{ rotateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="bg-dark-navy/80 backdrop-blur-xl border border-white/10 p-8 rounded-[40px] h-full transition-all duration-500 hover:border-pepsi-cyan/40 hover:-translate-y-4">
                <div className={`aspect-video rounded-3xl mb-6 bg-gradient-to-br ${camp.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-10 scale-[3] group-hover:scale-[3.5] group-hover:opacity-20 transition-all duration-700">
                    <span className="font-display">PEPSI</span>
                  </div>
                </div>
                <span className="text-pepsi-cyan text-xs font-bold uppercase tracking-widest">{camp.category}</span>
                <h3 className="text-3xl mt-2 mb-4">{camp.title}</h3>
                <p className="text-soft-grey text-sm mb-6">Experience the pulse of culture with exclusive access to the world's biggest stages.</p>
                <div className="flex items-center text-white font-display text-lg group-hover:text-pepsi-cyan transition-colors">
                  Learn More <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white/5 backdrop-blur-xl p-10 rounded-[50px] border border-white/10">
          <div>
            <div className="flex items-center gap-3 text-pepsi-cyan mb-2">
              <Clock className="animate-pulse" size={24} />
              <span className="font-display text-2xl tracking-widest uppercase">Limited Edition ends in:</span>
            </div>
            <div className="flex gap-4">
              {[
                { label: 'DD', val: timeLeft.days },
                { label: 'HH', val: timeLeft.hours },
                { label: 'MM', val: timeLeft.minutes },
                { label: 'SS', val: timeLeft.seconds }
              ].map((t, i) => (
                <div key={i} className="flex flex-col items-center">
                  <span className="text-4xl md:text-5xl font-display">{t.val.toString().padStart(2, '0')}</span>
                  <span className="text-[10px] text-soft-grey uppercase">{t.label}</span>
                </div>
              ))}
            </div>
          </div>
          <button className="btn-primary px-12 py-5 text-2xl">JOIN PEPSI PULSE →</button>
        </div>
      </div>
    </section>
  );
}
