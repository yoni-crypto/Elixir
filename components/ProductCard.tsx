'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ShoppingCart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  features: string[];
  rating: number;
  icon: React.ComponentType<any>;
}

interface ProductCardProps {
  product: Product;
  cartQuantity: number;
  onAddToCart: () => void;
  index: number;
  isInView: boolean;
}

export function ProductCard({ product, cartQuantity, onAddToCart, index, isInView }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const Icon = product.icon;

  useEffect(() => {
    if (isInView && cardRef.current) {
      gsap.fromTo(cardRef.current,
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power3.out",
          delay: index * 0.1 
        }
      );
    }
  }, [isInView, index]);

  useEffect(() => {
    if (cardRef.current) {
      if (isHovered) {
        gsap.to(cardRef.current, {
          y: -8,
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(imageRef.current, {
          scale: 1.05,
          duration: 0.4,
          ease: "power2.out"
        });
      } else {
        gsap.to(cardRef.current, {
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
        
        gsap.to(imageRef.current, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out"
        });
      }
    }
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <div 
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute top-4 left-4">
          <div className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-slate-700">
            {product.category}
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <div className="flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-semibold text-slate-700">{product.rating}</span>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
          <Icon className="w-5 h-5 text-slate-600" />
        </div>
      </div>

      <div ref={contentRef} className="p-6">
        <h3 className="text-xl font-semibold text-slate-900 mb-2">
          {product.name}
        </h3>
        
        <p className="text-slate-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {product.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {product.features.slice(0, 2).map((feature) => (
            <span
              key={feature}
              className="px-2 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium"
            >
              {feature}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-slate-900">
            ${product.price}
          </div>
          
          <button
            onClick={onAddToCart}
            className="group relative flex items-center space-x-2 bg-slate-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-slate-800 transition-colors duration-300"
          >
            <ShoppingCart className="w-4 h-4" />
            <span className="text-sm">Add</span>
            
            {cartQuantity > 0 && (
              <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                {cartQuantity}
              </div>
            )}
          </button>
        </div>
      </div>

      <div className="absolute inset-0 rounded-2xl border border-slate-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
}