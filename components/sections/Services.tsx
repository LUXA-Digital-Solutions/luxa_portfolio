'use client';

import { motion } from 'framer-motion';
import { 
  Monitor, 
  Smartphone, 
  Layers, 
  ShoppingCart, 
  BarChart3, 
  Target,
  ArrowRight,
  Code,
  Globe,
  Database,
  Zap,
  Palette,
  Shield,
  ShoppingBag,
  TrendingUp,
  Settings,
  Cloud,
  Cpu,
  Smartphone as ReactNative,
  Smartphone as Flutter
} from 'lucide-react';
import Link from 'next/link';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications built with React, Vue, Angular, and cutting-edge frameworks.',
      features: ['React & Next.js', 'Vue.js & Nuxt', 'Angular', 'TypeScript', 'Tailwind CSS', 'Performance Optimization'],
      color: 'from-luxa-1 to-luxa-2'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform and native mobile applications for iOS and Android platforms.',
      features: ['React Native', 'Flutter', 'Native iOS', 'Native Android', 'PWA Development', 'App Store Optimization'],
      color: 'from-luxa-2 to-luxa-3'
    },
    {
      icon: Layers,
      title: 'Full-Stack Development',
      description: 'Complete web applications with frontend, backend, and database integration.',
      features: ['Node.js & Express', 'Python & Django', 'PHP & Laravel', 'Database Design', 'API Development', 'DevOps'],
      color: 'from-luxa-3 to-luxa-4'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Scalable online stores and marketplace platforms for modern businesses.',
      features: ['Shopify Development', 'WooCommerce', 'Custom E-commerce', 'Payment Integration', 'Inventory Management', 'Analytics'],
      color: 'from-luxa-4 to-luxa-5'
    },
    {
      icon: BarChart3,
      title: 'Dashboard Development',
      description: 'Data visualization and analytics dashboards for business intelligence.',
      features: ['Admin Panels', 'Data Visualization', 'Real-time Analytics', 'Custom Reports', 'User Management', 'API Integration'],
      color: 'from-luxa-5 to-luxa-1'
    },
    {
      icon: Target,
      title: 'Landing Pages',
      description: 'High-converting marketing pages designed to maximize lead generation.',
      features: ['Conversion Optimization', 'A/B Testing', 'SEO Optimization', 'Fast Loading', 'Mobile-First Design', 'Analytics Integration'],
      color: 'from-luxa-1 to-luxa-3'
    }
  ];

  const technologies = [
    // Frontend Technologies
    { icon: Globe, name: 'React', category: 'Frontend', color: 'from-blue-500 to-blue-600' },
    { icon: Zap, name: 'Next.js', category: 'Frontend', color: 'from-gray-800 to-gray-900' },
    { icon: Code, name: 'TypeScript', category: 'Language', color: 'from-blue-600 to-blue-700' },
    { icon: Palette, name: 'Tailwind CSS', category: 'Styling', color: 'from-cyan-500 to-blue-500' },
    
    // Backend Technologies
    { icon: Cpu, name: 'Node.js', category: 'Backend', color: 'from-green-500 to-green-600' },
    { icon: Settings, name: 'Python', category: 'Backend', color: 'from-blue-500 to-yellow-500' },
    { icon: Database, name: 'PostgreSQL', category: 'Database', color: 'from-blue-600 to-blue-700' },
    
    // Mobile Technologies
    { icon: ReactNative, name: 'React Native', category: 'Mobile', color: 'from-blue-500 to-blue-600' },
    { icon: Flutter, name: 'Flutter', category: 'Mobile', color: 'from-blue-400 to-blue-500' },
    
    // E-commerce Technologies
    { icon: ShoppingBag, name: 'Shopify', category: 'E-commerce', color: 'from-green-500 to-green-600' },
    { icon: ShoppingCart, name: 'WooCommerce', category: 'E-commerce', color: 'from-orange-500 to-orange-600' },
    
    // Data & Analytics
    { icon: TrendingUp, name: 'D3.js', category: 'Data', color: 'from-orange-500 to-orange-600' },
    { icon: BarChart3, name: 'Chart.js', category: 'Data', color: 'from-red-500 to-red-600' },
    
    // Cloud & DevOps
    { icon: Cloud, name: 'AWS', category: 'Cloud', color: 'from-orange-500 to-orange-600' },
    { icon: Shield, name: 'Firebase', category: 'Cloud', color: 'from-orange-500 to-yellow-500' },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
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
            <span className="text-gray-900">Our</span>{' '}
            <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We specialize in building modern digital solutions that drive business growth while 
            <span className="text-luxa-2 font-semibold"> mentoring the next generation of developers</span>.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-100"
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={32} className="text-white" />
              </div>

              {/* Service Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

              {/* Features List */}
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-luxa-2 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link 
                href="/contact" 
                className="inline-flex items-center text-luxa-2 font-semibold hover:text-luxa-3 transition-colors duration-200 group/link"
              >
                Learn More
                <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Technologies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Technologies We <span className="text-gradient">Master</span>
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group p-3 sm:p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  <tech.icon size={24} className="text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 text-sm mb-1">{tech.name}</h4>
                <p className="text-xs text-gray-500 font-medium">{tech.category}</p>
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
              Ready to Build Something Amazing?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s discuss your project and see how we can help you achieve your goals while contributing to the next generation of developers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-white text-luxa-2 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link 
                href="/portfolio" 
                className="border-2 border-white text-white hover:bg-white hover:text-luxa-2 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 