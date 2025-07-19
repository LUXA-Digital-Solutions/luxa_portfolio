import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>LUXA Digital Solutions - Web Development Agency</title>
        <meta name="description" content="LUXA Digital Solutions is a fast-growing tech agency focused on helping businesses build user-focused digital products while mentoring the next generation of developers." />
        <meta name="keywords" content="web development, frontend, mobile, fullstack, e-commerce, dashboards, landing pages, mentorship, React, Next.js, TypeScript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#54ACBF" />
        
        {/* Open Graph */}
        <meta property="og:title" content="LUXA Digital Solutions - Web Development Agency" />
        <meta property="og:description" content="Empowering Future Developers with Real Projects & Mentorship" />
        <meta property="og:url" content="https://luxa-digital.com" />
        <meta property="og:site_name" content="LUXA Digital Solutions" />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LUXA Digital Solutions - Web Development Agency" />
        <meta name="twitter:description" content="Empowering Future Developers with Real Projects & Mentorship" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <Hero />
        <Services />
        <Footer />
      </main>
    </>
  );
} 