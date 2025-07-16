import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import './index.css';

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const features = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/PUBG_logo.svg/512px-PUBG_logo.svg.png",
      game: "PUBG",
      feature: "Bullet Track",
      description: "See enemy bullet direction in real-time."
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/PUBG_logo.svg/512px-PUBG_logo.svg.png",
      game: "PUBG",
      feature: "ESP",
      description: "Highlight enemies through walls."
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/PUBG_logo.svg/512px-PUBG_logo.svg.png",
      game: "PUBG",
      feature: "Aimbot",
      description: "Auto-lock targets with precision."
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden font-orbitron">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#000000" } },
          particles: {
            number: { value: 50 },
            color: { value: "#00fff0" },
            links: {
              enable: true,
              distance: 130,
              color: "#00fff0",
              opacity: 0.5,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            size: { value: 3 },
          },
        }}
      />
      <header className="fixed top-0 w-full z-50 px-6 py-4 bg-black/70 backdrop-blur-md shadow-lg flex justify-between items-center">
        <h1 className="text-cyan-400 text-2xl font-bold tracking-wide">MOD APK</h1>
        <nav className="space-x-6 text-white text-base">
          {["home", "download", "about", "feedback"].map((section, i) => (
            <a key={i} href={`#${section}`} className="hover:text-cyan-300 hover:underline transition-all duration-300">
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" className="pt-40 text-center px-6">
        <h2 className="text-5xl text-cyan-400 font-bold mb-4">GET YOUR ADVANTAGE TODAY</h2>
        <p className="text-lg text-white mb-8">REGARDING GAME PUBG</p>
        <button className="bg-cyan-400 text-black px-6 py-3 rounded-full font-bold hover:bg-cyan-500 transition-all duration-300">Download Now</button>
      </section>

      <section id="download" className="mt-32 px-6 text-center">
        <h3 className="text-4xl text-cyan-300 mb-10">FEATURES</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div key={idx} className="bg-gray-800 rounded-xl p-6 text-white shadow-lg hover:scale-105 transition-transform duration-300">
              <img src={item.icon} alt="Game Icon" className="w-12 h-12 mx-auto mb-2" />
              <p className="text-sm text-cyan-300 mb-1">{item.game}</p>
              <h4 className="text-xl font-semibold">{item.feature}</h4>
              <p className="text-sm mt-2 text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="feedback" className="mt-32 px-6 text-center">
        <h3 className="text-3xl text-cyan-300 mb-10">USER FEEDBACK</h3>
        <div className="flex overflow-x-auto gap-4 px-4">
          {Array(3).fill(0).map((_, i) => (
            <div key={i} className="min-w-[300px] bg-gray-700 p-4 rounded-lg">
              <img src={`https://via.placeholder.com/300x200?text=Screenshot+${i+1}`} alt="Feedback" className="rounded" />
            </div>
          ))}
        </div>
      </section>

      <footer className="mt-32 text-center p-6 bg-black/90 border-t border-cyan-700">
        <p className="text-cyan-400">📩 Contact us on Telegram: @your_telegram_handle</p>
        <p className="text-gray-500 mt-2 text-sm">© 2025 Mod APK. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;