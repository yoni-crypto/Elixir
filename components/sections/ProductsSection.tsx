'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingCart, Droplets, Leaf, Heart, Award } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    name: 'Premium Whole Milk',
    description: 'Rich, creamy whole milk from grass-fed cows. Perfect for families who appreciate traditional taste.',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Dairy',
    features: ['100% Organic', 'Grass-Fed', 'No Hormones'],
    rating: 4.9,
    icon: Droplets,
  },
  {
    id: 2,
    name: 'Almond Blend',
    description: 'Smooth almond milk with a hint of vanilla. Lactose-free and perfect for coffee lovers.',
    price: 5.49,
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Plant-Based',
    features: ['Lactose-Free', 'Vegan', 'Vitamin Enriched'],
    rating: 4.7,
    icon: Leaf,
  },
  {
    id: 3,
    name: 'Lactose-Free Fresh',
    description: 'All the goodness of regular milk without the lactose. Gentle on digestion, full of flavor.',
    price: 5.99,
    image: 'https://images.unsplash.com/photo-1623065422902-4eb5d4e1c5a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Dairy',
    features: ['Lactose-Free', 'Easy Digest', 'Full Nutrition'],
    rating: 4.8,
    icon: Heart,
  },
  {
    id: 4,
    name: 'Premium Cream',
    description: 'Luxurious heavy cream for cooking and desserts. Rich, thick, and absolutely divine.',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1571212515416-cf76cb0e5b4d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Dairy',
    features: ['35% Fat', 'Premium Quality', 'Pasteurized'],
    rating: 5.0,
    icon: Award,
  },
  {
    id: 5,
    name: 'Organic Oat Milk',
    description: 'Creamy oat milk with natural sweetness. Sustainable choice for eco-conscious consumers.',
    price: 4.79,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Plant-Based',
    features: ['Organic Oats', 'Fiber Rich', 'Sustainable'],
    rating: 4.6,
    icon: Leaf,
  },
  {
    id: 6,
    name: 'Chocolate Milk',
    description: 'Indulgent chocolate milk made with real cocoa. A treat for kids and adults alike.',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1541544537156-7627a7a4aa1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
    category: 'Dairy',
    features: ['Real Cocoa', 'No Artificial Colors', 'Rich Taste'],
    rating: 4.5,
    icon: Droplets,
  },
];

const categories = ['All', 'Dairy', 'Plant-Based'];

export function ProductsSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState<Record<number, number>>({});
  
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);

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

      gsap.fromTo(filterRef.current,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: filterRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(productsRef.current,
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: productsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  const addToCart = (productId: number) => {
    setCart(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };

  return (
    <section ref={sectionRef} id="products" className="py-24 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
            Our Premium
            <br />
            <span className="font-medium text-blue-600">Collection</span>
          </h2>
          
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            From traditional whole milk to innovative plant-based alternatives, 
            each product is crafted with care and delivered fresh to your door.
          </p>
        </div>

        <div ref={filterRef} className="flex justify-center mb-16">
          <div className="flex space-x-1 bg-white p-1 rounded-xl shadow-sm border border-slate-200">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div ref={productsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              cartQuantity={cart[product.id] || 0}
              onAddToCart={() => addToCart(product.id)}
              index={index}
              isInView={true}
            />
          ))}
        </div>

        {Object.keys(cart).length > 0 && (
          <div className="fixed bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-200 z-40">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-slate-800">
                  {Object.values(cart).reduce((a, b) => a + b, 0)} items
                </p>
                <p className="text-sm text-slate-600">
                  ${Object.entries(cart)
                    .reduce((total, [id, quantity]) => {
                      const product = products.find(p => p.id === parseInt(id));
                      return total + (product?.price || 0) * quantity;
                    }, 0)
                    .toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}