'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Camera, ShieldCheck, MapPin, Wrench, X, Phone, MessageCircle, ZoomIn } from 'lucide-react';
import { galleryData, GalleryItem } from '@/lib/galleryData';
import { businessInfo } from '@/lib/businessData';

export function WorkGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'AC Repair', 'Fridge Repair', 'Washing Machine', 'Geyser Repair'];

  const filteredItems = filter === 'All' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  return (
    <section className="py-16 sm:py-20 bg-slate-100/70 border-y border-slate-200" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-sky-100 border border-sky-300/60 text-sky-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Camera className="h-3.5 w-3.5 text-sky-600" />
            <span>100% Real Live Work Photos</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Our Doorstep Appliance Repair Work in Gurugram
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Real photos clicked on-site by our senior technicians while repairing ACs, refrigerators, and washing machines across Sector 52, Golf Course Road, and DLF Gurgaon.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                filter === cat
                  ? 'bg-sky-600 text-white shadow-md shadow-sky-600/20'
                  : 'bg-white text-slate-700 hover:bg-slate-200/80 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid: 2 columns on mobile, 3 on tablet, 4 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Photo Box */}
              <div className="relative aspect-[4/3] w-full bg-slate-900 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Badge top-left */}
                <div className="absolute top-2 left-2">
                  <span className="bg-sky-600/90 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-sm">
                    {item.badge}
                  </span>
                </div>

                {/* Zoom Icon top-right */}
                <div className="absolute top-2 right-2 h-7 w-7 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="h-4 w-4" />
                </div>
              </div>

              {/* Title & Short Description */}
              <div className="p-3 sm:p-4 flex flex-col justify-between flex-grow">
                <div>
                  <span className="text-[10px] font-bold text-sky-600 uppercase tracking-wider">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-slate-900 text-xs sm:text-sm mt-0.5 leading-snug line-clamp-2">
                    {item.title}
                  </h3>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span className="flex items-center gap-1 text-slate-600">
                    <MapPin className="h-3 w-3 text-sky-500" /> Gurugram
                  </span>
                  <span className="text-sky-600 font-bold group-hover:underline">
                    View Zoom →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Zoom Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-10 h-9 w-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image */}
            <div className="relative aspect-[4/3] w-full bg-slate-900">
              <Image
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Modal Info */}
            <div className="p-5">
              <span className="bg-sky-100 text-sky-800 text-xs font-bold px-2.5 py-1 rounded-md">
                {selectedPhoto.badge}
              </span>
              <h3 className="text-lg font-black text-slate-900 mt-2">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                {selectedPhoto.description}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-200 flex items-center gap-2">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="flex-1 bg-gradient-to-r from-sky-600 to-blue-600 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 shadow-md hover:from-sky-500 hover:to-blue-500"
                >
                  <Phone className="h-3.5 w-3.5" /> Book This Service
                </a>
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-emerald-500 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-2 hover:bg-emerald-600 shadow-sm"
                >
                  <MessageCircle className="h-3.5 w-3.5" /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
