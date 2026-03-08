import { useLanguage } from '@/contexts/LanguageContext';
import { Search, ShoppingCart, Smile, LogIn, FileText, Bell } from 'lucide-react';

const HowItWorks = () => {
  const { lang, t } = useLanguage();
  const fontClass = lang === 'ar' ? 'font-arabic' : 'font-english';

  const customerSteps = [
    { icon: Search, titleKey: 'how.step1.title', descKey: 'how.step1.desc', num: '01' },
    { icon: ShoppingCart, titleKey: 'how.step2.title', descKey: 'how.step2.desc', num: '02' },
    { icon: Smile, titleKey: 'how.step3.title', descKey: 'how.step3.desc', num: '03' },
  ];

  const restaurantSteps = [
    { icon: LogIn, titleKey: 'how.restaurant.step1.title', descKey: 'how.restaurant.step1.desc', num: '01' },
    { icon: FileText, titleKey: 'how.restaurant.step2.title', descKey: 'how.restaurant.step2.desc', num: '02' },
    { icon: Bell, titleKey: 'how.restaurant.step3.title', descKey: 'how.restaurant.step3.desc', num: '03' },
  ];

  const StepCards = ({ steps }: { steps: typeof customerSteps }) => (
    <div className="grid md:grid-cols-3 gap-6">
      {steps.map((step, i) => (
        <div key={step.titleKey} className={`relative p-6 md:p-8 rounded-2xl bg-card border border-border/50 hover-lift ${fontClass}`}>
          <span className="text-6xl font-bold text-primary/10 absolute top-4 end-4 font-english">{step.num}</span>
          <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-5">
            <step.icon className="w-6 h-6 text-primary-foreground" />
          </div>
          <h3 className="text-xl font-bold mb-2 text-foreground">{t(step.titleKey)}</h3>
          <p className="text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
          {i < steps.length - 1 && (
            <div className="hidden md:block absolute top-1/2 -end-3 w-6 h-6 text-primary/30">→</div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section id="how-it-works" className="py-20 md:py-32 gradient-warm">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`text-center mb-16 ${fontClass}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">{t('how.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('how.subtitle')}</p>
        </div>

        <StepCards steps={customerSteps} />

        <div className={`mt-20 text-center mb-10 ${fontClass}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t('how.restaurant.title')}</h3>
        </div>
        <StepCards steps={restaurantSteps} />
      </div>
    </section>
  );
};

export default HowItWorks;
