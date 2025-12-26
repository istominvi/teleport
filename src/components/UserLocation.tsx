'use client';

import { useState, useEffect } from 'react';
import { MapPin, Loader2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

interface LocationData {
  city: string;
  country_name: string;
  ip: string;
}

export default function UserLocation() {
  const [data, setData] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/');
        if (!response.ok) throw new Error('Failed to fetch location');
        const jsonData = await response.json();
        setData({
          city: jsonData.city || 'Unknown City',
          country_name: jsonData.country_name || 'Unknown Country',
          ip: jsonData.ip || 'Unknown IP',
        });
      } catch (err) {
        console.error('Error fetching location:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  if (error) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/30 border border-cyan-500/20 backdrop-blur-md text-cyan-300 text-sm font-medium shadow-[0_0_15px_rgba(6,182,212,0.1)]">
        <Globe className="w-4 h-4 text-cyan-400" />
        <span>📍 TelePort Global Network</span>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-950/50 border border-slate-800 backdrop-blur-md text-slate-300 text-sm font-medium animate-pulse">
        <Loader2 className="w-4 h-4 animate-spin text-cyan-500" />
        <span>📡 Поиск спутников...</span>
      </div>
    );
  }

  const isIPv6 = data?.ip.includes(':');

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      // Updated styling: Darker background (Deep Blue/Black), Cyan border/glow, removed purple
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#02091d]/80 border border-cyan-500/30 backdrop-blur-md text-cyan-100 text-sm font-medium shadow-[0_0_20px_rgba(6,182,212,0.15)]"
    >
      <MapPin className="w-4 h-4 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
      <span>
        {data?.city}, {data?.country_name}
        {!isIPv6 && (
          <> • <span className="text-cyan-200/70">{data?.ip}</span></>
        )}
      </span>
    </motion.div>
  );
}
