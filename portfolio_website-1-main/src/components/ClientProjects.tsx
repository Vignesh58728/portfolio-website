import { motion } from 'framer-motion';
import { ExternalLink, Globe } from 'lucide-react';
import nammaOoruImg from '../assets/nammaooru_events.png';
import arcPairImg from '../assets/arc_pair_studio.png';
import dreamLenzImg from '../assets/dream_lenz.png';
import detailingImg from '../assets/detailing_unlimited.png';

export interface ClientProjectItem {
  id: string;
  title: string;
  image?: string;
  link?: string;
}

export const clientProjectsData: ClientProjectItem[] = [
  {
    id: 'nammaooru-events',
    title: 'Namma Ooru Events Management',
    image: nammaOoruImg,
    link: 'https://www.nammaoorueventsmangement.in/',
  },
  {
    id: 'arc-pair-studio',
    title: 'ARC Pair Studio',
    image: arcPairImg,
    link: 'https://arcpairstudio.com/',
  },
  {
    id: 'dream-lenz',
    title: 'Dream Lenz Photography',
    image: dreamLenzImg,
  },
  {
    id: 'detailing-unlimited',
    title: 'Detailing Unlimited',
    image: detailingImg,
    link: 'https://detailingunlimited.in/',
  },
  {
    id: 'royal-catering',
    title: 'Royal Kitchen & Catering Services',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'vk-tech-solutions',
    title: 'VK Tech & Digital Solutions',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pudukkottai-grand',
    title: 'Pudukkottai Grand Events',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'apex-fitness',
    title: 'Apex Fitness & Wellness Center',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'urban-craft',
    title: 'Urban Craft Architecture & Interiors',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
  },
];

export const ClientProjects = () => {
  return (
    <section id="client-projects" className="py-20 sm:py-28 bg-[#FAF7F2] text-[#2C2C2C] relative overflow-hidden select-none">
      
      {/* Soft background accent */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#9E2A2B]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center md:text-left"
        >
          <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wider text-[#9E2A2B] uppercase">
            CLIENT PROJECTS
          </h2>
        </motion.div>

        {/* Clean Client Projects Showcase */}
        {clientProjectsData.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {clientProjectsData.map((project, index) => {
              const projectContent = (
                <div className="group cursor-pointer">
                  {/* Website Screenshot Image */}
                  {project.image && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl shadow-sm border border-gray-200/80 group-hover:shadow-xl group-hover:border-[#9E2A2B]/40 transition-all duration-300">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  {/* Simple Website Name & Link Indicator */}
                  <div className="mt-4 flex items-center justify-between px-1">
                    <h3 className="text-lg sm:text-xl font-bold text-[#2C2C2C] group-hover:text-[#9E2A2B] transition-colors font-sans">
                      {project.title}
                    </h3>
                    <div className="p-1.5 rounded-full text-[#9E2A2B] group-hover:bg-[#9E2A2B] group-hover:text-white transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                >
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {projectContent}
                    </a>
                  ) : (
                    projectContent
                  )}
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-12 rounded-3xl bg-white border border-dashed border-[#9E2A2B]/30 text-center space-y-3">
            <Globe className="w-8 h-8 text-[#9E2A2B] animate-pulse" />
            <h3 className="text-xl font-bold text-[#2C2C2C] font-sans">
              Client Projects
            </h3>
          </div>
        )}

      </div>
    </section>
  );
};
