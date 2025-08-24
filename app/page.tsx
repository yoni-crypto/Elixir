'use client';

import { HeroSection } from '@/components/sections/HeroSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { SustainabilitySection } from '@/components/sections/SustainabilitySection';
import { BlogSection } from '@/components/sections/BlogSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <SustainabilitySection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}