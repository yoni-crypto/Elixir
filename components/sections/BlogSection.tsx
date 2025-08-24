'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, User, ArrowRight, Clock, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Dairy Technology',
    excerpt: 'Exploring how blockchain and IoT are revolutionizing the dairy supply chain, ensuring transparency from farm to table.',
    content: `The dairy industry is undergoing a remarkable transformation, driven by cutting-edge technology that's reshaping how we produce, track, and deliver milk products. Blockchain technology, once associated primarily with cryptocurrency, is now playing a crucial role in ensuring complete transparency from farm to table.

Our innovative tracking system allows consumers to scan a QR code on any Elixir Dairy product and trace its entire journey. From the moment milk is collected from our partner farms, through processing, packaging, and delivery, every step is recorded on an immutable blockchain ledger.

This technology not only builds trust with consumers but also helps us maintain the highest quality standards. If any issues arise, we can quickly identify the source and take immediate corrective action. The result is a supply chain that's both transparent and efficient, ensuring that every drop of milk meets our exacting standards.

But blockchain is just the beginning. We're also implementing IoT sensors throughout our facilities to monitor temperature, humidity, and other critical factors in real-time. These sensors automatically adjust conditions to maintain optimal quality, reducing waste and ensuring consistency.

The future of dairy is here, and it's more transparent, efficient, and sustainable than ever before.`,
    image: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '5 min read',
    category: 'Technology',
  },
  {
    id: 2,
    title: 'Sustainable Farming Practices',
    excerpt: 'How our partner farms are implementing regenerative agriculture to heal the soil and combat climate change.',
    content: `Sustainability isn't just a buzzword for us—it's the foundation of everything we do. Our partner farms are leading the way in regenerative agriculture, a holistic approach that goes beyond simply reducing harm to actively healing the environment.

Regenerative agriculture focuses on building healthy soil, which is the foundation of sustainable food production. Our farmers use techniques like cover cropping, crop rotation, and reduced tillage to improve soil health and increase carbon sequestration. These practices not only benefit the environment but also result in healthier, more nutritious milk.

We're also implementing water conservation strategies that reduce usage by up to 50% while maintaining optimal pasture conditions. Advanced irrigation systems, rainwater harvesting, and precision agriculture techniques ensure that every drop of water is used efficiently.

Our commitment to sustainability extends beyond the farm. We're working towards carbon-neutral operations by investing in renewable energy, optimizing transportation routes, and implementing waste reduction programs throughout our supply chain.

The results speak for themselves: healthier soil, cleaner water, reduced carbon emissions, and milk that's not just good for you, but good for the planet.`,
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Mike Thompson',
    date: '2024-01-10',
    readTime: '7 min read',
    category: 'Sustainability',
  },
  {
    id: 3,
    title: 'Plant-Based Innovation',
    excerpt: 'The science behind creating plant-based alternatives that match the taste and nutrition of traditional dairy.',
    content: `The demand for plant-based alternatives is growing rapidly, and we're at the forefront of innovation in this space. But creating plant-based products that truly match the taste, texture, and nutritional profile of traditional dairy is no simple task.

Our research team, led by food scientists and nutritionists, has spent years developing plant-based alternatives that don't compromise on taste or nutrition. We start with carefully selected ingredients—organic almonds, oats, and other plant sources—and use advanced processing techniques to create products that satisfy even the most discerning palates.

The key to our success lies in understanding the molecular structure of dairy proteins and finding plant-based equivalents that can replicate their behavior. Through extensive research and testing, we've developed proprietary processes that create the creamy texture and rich flavor that consumers expect from dairy products.

But innovation isn't just about taste—it's also about nutrition. Our plant-based products are fortified with essential vitamins and minerals, including calcium, vitamin D, and B12, ensuring they provide the same nutritional benefits as traditional dairy.

The result is a range of plant-based products that don't just mimic dairy—they enhance it, offering new possibilities for consumers with dietary restrictions or those simply looking to reduce their environmental impact.`,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Emily Rodriguez',
    date: '2024-01-08',
    readTime: '4 min read',
    category: 'Innovation',
  },
  {
    id: 4,
    title: 'Nutrition Science Deep Dive',
    excerpt: 'Understanding the complete nutritional profile of milk and why it remains a cornerstone of healthy diets.',
    content: `Milk has been a dietary staple for thousands of years, and modern science continues to reveal why it's such an important part of a healthy diet. The nutritional profile of milk is remarkably complex, containing a perfect balance of proteins, fats, carbohydrates, vitamins, and minerals.

The proteins in milk—casein and whey—are considered "complete" proteins, meaning they contain all nine essential amino acids that our bodies cannot produce on their own. These proteins are particularly important for muscle growth, repair, and overall health.

Milk is also an excellent source of calcium, which is essential for strong bones and teeth. But the benefits don't stop there—milk also contains vitamin D, which helps the body absorb calcium, and phosphorus, which works with calcium to build strong bones.

The fat content in milk provides essential fatty acids and helps the body absorb fat-soluble vitamins like A, D, E, and K. Recent research has also shown that the specific types of fats in milk may have unique health benefits, including anti-inflammatory properties.

We're committed to preserving these nutritional benefits through our careful processing methods. Our milk is minimally processed to maintain its natural nutritional profile while ensuring safety and quality.`,
    image: 'https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Dr. James Liu',
    date: '2024-01-05',
    readTime: '6 min read',
    category: 'Health',
  },
  {
    id: 5,
    title: 'Community Impact Stories',
    excerpt: 'Meet the farming families who partner with us and learn how sustainable dairy farming transforms communities.',
    content: `Behind every bottle of Elixir Dairy milk is a story of community, tradition, and innovation. Our partner farms are family-owned operations that have been passed down through generations, each with their own unique story and connection to the land.

Take the Martinez family, for example. They've been farming in the same valley for over 50 years, and their commitment to sustainable practices has not only improved their land but also created opportunities for the entire community. By implementing regenerative agriculture techniques, they've increased their soil health, reduced water usage, and created jobs for local residents.

The Thompson family's farm is another success story. When they joined our partner network, they were struggling with declining soil quality and rising costs. Through our support and their hard work, they've transformed their operation into a model of sustainable agriculture, serving as an example for other farmers in the region.

These partnerships go beyond business—they're about building stronger communities. We provide our partner farms with technical support, access to markets, and fair pricing that allows them to invest in their operations and their communities.

The result is a network of thriving farms that produce exceptional milk while supporting local economies and preserving rural traditions. Every purchase of Elixir Dairy products directly supports these families and their communities.`,
    image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    author: 'Anna Martinez',
    date: '2024-01-03',
    readTime: '8 min read',
    category: 'Community',
  },
];

export function BlogSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

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

      gsap.fromTo(featuredRef.current,
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power2.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(controlsRef.current,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          ease: "power2.out",
          delay: 0.4,
          scrollTrigger: {
            trigger: controlsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      gsap.fromTo(secondaryRef.current,
        { y: 40, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1, 
          ease: "power2.out",
          delay: 0.6,
          scrollTrigger: {
            trigger: secondaryRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (modalRef.current) {
      if (isModalOpen) {
        gsap.fromTo(modalRef.current,
          { opacity: 0, scale: 0.9 },
          { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }
        );
      } else {
        gsap.to(modalRef.current,
          { opacity: 0, scale: 0.9, duration: 0.2, ease: "power2.in" }
        );
      }
    }
  }, [isModalOpen]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % blogPosts.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleReadMore = (post: typeof blogPosts[0]) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedPost(null), 200);
  };

  const visiblePosts = [
    blogPosts[currentIndex],
    blogPosts[(currentIndex + 1) % blogPosts.length],
    blogPosts[(currentIndex + 2) % blogPosts.length],
  ];

  return (
    <>
      <section ref={sectionRef} id="blog" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 mb-6 tracking-tight">
              Insights &
              <br />
              <span className="font-medium text-blue-600">Innovation</span>
            </h2>
            
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest developments in dairy science, sustainability practices, 
              and innovations shaping the future of our industry.
            </p>
          </div>

          <div ref={featuredRef} className="mb-16">
            <div className="relative overflow-hidden rounded-2xl bg-slate-900 text-white">
              <div className="absolute inset-0">
                <div
                  key={currentIndex}
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${visiblePosts[0].image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/60 to-transparent" />
              </div>
              
              <div className="relative z-10 p-8 lg:p-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-[400px]">
                <div key={`content-${currentIndex}`}>
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">
                      {visiblePosts[0].category}
                    </span>
                    <div className="flex items-center space-x-2 text-slate-300 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{visiblePosts[0].readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-4xl font-semibold mb-4">
                    {visiblePosts[0].title}
                  </h3>
                  
                  <p className="text-slate-200 text-lg mb-6 leading-relaxed">
                    {visiblePosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="w-4 h-4 text-blue-400" />
                      <span className="text-slate-300">{visiblePosts[0].author}</span>
                      <Calendar className="w-4 h-4 text-blue-400 ml-4" />
                      <span className="text-slate-300">{visiblePosts[0].date}</span>
                    </div>
                    
                    <button 
                      onClick={() => handleReadMore(visiblePosts[0])}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 font-medium transition-colors duration-300"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div 
            ref={controlsRef}
            className="flex items-center justify-center space-x-6 mb-12"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <button
              onClick={() => setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)}
              className="p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors duration-300"
            >
              <ArrowRight className="w-5 h-5 rotate-180 text-slate-700" />
            </button>
            
            <div className="flex space-x-3">
              {blogPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-500 w-8' 
                      : 'bg-slate-300 hover:bg-slate-400 w-3'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={() => setCurrentIndex((prev) => (prev + 1) % blogPosts.length)}
              className="p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors duration-300"
            >
              <ArrowRight className="w-5 h-5 text-slate-700" />
            </button>
          </div>

          <div ref={secondaryRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {visiblePosts.slice(1, 3).map((post, index) => (
              <article
                key={`secondary-${post.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-200"
              >
                <div className="relative overflow-hidden h-48">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${post.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/95 backdrop-blur-sm text-slate-800 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-3 text-sm text-slate-600">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <button 
                    onClick={() => handleReadMore(post)}
                    className="flex items-center space-x-2 text-blue-600 hover:text-blue-500 font-medium transition-colors duration-300"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && selectedPost && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div 
            ref={modalRef}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
          >
            <div className="relative p-8 border-b border-slate-200">
              <button
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors duration-300"
              >
                <X className="w-5 h-5 text-slate-600" />
              </button>
              
              <div className="flex items-center space-x-4 mb-4">
                <span className="px-3 py-1 bg-blue-500/10 text-blue-600 rounded-full text-sm font-medium">
                  {selectedPost.category}
                </span>
                <div className="flex items-center space-x-2 text-slate-500 text-sm">
                  <Clock className="w-4 h-4" />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-4">
                {selectedPost.title}
              </h2>
              
              <div className="flex items-center space-x-4 text-slate-600">
                <div className="flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedPost.date}</span>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-slate-600 leading-relaxed mb-6">
                  {selectedPost.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}