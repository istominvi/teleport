'use client';

import { useState, useEffect } from 'react';

interface LocationData {
  ip: string;
  city: string;
  country: string;
  success: boolean;
}

export default function UserLocation() {
  const [data, setData] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch('https://ipwho.is/');

        if (!response.ok) {
           throw new Error('Network response was not ok');
        }

        const json = await response.json();

        // ipwho.is returns success: false if something is wrong (e.g. invalid IP reserved range)
        if (json.success === false) {
           throw new Error('API returned success: false');
        }

        setData(json);
        setLoading(false);
      } catch {
        setError(true);
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  // Shared container styles
  const containerClasses = "inline-flex items-center px-4 py-2 rounded-full border backdrop-blur-md bg-slate-900/80 border-cyan-500/30 text-cyan-400 font-mono text-sm";

  if (loading) {
    return (
      <div className={`${containerClasses} animate-pulse`}>
        ⚡ Анализ маршрута...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className={containerClasses}>
        🌐 TelePort Global Network
      </div>
    );
  }

  const isIPv6 = data.ip.includes(':');

  return (
    <div className={containerClasses}>
      📍 {data.city}, {data.country}
      {!isIPv6 && ` • ${data.ip}`}
    </div>
  );
}
