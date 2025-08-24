'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone',
    value: '+1 (555) ELIXIR-1',
    link: 'tel:+15553549471',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@elixirdairy.com',
    link: 'mailto:hello@elixirdairy.com',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: '123 Dairy Lane, Fresh Valley, CA 90210',
    link: 'https://maps.google.com',
  },
];

function SuccessAnimation() {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Confetti-like milk splashes */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-sage-400 rounded-full"
          initial={{ 
            x: 0, 
            y: 0, 
            scale: 0,
            opacity: 1 
          }}
          animate={{ 
            x: (Math.random() - 0.5) * 200,
            y: (Math.random() - 0.5) * 200,
            scale: [0, 1, 0],
            opacity: [1, 0.8, 0],
          }}
          transition={{ 
            duration: 1.5,
            delay: i * 0.1,
            ease: 'easeOut'
          }}
        />
      ))}
      
      <motion.div
        className="bg-white rounded-full p-4 shadow-lg border-2 border-sage-500"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ 
          type: 'spring',
          damping: 15,
          stiffness: 300,
          delay: 0.5
        }}
      >
        <CheckCircle className="w-8 h-8 text-sage-500" />
      </motion.div>
    </motion.div>
  );
}

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    // Reset form after success animation
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <section id="contact" ref={ref} className="py-20 lg:py-32 bg-gradient-to-br from-navy-50 to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-navy-900 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Start a
            <br />
            <span className="text-sage-600">Conversation</span>
          </motion.h2>
          
          <motion.p
            className="font-inter text-lg text-navy-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have questions about our products, sustainability practices, or partnership opportunities? 
            We'd love to hear from you.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-playfair text-2xl font-semibold text-navy-900 mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.a
                      key={info.label}
                      href={info.link}
                      className="flex items-center space-x-4 p-4 glass-card rounded-xl hover:bg-white/30 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="w-12 h-12 bg-sage-500/20 rounded-full flex items-center justify-center group-hover:bg-sage-500/30 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-sage-600" />
                      </div>
                      <div>
                        <p className="font-inter text-sm text-navy-600 font-medium">
                          {info.label}
                        </p>
                        <p className="font-inter text-navy-800 font-semibold">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative h-64 bg-sage-100 rounded-2xl overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
                style={{
                  backgroundImage: 'url(https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80)',
                }}
              />
              <div className="absolute inset-0 bg-sage-200/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-sage-600 mx-auto mb-2" />
                  <p className="font-inter text-sage-800 font-medium">
                    Fresh Valley, California
                  </p>
                </div>
              </div>
              
              {/* Floating location pin */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="w-6 h-6 bg-sage-500 rounded-full shadow-lg" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  <label className="block font-inter text-sm font-medium text-navy-700 mb-2">
                    Name *
                  </label>
                  <div className="relative">
                    <input
                      {...register('name', { required: 'Name is required' })}
                      type="text"
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-cream-300 rounded-xl font-inter text-navy-800 placeholder-navy-500 focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 transition-all duration-300"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <label className="block font-inter text-sm font-medium text-navy-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <input
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      type="email"
                      className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-cream-300 rounded-xl font-inter text-navy-800 placeholder-navy-500 focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <label className="block font-inter text-sm font-medium text-navy-700 mb-2">
                  Subject *
                </label>
                <input
                  {...register('subject', { required: 'Subject is required' })}
                  type="text"
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-cream-300 rounded-xl font-inter text-navy-800 placeholder-navy-500 focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 transition-all duration-300"
                  placeholder="What's this about?"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.3 }}
              >
                <label className="block font-inter text-sm font-medium text-navy-700 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-cream-300 rounded-xl font-inter text-navy-800 placeholder-navy-500 focus:outline-none focus:border-sage-500 focus:ring-2 focus:ring-sage-500/20 transition-all duration-300 resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <motion.button
                  type="submit"
                  disabled={isLoading || isSubmitted}
                  className="w-full bg-navy-800 text-cream-50 py-4 px-8 rounded-xl font-inter font-semibold hover:bg-navy-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center space-x-3"
                  whileHover={!isLoading && !isSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isLoading && !isSubmitted ? { scale: 0.98 } : {}}
                >
                  {isLoading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-cream-300 border-t-transparent rounded-full animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Message Sent!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>

            {/* Success Animation Overlay */}
            {isSubmitted && <SuccessAnimation />}
          </motion.div>
        </div>
      </div>
    </section>
  );
}