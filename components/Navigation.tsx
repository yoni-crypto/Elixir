'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Menu, X, Droplet } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#sustainability', label: 'Sustainability' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 w-full',
          isScrolled 
            ? 'backdrop-blur-md bg-white/90 border-b border-slate-200/50 shadow-lg' 
            : 'bg-transparent'
        )}
      >
        <div className="w-full max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            <div 
              ref={logoRef}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('#home')}
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Droplet className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-white" />
              </div>
              <span className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-light text-slate-900 tracking-wide">
                Elixir
              </span>
            </div>

            <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="relative font-medium text-slate-700 hover:text-slate-900 transition-colors duration-300 py-2 text-sm xl:text-base"
                >
                  {item.label}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 hover:w-full" />
                </button>
              ))}
            </div>

            <button
              className="lg:hidden p-1.5 sm:p-2 rounded-lg hover:bg-slate-100 transition-colors"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-slate-700" />
              )}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden overflow-hidden backdrop-blur-md bg-white/95 border-b border-slate-200/50">
            <div className="px-3 py-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-2 px-3 font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors duration-200 text-sm"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}