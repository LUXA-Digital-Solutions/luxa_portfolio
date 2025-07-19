import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import About from '@/components/sections/About';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About LUXA - Digital Solutions & Developer Mentorship</title>
        <meta name="description" content="Learn about LUXA Digital Solutions - a fast-growing tech agency focused on building user-focused digital products while mentoring the next generation of developers." />
        <meta name="keywords" content="about LUXA, web development agency, developer mentorship, digital solutions, tech company" />
        <meta property="og:title" content="About LUXA - Digital Solutions & Developer Mentorship" />
        <meta property="og:description" content="Learn about LUXA Digital Solutions - a fast-growing tech agency focused on building user-focused digital products while mentoring the next generation of developers." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About LUXA - Digital Solutions & Developer Mentorship" />
        <meta name="twitter:description" content="Learn about LUXA Digital Solutions - a fast-growing tech agency focused on building user-focused digital products while mentoring the next generation of developers." />
        <link rel="canonical" href="https://luxa-digital.com/about" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <About />
        <Footer />
      </main>
    </>
  );
} 