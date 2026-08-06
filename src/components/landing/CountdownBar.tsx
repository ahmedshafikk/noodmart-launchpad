import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Placeholder launch date — update once the real date is confirmed.
export const LAUNCH_DATE = new Date('2026-09-06T00:00:00');

const getTimeLeft = (target: Date) => {
  const diff = Math.max(0, target.getTime() - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const CountdownBar = () => {
  const { lang, t } = useLanguage();
  const fontClass = lang === 'ar' ? 'font-arabic' : 'font-english';
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(LAUNCH_DATE));

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft(LAUNCH_DATE)), 1000);
    return () => clearInterval(interval);
  }, []);

  const segments = [
    { value: timeLeft.days, label: t('countdown.days') },
    { value: timeLeft.hours, label: t('countdown.hours') },
    { value: timeLeft.minutes, label: t('countdown.minutes') },
    { value: timeLeft.seconds, label: t('countdown.seconds') },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-9 md:h-10 gradient-primary flex items-center justify-center gap-2 md:gap-3 px-3 text-primary-foreground text-xs md:text-sm font-semibold ${fontClass}`}
    >
      <span className="hidden sm:inline">{t('countdown.label')}</span>
      <div className="flex items-center gap-1.5 md:gap-2 tabular-nums">
        {segments.map((seg) => (
          <span key={seg.label} className="flex items-baseline gap-1">
            <span className="font-bold">{String(seg.value).padStart(2, '0')}</span>
            <span className="opacity-80 text-[10px] md:text-xs">{seg.label}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default CountdownBar;
