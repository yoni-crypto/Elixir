'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Play } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.8"
      )
      .fromTo(ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      );

      gsap.to(backgroundRef.current, {
        y: -100,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div ref={backgroundRef} className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-80" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-tl from-slate-200 to-slate-300 rounded-full opacity-70" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/60 via-blue-50/40 to-slate-200/60 rounded-full opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full opacity-50" />
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-gradient-to-tl from-slate-100 to-slate-200 rounded-full opacity-60" />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full mb-8">
          <div className="w-2 h-2 bg-blue-500 rounded-full" />
          <span className="text-sm font-medium text-slate-600 tracking-wide">PREMIUM DAIRY</span>
        </div>

        <h1 
          ref={titleRef}
          className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-light text-slate-900 mb-6 tracking-tight"
        >
          Pure{' '}
          <span className="font-medium text-blue-600 relative">
            Elixir
            <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
          </span>
        </h1>

        <p 
          ref={subtitleRef}
          className="text-xl sm:text-2xl lg:text-3xl font-light text-slate-600 mb-4 tracking-wide"
        >
          Redefining Freshness
        </p>

        <p 
          ref={subtitleRef}
          className="text-lg sm:text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
        >
          Sourced from pristine farms, delivered with innovation. 
          Experience the future of premium dairy.
        </p>

        <div 
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-8 py-4 bg-slate-900 text-white font-medium rounded-lg overflow-hidden transition-all duration-300 hover:bg-slate-800">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Discover Our Range</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button className="group flex items-center space-x-3 px-6 py-4 text-slate-700 font-medium hover:text-slate-900 transition-colors duration-300">
            <div className="w-12 h-12 bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-blue-50 transition-colors duration-300 border border-slate-200">
              <Play className="w-5 h-5 ml-1 text-slate-600" />
            </div>
            <span>Watch Our Story</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border border-slate-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>

      <div className="absolute top-1/4 right-10 w-32 h-px bg-gradient-to-l from-blue-400 to-transparent opacity-60" />
      <div className="absolute bottom-1/4 left-10 w-24 h-px bg-gradient-to-r from-slate-400 to-transparent opacity-40" />
    </section>
  );
}