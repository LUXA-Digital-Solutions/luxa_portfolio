'use client';

import React from 'react';
import Link from 'next/link';
import { Linkedin, Github, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: 'Frontend Development', href: '#services' },
      { name: 'Mobile Development', href: '#services' },
      { name: 'Full-Stack Development', href: '#services' },
      { name: 'E-commerce Solutions', href: '#services' },
      { name: 'Dashboard Development', href: '#services' },
      { name: 'Landing Pages', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Portfolio', href: '#portfolio' },
      { name: 'Mentorship Program', href: '#about' },
      { name: 'Contact Us', href: '#contact' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Case Studies', href: '#portfolio' },
      { name: 'Developer Resources', href: '#' },
      { name: 'Join Our Team', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/luxa-digital', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/luxa-digital', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@luxa-digital.com', label: 'Email' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-luxa-gradient rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">L</span>
                </div>
                <span className="text-2xl font-bold">LUXA</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                LUXA Digital Solutions is a fast-growing tech agency focused on helping businesses 
                build user-focused digital products while mentoring the next generation of developers.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-luxa-2 rounded-lg flex items-center justify-center transition-all duration-200 group"
                    aria-label={social.label}
                  >
                    <social.icon size={20} className="text-gray-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-luxa-1 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-luxa-1 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link 
                      href={link.href}
                      className="text-gray-300 hover:text-luxa-1 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} LUXA Digital Solutions. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <Link 
                href="#"
                className="text-gray-400 hover:text-luxa-1 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link 
                href="#"
                className="text-gray-400 hover:text-luxa-1 text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
              
              {/* Scroll to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-luxa-gradient rounded-lg flex items-center justify-center hover:shadow-lg transition-all duration-200"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} className="text-white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 