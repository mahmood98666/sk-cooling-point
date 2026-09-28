import React from 'react';
import { PhoneCall, MessageCircle, Clock } from 'lucide-react';
import { businessInfo } from '@/lib/businessData';

export function QuickActionBar() {
  return (
    <aside aria-label="Quick Action Buttons" className="fixed bottom-0 left-0 right-0 z-50 p-2.5 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-2xl md:hidden">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${businessInfo.phone}`}
          className="flex-1 bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-black py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-sky-600/30 text-sm active:scale-95 transition-transform"
        >
          <PhoneCall className="h-4 w-4 animate-bounce" />
          <span>Call Now</span>
        </a>
        <a
          href={businessInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-black py-3 px-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/30 text-sm active:scale-95 transition-transform"
        >
          <MessageCircle className="h-4 w-4" />
          <span>WhatsApp</span>
        </a>
      </div>
    </aside>
  );
}
