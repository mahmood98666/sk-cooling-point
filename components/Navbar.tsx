import React from 'react';
import Link from 'next/link';
import { PhoneCall, MessageCircle, Clock } from 'lucide-react';
import { businessInfo } from '@/lib/businessData';
import { Logo } from '@/components/Logo';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm">
      {/* Top micro bar */}
      <div className="bg-slate-50 text-slate-600 text-xs py-1.5 px-4 sm:px-8 flex items-center justify-between border-b border-slate-200/80">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Doorstep Tech Available
          </span>
          <span className="hidden md:flex items-center gap-1 text-slate-500">
            <Clock className="h-3.5 w-3.5" /> {businessInfo.workingHours}
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href={`tel:${businessInfo.phone}`} className="text-sky-600 hover:text-sky-700 font-bold flex items-center gap-1">
            <PhoneCall className="h-3.5 w-3.5 text-sky-600" /> {businessInfo.phoneDisplay}
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Logo size="md" />
          <div>
            <div className="font-black text-xl tracking-tight text-slate-900 leading-tight">
              SK COOLING <span className="text-sky-600">POINT</span>
            </div>
            <p className="text-[11px] font-medium text-slate-500 uppercase tracking-wider">
              Gurugram Doorstep Care
            </p>
          </div>
        </Link>

        {/* Desktop Quick Nav Links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
          <a href="#services" className="hover:text-sky-600 transition-colors">Our Services</a>
          <a href="#contact" className="hover:text-sky-600 transition-colors">Contact</a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href={businessInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-sm transition-all hover:shadow-md"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`tel:${businessInfo.phone}`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-md shadow-sky-600/25 transition-all hover:scale-[1.02] active:scale-95"
          >
            <PhoneCall className="h-4 w-4 animate-bounce" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </header>
  );
}
