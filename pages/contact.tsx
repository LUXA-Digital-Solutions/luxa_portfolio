import React from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - LUXA Digital Solutions</title>
        <meta name="description" content="Get in touch with LUXA Digital Solutions. Start your project or join our mentorship program. We're here to help you build amazing digital products." />
        <meta name="keywords" content="contact, web development, mentorship, digital solutions, LUXA" />
        <meta property="og:title" content="Contact Us - LUXA Digital Solutions" />
        <meta property="og:description" content="Get in touch with LUXA Digital Solutions. Start your project or join our mentorship program." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us - LUXA Digital Solutions" />
        <meta name="twitter:description" content="Get in touch with LUXA Digital Solutions. Start your project or join our mentorship program." />
        <link rel="canonical" href="https://luxa-digital.com/contact" />
      </Head>

      <main className="min-h-screen">
        <Header />
        <Contact />
        <Footer />
      </main>
    </>
  );
} 