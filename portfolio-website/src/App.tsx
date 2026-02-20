import ScrollProgress  from './components/layout/ScrollProgress';
import Navbar          from './components/layout/Navbar';
import Footer          from './components/layout/Footer';
import Hero            from './components/sections/Hero';
import About           from './components/sections/About';
import TechStack       from './components/sections/TechStack';
import Projects        from './components/sections/Projects';
import Services        from './components/sections/Services';
import Contact         from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07070e] text-slate-100 font-sans overflow-x-hidden">
      {/* Scroll progress bar */}
      <ScrollProgress />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Services />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
