'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Code, Users, Zap, Target } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  const features = [
    {
      icon: Code,
      title: 'Modern Tech Stack',
      description: 'React, Next.js, TypeScript, and cutting-edge technologies'
    },
    {
      icon: Users,
      title: 'Mentorship Program',
      description: 'Empowering the next generation of developers'
    },
    {
      icon: Zap,
      title: 'Fast Delivery',
      description: 'Quick turnaround with quality assurance'
    },
    {
      icon: Target,
      title: 'User-Focused',
      description: 'Designs that prioritize user experience'
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 lg:pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxa-1/5 via-luxa-2/5 to-luxa-5/10"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-luxa-1/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-luxa-2/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 3, 0]
          }}
          transition={{ 
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-40 left-20 w-24 h-24 bg-luxa-3/20 rounded-full blur-xl"
        />
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-gray-900">Building Digital</span>
              <br className="hidden sm:block" />
              <span className="text-gradient">Products &</span>
              <br className="hidden sm:block" />
              <span className="text-gray-900">Empowering</span>
              <br className="hidden sm:block" />
              <span className="text-gradient">Developers</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              LUXA Digital Solutions is a fast-growing tech agency focused on helping businesses build user-focused digital products while{' '}
              <span className="text-luxa-2 font-semibold">mentoring the next generation of developers</span>.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Link 
              href="/contact" 
              className="btn-primary group flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            
            <Link 
              href="/portfolio" 
              className="btn-secondary group flex items-center space-x-2"
            >
              <span>View Our Work</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto px-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group p-6 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:border-luxa-2/50 transition-all duration-300 card-hover"
              >
                <div className="w-12 h-12 bg-luxa-gradient rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-gray-200/50"
          >
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 max-w-4xl mx-auto px-4">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-luxa-2 mb-2">50+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-luxa-2 mb-2">25+</div>
                <div className="text-gray-600">Developers Mentored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-luxa-2 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-luxa-2 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-luxa-2 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-luxa-2 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 