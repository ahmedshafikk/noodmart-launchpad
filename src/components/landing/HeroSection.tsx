import { useLanguage } from '@/contexts/LanguageContext';
import heroBurger from '@/assets/hero-burger.png';
import heroPizza from '@/assets/hero-pizza.png';

const HeroSection = () => {
  const { lang, t } = useLanguage();
  const fontClass = lang === 'ar' ? 'font-arabic' : 'font-english';

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-warm pt-[6.5rem] md:pt-[7.5rem]">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className={`${lang === 'ar' ? 'lg:order-2' : 'lg:order-1'}`}>
            {/* Badge */}
            <div className={`animate-fade-up inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-foreground/80 mb-6 ${fontClass}`}>
              {t('hero.badge')}
            </div>

            {/* Headline */}
            <h1 className={`animate-fade-up-delay-1 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 ${fontClass}`}>
              <span className="text-foreground">{t('hero.title1')}</span>
              <br />
              <span className="text-gradient-primary">{t('hero.title2')}</span>
            </h1>

            {/* Subtitle */}
            <p className={`animate-fade-up-delay-2 text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl ${fontClass}`}>
              {t('hero.subtitle')}
            </p>

            {/* CTAs */}
            <div className={`animate-fade-up-delay-3 flex flex-wrap gap-4 ${fontClass}`}>
              <a
                href="#waitlist"
                className="gradient-primary text-primary-foreground px-8 py-3.5 rounded-full text-base font-bold hover:opacity-90 transition-all hover:scale-105 glow-primary"
              >
                {t('hero.cta1')}
              </a>
              <a
                href="#restaurants"
                className="border-2 border-primary text-primary px-8 py-3.5 rounded-full text-base font-bold hover:bg-primary hover:text-primary-foreground transition-all"
              >
                {t('hero.cta2')}
              </a>
            </div>

            {/* Trust */}
            <p className={`animate-fade-up-delay-3 mt-6 text-sm text-muted-foreground ${fontClass}`}>
              {t('hero.trust')}
            </p>
          </div>

          {/* Food Visual */}
          <div className={`relative ${lang === 'ar' ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow behind */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-3xl scale-75" />
              
              {/* Burger */}
              <img
                src={heroBurger}
                alt="Premium 3D burger"
                className="relative z-10 w-full float-animation drop-shadow-2xl"
              />
              
              {/* Pizza floating secondary */}
              <img
                src={heroPizza}
                alt="Premium 3D pizza"
                className="absolute -bottom-8 -left-8 md:-left-16 w-40 md:w-56 float-animation-delayed drop-shadow-xl z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
