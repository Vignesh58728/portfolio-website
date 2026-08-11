import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Mail } from 'lucide-react';
import aboutCutout from '../assets/vignesh_blackshirt_cutout.png';

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#2C2C2C] relative overflow-hidden select-none">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 relative">
        <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-16 min-h-[560px]">

          {/* Left Corner: Overlapping Brittany Calligraphy Title & Person Cutout Flush in Left Corner */}
          <div className="relative w-full lg:w-6/12 flex justify-start items-end min-h-[460px] sm:min-h-[540px]">
            
            {/* Giant Calligraphic "about me" Typography in Top-Left Corner */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute top-0 left-0 z-0 pointer-events-none w-full"
            >
              <h1 className="font-brittany text-[38vw] sm:text-[30vw] lg:text-[21vw] leading-[0.65] text-[#9E2A2B] font-normal tracking-normal select-none">
                about <br />
                <span className="ml-[30vw] sm:ml-[24vw] lg:ml-[16vw] block mt-[-3vw]">me</span>
              </h1>
            </motion.div>

            {/* Person Cutout Anchored Flush in Bottom-Left Corner */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10 w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[440px] pt-16 sm:pt-20 self-end -ml-16 sm:-ml-28 lg:-ml-36"
            >
              <img
                src={aboutCutout}
                alt="Vigneshwaran"
                className="w-full h-auto object-contain filter drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)]"
              />
            </motion.div>
          </div>

          {/* Right Corner: Handle Name, Narrative & Action Buttons Flush to Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-5/12 flex flex-col justify-end pb-6 space-y-6 text-left"
          >
            {/* Handle Name */}
            <h3 className="font-satisfy text-3xl sm:text-4xl text-[#9E2A2B] tracking-wide">
              _Vigneshwaran_
            </h3>

            {/* Narrative Description */}
            <p className="font-sans text-base sm:text-lg text-[#5A524C] leading-relaxed font-normal">
              A Space for Web Development, WordPress solutions, SEO optimization, and thoughtful insights into AI-driven technologies and everything in between.
            </p>

            {/* Additional Academic & Event Milestones */}
            <p className="font-sans text-sm sm:text-base text-[#7D736A] leading-relaxed font-light">
              Pursuing B.Tech in Artificial Intelligence & Data Science @ M.I.E.T. Engineering College, with 10+ completed freelance projects and 35+ tech event milestones.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="projects" smooth={true} duration={500}>
                <button className="bg-[#9E2A2B] hover:bg-[#832223] text-white rounded-full px-8 py-3.5 text-sm font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer">
                  View Projects <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <button className="border border-[#9E2A2B]/40 hover:border-[#9E2A2B] text-[#9E2A2B] hover:bg-[#9E2A2B]/5 rounded-full px-8 py-3.5 text-sm font-medium transition-all flex items-center gap-2 cursor-pointer">
                  Contact Me <Mail className="w-4 h-4" />
                </button>
              </Link>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
