import React from 'react';
import type { AppProps } from 'next/app';
import '../globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Component {...pageProps} />
    </div>
  );
}