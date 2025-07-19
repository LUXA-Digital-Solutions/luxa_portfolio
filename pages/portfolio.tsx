import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Portfolio from '@/components/sections/Portfolio';
import Footer from '@/components/layout/Footer';

export default function PortfolioPage() {
  return (
    <>
      <Head>
        <title>Our Portfolio - LUXA Digital Solutions</title>
        <meta name="description" content="Explore our latest projects that showcase our expertise in building modern digital solutions while mentoring the next generation of developers." />
        <meta name="keywords" content="portfolio, web development projects, mobile apps, e-commerce, dashboards, LUXA projects" />
        <meta property="og:title" content="Our Portfolio - LUXA Digital Solutions" />
        <meta property="og:description" content="Explore our latest projects that showcase our expertise in building modern digital solutions while mentoring the next generation of developers." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Portfolio - LUXA Digital Solutions" />
        <meta name="twitter:description" content="Explore our latest projects that showcase our expertise in building modern digital solutions while mentoring the next generation of developers." />
        <link rel="canonical" href="https://luxa-digital.com/portfolio" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <Portfolio />
        <Footer />
      </main>
    </>
  );
} 