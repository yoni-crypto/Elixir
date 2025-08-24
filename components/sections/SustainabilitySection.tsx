'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Droplets, Globe, Award, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const sustainabilityData = [
  {
    id: 1,
    title: 'Carbon Neutral Operations',
    description: 'Our facilities run entirely on renewable energy, achieving carbon neutrality across all operations.',
    icon: Zap,
    position: { x: 20, y: 30 },
    color: 'from-green-400 to-green-600'
  },
  {
    id: 2,
    title: 'Water Conservation',
    description: 'Advanced irrigation systems reduce water usage by 50% while maintaining optimal pasture conditions.',
    icon: Droplets,
    position: { x: 70, y: 60 },
    color: 'from-blue-400 to-blue-600'
  },
  {
    id: 3,
    title: 'Regenerative Agriculture',
    description: 'Partner farms implement soil health practices that sequester carbon and improve biodiversity.',
    icon: Leaf,
    position: { x: 40, y: 80 },
    color: 'from-emerald-400 to-emerald-600'
  },
  {
    id: 4,
    title: 'Zero Waste Packaging',
    description: '100% recyclable and biodegradable packaging materials throughout our supply chain.',
    icon: Globe,
    position: { x: 80, y: 20 },
    color: 'from-cyan-400 to-cyan-600'
  },
  {
    id: 5,
    title: 'Fair Trade Practices',
    description: 'Supporting local farming communities with fair pricing and sustainable development programs.',
    icon: Award,
    position: { x: 60, y: 40 },
    color: 'from-amber-400 to-amber-600'
  }
];

export function SustainabilitySection() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null);
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);
  
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headerRef.current,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(globeRef.current,
        { scale: 0.8, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: globeRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(contentRef.current,
        { x: 50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(statsRef.current,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out",
          delay: 0.6,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.to(globeRef.current, {
        rotation: 360,
        duration: 60,
        ease: "none",
        repeat: -1
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleHotspotClick = (id: number) => {
    setActiveHotspot(activeHotspot === id ? null : id);
  };

  const handleHotspotHover = (id: number | null) => {
    setHoveredHotspot(id);
  };

  return (
    <section ref={sectionRef} id="sustainability" className="py-24 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Sustainable
            <br />
            <span className="font-medium text-blue-600">Future</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We're committed to environmental stewardship, implementing innovative practices 
            that protect our planet while delivering exceptional products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={globeRef} className="relative">
            <div className="relative w-full max-w-md mx-auto">
              <div className="relative w-80 h-80 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-50 to-slate-100 rounded-full shadow-2xl border-4 border-white">
                  <div className="absolute inset-4 bg-gradient-to-br from-blue-200/30 via-blue-100/20 to-slate-200/30 rounded-full">
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 300">
                      <defs>
                        <radialGradient id="globeGradient" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#e0f2fe" stopOpacity="0.3" />
                          <stop offset="70%" stopColor="#f0f9ff" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                        </radialGradient>
                      </defs>
                      <circle cx="150" cy="150" r="140" fill="url(#globeGradient)" />
                    </svg>
                  </div>
                  
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-200/40 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-blue-300/30 rounded-full animate-pulse delay-150"></div>
                    <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-slate-200/50 rounded-full animate-pulse delay-300"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-blue-100/60 rounded-full animate-pulse delay-500"></div>
                  </div>
                </div>

                {sustainabilityData.map((item) => (
                  <div
                    key={item.id}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                      activeHotspot === item.id ? 'z-20' : 'z-10'
                    }`}
                    style={{
                      left: `${item.position.x}%`,
                      top: `${item.position.y}%`
                    }}
                    onClick={() => handleHotspotClick(item.id)}
                    onMouseEnter={() => handleHotspotHover(item.id)}
                    onMouseLeave={() => handleHotspotHover(null)}
                  >
                    <div className={`relative w-6 h-6 bg-gradient-to-r ${item.color} rounded-full shadow-lg transition-all duration-300 ${
                      activeHotspot === item.id ? 'scale-125' : hoveredHotspot === item.id ? 'scale-110' : 'scale-100'
                    }`}>
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping"></div>
                      <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                        <item.icon className="w-3 h-3 text-slate-700" />
                      </div>
                    </div>

                    {activeHotspot === item.id && (
                      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 bg-white rounded-xl shadow-xl p-4 w-64 z-30 border border-slate-200">
                        <div className="flex items-start space-x-3">
                          <div className={`w-8 h-8 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <item.icon className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                          </div>
                        </div>
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-slate-200"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-300/60 rounded-full animate-ping"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-slate-300/50 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-0 w-2 h-2 bg-blue-200/70 rounded-full animate-ping delay-300"></div>
              </div>
            </div>
          </div>

          <div ref={contentRef}>
            <h3 className="text-3xl font-semibold text-slate-900 mb-6">
              Click on the globe to explore our sustainability initiatives
            </h3>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our commitment to sustainability goes beyond reducing our environmental impact. 
              We're actively working to regenerate ecosystems, support local communities, 
              and create a positive legacy for future generations.
            </p>

            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-slate-600">Carbon Neutral</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                <div className="text-sm text-slate-600">Less Water Usage</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">0</div>
                <div className="text-sm text-slate-600">Waste to Landfill</div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-slate-600">Recyclable Packaging</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}