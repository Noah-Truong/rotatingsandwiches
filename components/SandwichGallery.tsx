'use client';

import { useState } from 'react';
import Image from 'next/image';
import { sandwiches } from '@/lib/sandwiches';

type Speed = 'slow' | 'normal' | 'fast';

export default function SandwichGallery() {
  const [speed, setSpeed] = useState<Speed>('normal');
  const [isPaused, setIsPaused] = useState(false);

  const speedClasses = {
    slow: 'animate-scroll-slow',
    normal: 'animate-scroll',
    fast: 'animate-scroll-fast',
  };

  const duplicatedSandwiches = [...sandwiches, ...sandwiches];

  return (
    <div className="flex-1 relative overflow-hidden flex items-center">
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />

      {/* Gallery track */}
      <div
        className={`flex gap-8 px-8 ${speedClasses[speed]} ${isPaused ? '[animation-play-state:paused]' : ''} hover:[animation-play-state:paused]`}
      >
        {duplicatedSandwiches.map((sandwich, index) => (
          <div
            key={`${sandwich.id}-${index}`}
            className="flex-shrink-0 bg-[#2a2a2a] rounded-2xl p-5 shadow-lg transition-all duration-300 hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/10 w-96"
          >
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-[#1a1a1a]">
              <Image
                src={sandwich.url}
                alt={sandwich.alt}
                fill
                className="object-contain"
                unoptimized
                sizes="400px"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="absolute bottom-5 right-5 flex gap-3 z-20">
        <button
          onClick={() => setSpeed('slow')}
          className={`px-5 py-2.5 rounded-full backdrop-blur-md border-2 transition-all duration-300 hover:scale-105 ${
            speed === 'slow'
              ? 'bg-white/30 border-white/60'
              : 'bg-white/10 border-white/30 hover:bg-white/20 hover:border-white/50'
          }`}
        >
          Slow
        </button>
        <button
          onClick={() => setSpeed('normal')}
          className={`px-5 py-2.5 rounded-full backdrop-blur-md border-2 transition-all duration-300 hover:scale-105 ${
            speed === 'normal'
              ? 'bg-white/30 border-white/60'
              : 'bg-white/10 border-white/30 hover:bg-white/20 hover:border-white/50'
          }`}
        >
          Normal
        </button>
        <button
          onClick={() => setSpeed('fast')}
          className={`px-5 py-2.5 rounded-full backdrop-blur-md border-2 transition-all duration-300 hover:scale-105 ${
            speed === 'fast'
              ? 'bg-white/30 border-white/60'
              : 'bg-white/10 border-white/30 hover:bg-white/20 hover:border-white/50'
          }`}
        >
          Fast
        </button>
        <button
          onClick={() => setIsPaused(!isPaused)}
          className={`px-5 py-2.5 rounded-full backdrop-blur-md border-2 transition-all duration-300 hover:scale-105 ${
            isPaused
              ? 'bg-white/30 border-white/60'
              : 'bg-white/10 border-white/30 hover:bg-white/20 hover:border-white/50'
          }`}
        >
          {isPaused ? 'Resume' : 'Pause'}
        </button>
      </div>
    </div>
  );
}
