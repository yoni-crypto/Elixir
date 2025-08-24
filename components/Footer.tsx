'use client';

import { motion } from 'framer-motion';
import { Droplet, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
];

const footerLinks = [
  {
    title: 'Company',
    links: ['About Us', 'Our Story', 'Careers', 'Press']
  },
  {
    title: 'Products',
    links: ['Whole Milk', 'Organic Range', 'Plant-Based', 'Premium Cream']
  },
  {
    title: 'Support',
    links: ['Contact Us', 'FAQ', 'Shipping', 'Returns']
  }
];

export function Footer() {
  return (
    <footer className="relative bg-navy-900 text-cream-50 overflow-hidden">
      {/* Enhanced Animated Wave Border */}
      <div className="absolute top-0 left-0 w-full h-6 overflow-hidden">
        {/* Primary Wave */}
        <motion.div
          className="absolute top-0 left-0 w-[200%] h-full"
          style={{
            background: 'linear-gradient(90deg, #A8DADC 0%, #72C4CA 25%, #5BB9C1 50%, #A8DADC 75%, #72C4CA 100%)',
            clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)'
          }}
          animate={{
            x: ['-50%', '0%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        
        {/* Secondary Wave */}
        <motion.div
          className="absolute top-0 left-0 w-[200%] h-full"
          style={{
            background: 'linear-gradient(90deg, rgba(255,253,248,0.6) 0%, rgba(168,218,220,0.4) 25%, rgba(114,196,202,0.6) 50%, rgba(255,253,248,0.4) 75%, rgba(168,218,220,0.6) 100%)',
            clipPath: 'polygon(0 0, 100% 0, 90% 100%, 10% 100%)'
          }}
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'linear',
            delay: 2,
          }}
        />
        
        {/* Milk Drops */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/60 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: '50%',
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <motion.div
                animate={{ 
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
              >
                <Droplet className="w-8 h-8 text-sage-400" />
              </motion.div>
              <span className="font-playfair text-3xl font-bold">Elixir</span>
            </div>
            
            <p className="font-inter text-cream-200 mb-6 leading-relaxed">
              Redefining freshness with premium dairy products sourced from pristine farms 
              and delivered with innovation.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-cream-300">
                <MapPin className="w-4 h-4 text-sage-400" />
                <span className="text-sm">123 Dairy Lane, Fresh Valley, CA 90210</span>
              </div>
              <div className="flex items-center space-x-3 text-cream-300">
                <Phone className="w-4 h-4 text-sage-400" />
                <span className="text-sm">+1 (555) ELIXIR-1</span>
              </div>
              <div className="flex items-center space-x-3 text-cream-300">
                <Mail className="w-4 h-4 text-sage-400" />
                <span className="text-sm">hello@elixirdairy.com</span>
              </div>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-playfair text-lg font-semibold mb-4 text-cream-50">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      className="font-inter text-cream-300 hover:text-sage-400 transition-colors duration-200 text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links & Copyright */}
        <div className="mt-12 pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="flex items-center space-x-4 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {socialLinks.map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                className="relative p-2 rounded-full bg-navy-800 hover:bg-sage-600 transition-colors duration-200 overflow-hidden group"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                aria-label={label}
              >
                {/* Milk Splash Effect on Hover */}
                <motion.div
                  className="absolute inset-0 bg-sage-400/30 rounded-full scale-0"
                  whileHover={{
                    scale: [0, 1.5, 0],
                    opacity: [0, 0.6, 0],
                  }}
                  transition={{ duration: 0.6 }}
                />
                
                <Icon className="w-4 h-4 relative z-10 group-hover:text-white transition-colors duration-300" />
                
                {/* Ripple Effect */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-sage-400/50"
                  whileHover={{
                    scale: [1, 1.5, 1],
                    opacity: [0, 0.5, 0],
                  }}
                  transition={{ duration: 0.8 }}
                />
              </motion.a>
            ))}
          </motion.div>

          <motion.p 
            className="font-inter text-cream-400 text-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            © 2024 Elixir Dairy. All rights reserved. Made with 🥛 and innovation.
          </motion.p>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-sage-400 to-transparent" />
      </div>
    </footer>
  );
}