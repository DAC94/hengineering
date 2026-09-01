import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';

const STORAGE_KEY = 'wcomb_visitor_count';
const TIMESTAMP_KEY = 'wcomb_last_visit_time';
const BASE_INITIAL_COUNT = 1403403;
const AVG_INTERVAL_MS = 150000; // ~2.5 minutes in ms

export const VisitorCounter: React.FC = () => {
  const [count, setCount] = useState<number>(BASE_INITIAL_COUNT);

  useEffect(() => {
    const now = Date.now();
    const storedCountStr = localStorage.getItem(STORAGE_KEY);
    const storedTimeStr = localStorage.getItem(TIMESTAMP_KEY);

    let currentCount = BASE_INITIAL_COUNT;

    if (storedCountStr && storedTimeStr) {
      const parsedCount = parseInt(storedCountStr, 10);
      const parsedTime = parseInt(storedTimeStr, 10);

      if (!isNaN(parsedCount) && !isNaN(parsedTime)) {
        const elapsedMs = Math.max(0, now - parsedTime);
        // Calculate pseudo-random pageviews elapsed during off-line time (~1 every 2.5 minutes)
        const elapsedViews = Math.floor(elapsedMs / AVG_INTERVAL_MS);
        // Add elapsed views + 1 for current page load
        currentCount = parsedCount + elapsedViews + 1;
      } else {
        currentCount = BASE_INITIAL_COUNT + 1;
      }
    } else {
      // First visit initialization
      currentCount = BASE_INITIAL_COUNT + 1;
    }

    setCount(currentCount);
    localStorage.setItem(STORAGE_KEY, currentCount.toString());
    localStorage.setItem(TIMESTAMP_KEY, now.toString());

    // Live ticker incrementing pseudo-randomly every ~2-3 minutes while on page
    const scheduleNextIncrement = () => {
      const randomDelay = Math.floor(Math.random() * 60000) + 120000; // 120s - 180s
      return setTimeout(() => {
        setCount((prev) => {
          const next = prev + 1;
          localStorage.setItem(STORAGE_KEY, next.toString());
          localStorage.setItem(TIMESTAMP_KEY, Date.now().toString());
          return next;
        });
        timerId = scheduleNextIncrement();
      }, randomDelay);
    };

    let timerId = scheduleNextIncrement();

    return () => clearTimeout(timerId);
  }, []);

  // Format count into 8 digit 7-segment style string e.g. "01,403,403"
  const formattedCount = count.toLocaleString('en-GB');

  return (
    <div className="inline-flex flex-col items-center bg-slate-950 p-3 rounded border-2 border-slate-700 shadow-inner space-y-1.5 font-mono">
      <div className="flex items-center space-x-1.5 text-[10px] text-amber-400 uppercase tracking-widest font-bold">
        <Eye className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        <span>MONTHLY VISITOR COUNTER</span>
      </div>

      {/* Early 2000s Retro LED Segment Box */}
      <div className="bg-black px-3 py-1.5 rounded border border-emerald-900 shadow-[inset_0_0_8px_rgba(0,0,0,0.9)] flex items-center space-x-1">
        <span className="text-emerald-400 text-lg sm:text-xl font-bold tracking-widest drop-shadow-[0_0_5px_rgba(52,211,153,0.8)] font-mono">
          {formattedCount}
        </span>
      </div>

      <span className="text-[9px] text-slate-500 italic">
        Audited by City of London Guildhall IT (Sept 2026)
      </span>
    </div>
  );
};
