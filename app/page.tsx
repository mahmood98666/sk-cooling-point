import React from 'react';
import Image from 'next/image';
import { 
  PhoneCall, ShieldCheck, Clock, Wrench, MapPin, Star, 
  CheckCircle2, Snowflake, MessageCircle, ExternalLink, 
  ChevronRight, Sparkles, Award, Zap, ThumbsUp
} from 'lucide-react';
import { businessInfo } from '@/lib/businessData';

export default function Home() {
  const services = [
    {
      id: 'ac-repair',
      title: 'AC Repair & Jet Servicing',
      desc: 'Complete split & window AC diagnostics, cooling coil chemical foam wash & fast breakdown repairs.',
      image: '/images/services/ac-repair.jpg',
      points: ['Same-day 30-min arrival', 'High pressure jet cleaning', 'Capacitor & fan motor fix']
    },
    {
      id: 'gas-filling',
      title: 'AC Gas Filling & Leakage Test',
      desc: '100% genuine R32, R410A, and R22 refrigerant charging with nitrogen pressure testing.',
      image: '/images/services/ac-gas-filling.jpg',
      points: ['Pure grade refrigerant', 'Copper brazing leak arrest', 'Cooling temperature check']
    },
    {
      id: 'fridge-repair',
      title: 'Refrigerator & Deep Freezer',
      desc: 'Fast repair for single door, double door, side-by-side inverter refrigerators & deep freezers.',
      image: '/images/services/refrigerator.jpg',
      points: ['Compressor replacement', 'Defrost & thermostat repair', 'Genuine relay & OLP parts']
    },
    {
      id: 'washing-machine',
      title: 'Washing Machine Repair',
      desc: 'Expert doorstep fixes for front load and top load automatic and semi-automatic washers.',
      image: '/images/services/washing-machine.jpg',
      points: ['Drum noise & bearing repair', 'Water drain pump fix', 'Digital PCB circuit repair']
    },
    {
      id: 'geyser',
      title: 'Water Geyser Repair',
      desc: 'Instant and storage water heater element replacement, scale descaling, and thermostat repair.',
      image: '/images/services/geyser.jpg',
      points: ['Heavy duty copper element', 'MCB tripping & wiring fix', 'Leakage & tank service']
    },
    {
      id: 'microwave',
      title: 'Microwave Oven Repair',
      desc: 'Quick repair for convection, grill, and solo microwaves that are sparking or not heating.',
      image: '/images/services/microwave.jpg',
      points: ['Magnetron replacement', 'High voltage diode test', 'Touchpad & display fix']
    }
  ];

  return (
    <div className="space-y-0">
      
      {/* Hero Section */}
      <section className="relative bg-white text-slate-900 border-b border-slate-200 py-12 sm:py-16 lg:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-800 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
                <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                <span>5.0 ★ Rated Doorstep Tech · Gurugram</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
                SK COOLING <span className="text-sky-600">POINT</span>
              </h1>

              <p className="text-lg sm:text-2xl font-bold text-slate-800 mb-4">
                Doorstep Appliance Repair in Gurugram
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-8 max-w-xl">
                Certified senior technicians arriving at your doorstep in <strong className="text-slate-900 font-semibold">30–45 minutes</strong> across Sector 52, Golf Course Road, Sushant Lok, and all Gurugram sectors. Transparent pricing with 100% genuine parts.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={`tel:${businessInfo.phone}`}
                  className="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-black px-7 py-4 rounded-2xl shadow-xl shadow-sky-600/20 flex items-center justify-center gap-2 text-base transition-all hover:scale-105 active:scale-95"
                >
                  <PhoneCall className="h-5 w-5 animate-bounce" />
                  <span>Call Now</span>
                </a>
                <a
                  href={businessInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-500 hover:bg-emerald-600 text-white font-black px-7 py-4 rounded-2xl shadow-lg shadow-emerald-500/20 flex items-center justify-center gap-2 text-base transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Book on WhatsApp</span>
                </a>
              </div>

              {/* Quick Trust Badges */}
              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 text-xs text-slate-700 font-semibold">
                <span className="flex items-center gap-1.5 text-emerald-700">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" /> 90 Days Warranty
                </span>
                <span className="flex items-center gap-1.5 text-sky-700">
                  <Clock className="h-4 w-4 text-sky-600" /> 30-Min Rapid Arrival
                </span>
                <span className="flex items-center gap-1.5 text-amber-700">
                  <Award className="h-4 w-4 text-amber-600" /> 10+ Yrs Experience
                </span>
              </div>
            </div>

            {/* Right Card (5 Cols) - Highlighted Service Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50/80 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xl shadow-slate-200/60">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-sky-600">Doorstep Service</span>
                    <h2 className="text-xl font-black text-slate-900">Gurugram All Areas</h2>
                  </div>
                  <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full border border-emerald-300">
                    Active Now
                  </span>
                </div>

                <div className="mt-5 space-y-3.5 text-xs text-slate-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Split & Window AC:</strong> Chemical jet wash, gas refilling & compressor service.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Fridge & Deep Freezer:</strong> Cooling failure, relay change & eco gas recharge.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Washing Machine:</strong> Motor, drum vibration & digital PCB board repair.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-sky-600 shrink-0 mt-0.5" />
                    <span><strong>Geyser & Microwave:</strong> Heating elements & magnetron troubleshooting.</span>
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-slate-200 bg-white -mx-6 -mb-6 p-6 rounded-b-3xl">
                  <p className="text-xs text-slate-500 mb-3 font-medium">Instant Technician Allocation in Gurugram:</p>
                  <a
                    href={`tel:${businessInfo.phone}`}
                    className="w-full bg-sky-600 hover:bg-sky-500 text-white font-black py-3 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors shadow-md"
                  >
                    <PhoneCall className="h-4 w-4" /> Call Now
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-slate-50/70 border-t border-slate-200/80" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-sky-600 bg-white border border-sky-200 px-3.5 py-1.5 rounded-full shadow-sm">
              Doorstep Repair Specialists
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-4 tracking-tight">
              Complete Appliance Services We Provide
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              We repair all top appliance brands including LG, Samsung, Daikin, Voltas, Whirlpool, IFB, Bosch, Hitachi, Godrej and Blue Star.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <div 
                key={svc.id}
                className="bg-white rounded-3xl p-3.5 border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-sky-400/80 transition-all duration-300 flex flex-col group hover:-translate-y-1.5"
              >
                {/* Photo Inset Frame */}
                <div className="relative aspect-[16/11] w-full bg-slate-900 rounded-2xl overflow-hidden shadow-sm">
                  <Image
                    src={svc.image}
                    alt={svc.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                  
                  {/* Top Left Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-sky-600/95 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                      <Sparkles className="h-3 w-3 text-cyan-200" /> Doorstep Service
                    </span>
                  </div>

                  {/* Top Right Arrival Pill */}
                  <div className="absolute top-3 right-3">
                    <span className="bg-slate-900/80 backdrop-blur-md text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                      <Clock className="h-3 w-3" /> 30 Min
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-4 pt-5 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-sky-600 transition-colors leading-snug">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {svc.desc}
                    </p>

                    {/* Features Container */}
                    <div className="bg-slate-50/90 rounded-2xl p-3.5 space-y-2 border border-slate-100">
                      {svc.points.map((pt, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                          <div className="h-4 w-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                            <CheckCircle2 className="h-3 w-3 text-emerald-600" />
                          </div>
                          <span className="truncate">{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>





    </div>
  );
}
