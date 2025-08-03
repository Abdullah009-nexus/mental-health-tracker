'use client';

import React from 'react';

export default function Help() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden m-0 p-0">
      {/* Background Video */}
      <div className="fixed inset-0 w-full h-full overflow-hidden m-0 p-0">
        <video
          className="absolute inset-0 w-full h-full object-cover z-[-1]"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Fullscreen Blur Overlay */}
      <div className="fixed top-0 left-0 w-full h-full z-10 flex flex-col items-center justify-center px-4 text-white text-center bg-black/30 backdrop-blur-sm">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-md">Need Help? </h1>

        {/* Contact Info */}
        <p className="max-w-2xl text-lg mb-8 bg-black/40 p-4 rounded-xl shadow-md">
          If you have any questions or need support, feel free to reach out at{' '}
          <a
            href="mailto:mehdi.abdullah17@yahoo.com"
            className="underline text-blue-300 hover:text-blue-200"
          >
            mehdi.abdullah17@yahoo.com
          </a>.
        </p>

        <p className="max-w-2xl text-lg mb-8 bg-black/40 p-4 rounded-xl shadow-md">
          We're here to support your mental wellness journey every step of the way. 
        </p>
      </div>
    </div>
  );
}
