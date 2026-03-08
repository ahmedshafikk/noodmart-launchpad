import { useLanguage } from '@/contexts/LanguageContext';
import { Zap, MapPin, UserPlus, Truck } from 'lucide-react';

const ValueProps = () => {
  const { lang, t } = useLanguage();
  const fontClass = lang === 'ar' ? 'font-arabic' : 'font-english';

  const props = [
    { icon: Zap, titleKey: 'value.fast.title', descKey: 'value.fast.desc', color: 'text-primary' },
    { icon: MapPin, titleKey: 'value.discover.title', descKey: 'value.discover.desc', color: 'text-accent' },
    { icon: UserPlus, titleKey: 'value.vendor.title', descKey: 'value.vendor.desc', color: 'text-primary' },
    { icon: Truck, titleKey: 'value.delivery.title', descKey: 'value.delivery.desc', color: 'text-accent' },
  ];

  return (
    <section id="features" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`text-center mb-16 ${fontClass}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">{t('value.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('value.subtitle')}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {props.map((prop, i) => (
            <div
              key={prop.titleKey}
              className={`group p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover-lift cursor-default ${fontClass}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <prop.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{t(prop.titleKey)}</h3>
              <p className="text-muted-foreground leading-relaxed">{t(prop.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProps;
