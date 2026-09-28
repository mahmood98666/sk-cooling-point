import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-11 w-11 text-base',
    lg: 'h-12 w-12 text-lg',
  }[size];

  return (
    <div
      className={`${sizeClasses} rounded-xl bg-gradient-to-tr from-blue-700 via-sky-600 to-cyan-500 flex items-center justify-center font-black text-white shadow-md shadow-sky-600/25 tracking-tighter select-none relative overflow-hidden group-hover:scale-105 transition-transform flex-shrink-0`}
    >
      <span className="relative z-10 font-black tracking-normal">SK</span>
      <div className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-cyan-300 rounded-full blur-[1px] opacity-80" />
    </div>
  );
}
