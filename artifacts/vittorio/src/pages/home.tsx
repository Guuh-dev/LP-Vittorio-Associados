import React, { useState } from 'react';
import { LoadingScreen } from '@/components/LoadingScreen';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/sections/Hero';
import { PracticeAreas } from '@/components/sections/PracticeAreas';
import { Results } from '@/components/sections/Results';
import { Philosophy } from '@/components/sections/Philosophy';
import { Team } from '@/components/sections/Team';
import { Testimonials } from '@/components/sections/Testimonials';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {/* 
        We render the rest of the app always, but it will be hidden underneath the fixed loading screen.
        Once loading finishes, the loading screen animates out revealing the content.
        The Hero section also waits for the `isLoaded` flag internally via timeouts matching the loading screen.
      */}
      <div className="relative min-h-screen bg-background text-foreground">
        {/* Global texture overlay */}
        <div className="bg-noise" />
        
        <Navbar />
        <main>
          <Hero />
          <PracticeAreas />
          <Results />
          <Philosophy />
          <Team />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
