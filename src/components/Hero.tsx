import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import heroTransparent from '../assets/jersey_profile_cutout.png';

export const Hero = () => {
  return (
    <section id="home" className="relative pt-24 min-h-screen flex flex-col justify-between px-6 sm:px-12 md:px-16 bg-[#0B0B0B] text-[#EAE0D5] overflow-hidden select-none">
      
      {/* Top Bar: Sub-heading & Action Arrow */}
      <div className="flex justify-between items-center w-full z-30 pt-4 md:pt-6">
        <span className="text-xs sm:text-sm md:text-base font-semibold tracking-[0.25em] text-[#EAE0D5]/80 uppercase font-sans">
          FULL STACK DEVELOPER
        </span>
        <Link to="contact" smooth={true} duration={500} className="group cursor-pointer">
          <div className="p-2 sm:p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
            <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-[#EAE0D5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </Link>
      </div>

      {/* Center 3D Cutout PORTFOLIO Section */}
      <div className="relative flex-1 flex items-center justify-center min-h-[380px] sm:min-h-[460px] md:min-h-[540px] my-4 sm:my-0">
        
        {/* Layer 1: Animated Split Background Typography (PORT from left, FOLIO from right) */}
        <h1 className="text-[#EAE0D5] font-bebas text-[22vw] sm:text-[20vw] md:text-[18vw] leading-none tracking-normal text-center uppercase select-none font-bold flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0, x: -180 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="inline-block"
          >
            PORT
          </motion.span>
          <motion.span
            initial={{ opacity: 0, x: 180 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="inline-block"
          >
            FOLIO
          </motion.span>
        </h1>

        {/* Layer 2: Center Cutout Image (animates in right after PORT and FOLIO meet) */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="absolute bottom-0 z-10 flex justify-center items-end h-[90%] sm:h-[95%] md:h-[100%] max-h-[620px] pointer-events-none"
        >
          <img
            src={heroTransparent}
            alt="Vigneshwaran"
            className="h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
          />
        </motion.div>

      </div>

      {/* Bottom Footer Details */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 w-full z-30 pb-6 pt-2">
        
        {/* Bottom Left: Name Signature & Subtitle */}
        <div className="space-y-1">
          <div className="relative inline-block">
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.2, delay: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="overflow-hidden whitespace-nowrap"
            >
              <h2 className="font-brittany text-3xl sm:text-4xl md:text-5xl text-[#EAE0D5] tracking-wide inline-block leading-normal pr-3 select-none">
                Vigneshwaran
              </h2>
            </motion.div>
            
            {/* Live Handwriting Underline Stroke */}
            <svg className="w-full h-3 overflow-visible mt-[-8px]" viewBox="0 0 240 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path
                d="M 4 7 C 60 2, 140 11, 235 5"
                stroke="#EAE0D5"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.7 }}
                transition={{ duration: 1.4, delay: 2.0, ease: "easeOut" }}
              />
            </svg>
          </div>

          <p className="text-xs sm:text-sm text-gray-400 font-normal max-w-xs sm:max-w-sm leading-relaxed font-sans tracking-wide">
            Building Scalable Web Solutions with Clean Code.
          </p>
        </div>

        {/* Bottom Right: Callout & Tech Stack Icons */}
        <div className="flex flex-col items-start md:items-end gap-2.5">
          <span className="text-[10px] sm:text-xs tracking-[0.2em] text-gray-400 uppercase font-medium font-sans">
            LET'S BUILD THE FUTURE TOGETHER
          </span>
          <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-4 py-2 backdrop-blur-md">
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity" title="React" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity" title="JavaScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity" title="TypeScript" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg" alt="WordPress" className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity" title="WordPress" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity" title="Python" />
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="w-5 h-5 opacity-80 hover:opacity-100 transition-opacity" title="Git" />
          </div>
        </div>

      </div>

    </section>
  );
};

