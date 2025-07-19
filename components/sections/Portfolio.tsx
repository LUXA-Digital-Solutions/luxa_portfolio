'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'fullstack',
      description: 'A modern e-commerce platform built with React, Node.js, and Stripe integration. Features include user authentication, product management, shopping cart, and payment processing.',
      technologies: ['React', 'Node.js', 'TypeScript', 'Stripe', 'MongoDB'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'mobile',
      description: 'Cross-platform mobile banking application with biometric authentication, real-time transactions, and secure payment features.',
      technologies: ['React Native', 'TypeScript', 'Firebase', 'Biometric Auth'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      category: 'frontend',
      description: 'Interactive data visualization dashboard with real-time analytics, custom charts, and comprehensive reporting tools.',
      technologies: ['Vue.js', 'D3.js', 'TypeScript', 'Chart.js'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 4,
      title: 'Restaurant Website',
      category: 'frontend',
      description: 'Modern restaurant website with online ordering system, menu management, and reservation booking functionality.',
      technologies: ['Next.js', 'Tailwind CSS', 'Stripe', 'Prisma'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'SaaS Admin Panel',
      category: 'fullstack',
      description: 'Comprehensive admin panel for SaaS applications with user management, analytics, and subscription handling.',
      technologies: ['React', 'Material-UI', 'Node.js', 'PostgreSQL'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Landing Page Suite',
      category: 'frontend',
      description: 'High-converting landing pages designed for lead generation with A/B testing and analytics integration.',
      technologies: ['Next.js', 'Tailwind CSS', 'Google Analytics', 'Hotjar'],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'fullstack', label: 'Full-Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
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
            <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            Explore our latest projects that showcase our expertise in building modern digital solutions 
            while <span className="text-luxa-2 font-semibold">mentoring the next generation of developers</span>.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 px-4"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-luxa-2 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-luxa-1 hover:text-luxa-2'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Featured Project */}
        {filteredProjects.filter(p => p.featured).map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-6 sm:p-8 lg:p-12 border border-gray-100">
                              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
                {/* Project Image */}
                <div className="relative group">
                  <div className="aspect-video bg-luxa-gradient rounded-2xl overflow-hidden shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-luxa-1 to-luxa-3 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">{project.title}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        className="p-3 bg-white rounded-full hover:bg-luxa-1 transition-colors duration-200"
                        aria-label="View live project"
                      >
                        <ExternalLink size={20} className="text-luxa-2" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-3 bg-white rounded-full hover:bg-luxa-1 transition-colors duration-200"
                        aria-label="View source code"
                      >
                        <Github size={20} className="text-luxa-2" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-luxa-1 text-luxa-2 text-sm font-medium rounded-full">
                      Featured Project
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-luxa-1/20 text-luxa-2 text-sm font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={project.liveUrl}
                      className="btn-primary inline-flex items-center justify-center"
                    >
                      <span>View Live</span>
                      <ExternalLink size={16} className="ml-2" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="btn-secondary inline-flex items-center justify-center"
                    >
                      <span>View Code</span>
                      <Github size={16} className="ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-100"
            >
              {/* Project Image */}
              <div className="relative aspect-video bg-luxa-gradient overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-luxa-1 to-luxa-3 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">{project.title}</span>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white rounded-full hover:bg-luxa-1 transition-colors duration-200"
                      aria-label="View live project"
                    >
                      <ExternalLink size={16} className="text-luxa-2" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white rounded-full hover:bg-luxa-1 transition-colors duration-200"
                      aria-label="View source code"
                    >
                      <Github size={16} className="text-luxa-2" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-luxa-1/20 text-luxa-2 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.liveUrl}
                    className="text-luxa-2 font-semibold hover:text-luxa-3 transition-colors duration-200 flex items-center group/link"
                  >
                    View Project
                    <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform duration-200" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
              Ready to Start Your Project?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let&apos;s build something amazing together while contributing to the next generation of developers.
            </p>
            <Link 
              href="/contact" 
              className="bg-white text-luxa-2 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <span>Get Started</span>
              <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio; 