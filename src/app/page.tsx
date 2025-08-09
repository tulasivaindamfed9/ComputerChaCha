import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Logos from './components/Logos';
import About from './components/About';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen font-sans">
      <Navbar />
      <Hero />
      <Logos />
      <About />
    </main>
  );
}
