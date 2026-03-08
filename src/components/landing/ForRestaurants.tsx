import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Upload, Eye, TrendingUp, CheckCircle } from 'lucide-react';

const ForRestaurants = () => {
  const { lang, t } = useLanguage();
  const fontClass = lang === 'ar' ? 'font-arabic' : 'font-english';

  const benefits = [
    { icon: Users, titleKey: 'restaurants.reach.title', descKey: 'restaurants.reach.desc' },
    { icon: Upload, titleKey: 'restaurants.upload.title', descKey: 'restaurants.upload.desc' },
    { icon: Eye, titleKey: 'restaurants.visibility.title', descKey: 'restaurants.visibility.desc' },
    { icon: TrendingUp, titleKey: 'restaurants.revenue.title', descKey: 'restaurants.revenue.desc' },
    { icon: CheckCircle, titleKey: 'restaurants.onboarding.title', descKey: 'restaurants.onboarding.desc' },
  ];

  return (
    <section id="restaurants" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`text-center mb-16 ${fontClass}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">{t('restaurants.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('restaurants.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b) => (
            <div key={b.titleKey} className={`p-6 rounded-2xl bg-card border border-border/50 hover-lift ${fontClass}`}>
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-4">
                <b.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-foreground">{t(b.titleKey)}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{t(b.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForRestaurants;
