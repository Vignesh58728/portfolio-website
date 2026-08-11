import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ClientProjects } from './components/ClientProjects';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { StarsBackground } from './components/ui/stars-background';
import { ShootingStars } from './components/ui/shooting-stars';
import { TechStack } from './components/TechStack';

function App() {
  return (
    <div className="min-h-screen bg-black w-full flex flex-col relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <StarsBackground />
        <ShootingStars />
      </div>

      <div className="relative z-10 w-full">
        <Header />
        <main>
          <Hero />
          <TechStack />
          <About />
          <ClientProjects />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
