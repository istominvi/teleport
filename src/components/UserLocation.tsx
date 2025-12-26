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
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md text-cyan-300 text-sm font-medium shadow-[0_0_15px_rgba(6,182,212,0.15)]">
        <Globe className="w-4 h-4 text-cyan-400" />
        <span>📍 TelePort Global Network</span>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-slate-300 text-sm font-medium animate-pulse">
        <Loader2 className="w-4 h-4 animate-spin" />
        <span>📡 Поиск спутников...</span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-md text-cyan-300 text-sm font-medium shadow-[0_0_15px_rgba(6,182,212,0.15)]"
    >
      <MapPin className="w-4 h-4 text-cyan-400" />
      <span>
        {data?.city}, {data?.country_name} • <span className="text-cyan-200/70">{data?.ip}</span>
      </span>
    </motion.div>
  );
}
