'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Award, Truck, Shield } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: 100, suffix: '%', label: 'Organic', icon: Leaf },
  { number: 50, suffix: '+', label: 'Partner Farms', icon: Award },
  { number: 24, suffix: 'h', label: 'Fresh Delivery', icon: Truck },
  { number: 99, suffix: '%', label: 'Quality Assured', icon: Shield },
];

function AnimatedCounter({ 
  target, 
  suffix = '', 
  isInView 
}: { 
  target: number; 
  suffix?: string; 
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    
    const increment = target / 100;
    const timer = setInterval(() => {
      setCount((prev) => {
        const nextValue = prev + increment;
        if (nextValue >= target) {
          clearInterval(timer);
          return target;
        }
        return nextValue;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span>
      {Math.floor(count)}{suffix}
    </span>
  );
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-triggered animations
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(contentRef.current,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(statsRef.current,
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(imageRef.current,
        { x: 50, opacity: 0 },
        { 
          x: 0, 
          opacity: 1, 
          duration: 1.2, 
          ease: "power3.out",
          delay: 0.3,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <div>
            <h2 
              ref={titleRef}
              className="text-4xl lg:text-5xl font-light text-slate-900 mb-8 tracking-tight"
            >
              Crafting Excellence
              <br />
              <span className="font-medium text-blue-600">Since Day One</span>
            </h2>

            <div ref={contentRef} className="space-y-6 mb-12">
              <p className="text-lg text-slate-600 leading-relaxed">
                At Elixir Dairy, we believe that extraordinary milk begins with extraordinary care. 
                Our journey started with a simple vision: to bridge the gap between traditional 
                dairy farming and modern innovation.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                Every drop of our milk is traced through blockchain technology, ensuring complete 
                transparency from farm to table. Our sustainable practices and partnerships with 
                local farms create a supply chain that's both ethical and efficient.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                We're not just delivering milk—we're delivering a promise of purity, sustainability, 
                and innovation that defines the future of dairy.
              </p>
            </div>

            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="p-6 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors duration-300"
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div className="text-2xl lg:text-3xl font-bold text-slate-900 mb-1">
                      <AnimatedCounter
                        target={stat.number}
                        suffix={stat.suffix}
                        isInView={true}
                      />
                    </div>
                    <div className="text-sm text-slate-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="grid grid-cols-1 gap-6">
              <div className="relative overflow-hidden rounded-2xl">
                <div 
                  className="w-full h-80 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-sm text-slate-800 font-medium">
                    "Our cows graze on organic pastures, ensuring the highest quality milk."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-xl h-40">
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1436262513933-a0b06755c784?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                
                <div className="relative overflow-hidden rounded-xl h-40">
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/10 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-slate-500/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}