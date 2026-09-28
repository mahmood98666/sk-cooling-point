import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import { businessInfo } from '@/lib/businessData';
import { Logo } from '@/components/Logo';

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-12 border-t border-slate-800" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Logo size="sm" />
              <span className="font-black text-xl text-white tracking-tight">
                SK COOLING <span className="text-sky-400">POINT</span>
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 max-w-sm">
              Professional doorstep appliance repair and refrigerant gas filling service in Gurugram. Fast 30-45 minute arrival with 100% genuine spare parts.
            </p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <ShieldCheck className="h-4 w-4" /> 90 Days Service Warranty Included
            </div>
          </div>

          {/* Quick Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Fast Contact</h3>
            <div className="space-y-2.5 text-xs">
              <a href={`tel:${businessInfo.phone}`} className="flex items-center gap-2 hover:text-white transition-colors text-slate-300 font-bold">
                <Phone className="h-4 w-4 text-sky-400" /> {businessInfo.phoneDisplay}
              </a>
              <a href={`mailto:${businessInfo.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="h-4 w-4 text-sky-400" /> {businessInfo.email}
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{businessInfo.address}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Clock className="h-4 w-4 text-sky-400" /> {businessInfo.workingHours}
              </div>
            </div>
          </div>

          {/* Doorstep Services */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider">Our Services</h3>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Split & Window AC Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">AC Gas Filling (R32 / R410A)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Refrigerator & Fridge Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Washing Machine Servicing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Water Geyser Heating Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Microwave Oven Repair</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} SK Cooling Point Gurugram. All rights reserved.</p>
          <p className="text-slate-400 font-medium">
            Build by <span className="text-sky-400 font-bold tracking-wide">lix go</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
