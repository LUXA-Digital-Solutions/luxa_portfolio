'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Target, Heart, ArrowRight, Award, Clock, Zap } from 'lucide-react';
import Link from 'next/link';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Mentorship First',
      description: 'We believe in empowering the next generation of developers through hands-on experience and real-world projects.'
    },
    {
      icon: Code,
      title: 'Quality Code',
      description: 'Every line of code is written with best practices, maintainability, and scalability in mind.'
    },
    {
      icon: Target,
      title: 'User-Focused',
      description: 'We prioritize user experience and build solutions that solve real problems for real users.'
    },
    {
      icon: Heart,
      title: 'Passion for Learning',
      description: 'Continuous learning and staying updated with the latest technologies is at our core.'
    }
  ];

  const stats = [
    { icon: Award, number: '50+', label: 'Projects Delivered' },
    { icon: Users, number: '25+', label: 'Developers Mentored' },
    { icon: Clock, number: '98%', label: 'Client Satisfaction' },
    { icon: Zap, number: '24/7', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container-max">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-gray-900">About</span>{' '}
            <span className="text-gradient">LUXA</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We&apos;re not just a web development agency. We&apos;re a community of passionate developers 
            dedicated to building amazing digital products while{' '}
            <span className="text-luxa-2 font-semibold">mentoring the next generation</span>.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                LUXA Digital Solutions was born from a simple yet powerful idea: what if we could build 
                exceptional digital products while simultaneously nurturing the next generation of developers?
              </p>
              <p>
                We started as a small team of experienced developers who were passionate about teaching 
                and mentoring. Today, we&apos;ve grown into a fast-growing tech agency that combines 
                professional client work with comprehensive developer mentorship.
              </p>
              <p>
                Our unique approach means that every project we deliver is not just a product for our 
                clients, but also a learning opportunity for aspiring developers. This creates a win-win 
                situation where clients get high-quality solutions, and mentees gain real-world experience.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="btn-primary inline-flex items-center group"
              >
                <span>Join Our Mission</span>
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-luxa-gradient rounded-3xl p-6 sm:p-8 lg:p-12 text-white relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
                <div className="absolute top-20 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-12 h-12 border-2 border-white rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full"></div>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
                  Our Unique Approach
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Client Project</h4>
                      <p className="text-white/80 text-sm">We take on real client projects with real requirements and deadlines.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Mentorship</h4>
                      <p className="text-white/80 text-sm">Experienced developers guide mentees through the entire development process.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Real Experience</h4>
                      <p className="text-white/80 text-sm">Mentees work on actual projects, building real portfolios and gaining practical skills.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our <span className="text-gradient">Values</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-luxa-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={32} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our <span className="text-gradient">Impact</span>
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-luxa-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={32} className="text-white" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-luxa-2 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-luxa-gradient rounded-2xl p-8 lg:p-12 text-white">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Be Part of Our Story?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Whether you&apos;re a client looking for exceptional digital solutions or a developer 
              seeking mentorship, we&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-luxa-2 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white hover:bg-white hover:text-luxa-2 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Join Our Team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 