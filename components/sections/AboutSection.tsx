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
          duration: 1, 
          ease: "power2.out",
          delay: 0.6,
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
    <section ref={sectionRef} id="about" className="py-16 lg:py-24 bg-white overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div ref={titleRef} className="mb-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-slate-900 mb-4 lg:mb-6 tracking-tight">
                Crafting
                <br />
                <span className="font-medium text-blue-600">Excellence</span>
              </h2>
              
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                For over three decades, we've been at the forefront of dairy innovation, 
                combining traditional farming wisdom with cutting-edge technology to deliver 
                products that exceed expectations.
              </p>
            </div>

            <div ref={contentRef} className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                    Sustainable Farming
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Our partner farms implement regenerative agriculture practices that 
                    not only produce exceptional milk but also heal the environment.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                    Premium Quality
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Every product undergoes rigorous quality testing to ensure it meets 
                    our exacting standards for taste, nutrition, and safety.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-2">
                    Fresh Delivery
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    Our cold chain logistics ensure that every product reaches your 
                    doorstep at peak freshness, maintaining optimal quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div ref={imageRef} className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="w-full h-64 sm:h-80 lg:h-96 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80)'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 sm:p-6 border border-slate-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                  30+
                </div>
                <div className="text-sm sm:text-base text-slate-600">
                  Years of Excellence
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={statsRef} className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                  </div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">
                    <AnimatedCounter 
                      target={stat.number} 
                      suffix={stat.suffix} 
                      isInView={true} 
                    />
                  </div>
                  <div className="text-sm sm:text-base text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}