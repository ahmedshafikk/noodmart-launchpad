import { useLanguage } from '@/contexts/LanguageContext';

const FinalCTA = () => {
  const { lang, t } = useLanguage();
  const fontClass = lang === 'ar' ? 'font-arabic' : 'font-english';

  return (
    <section className="py-20 md:py-32 gradient-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-primary-foreground blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className={`container mx-auto px-4 md:px-8 relative z-10 text-center ${fontClass}`}>
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">{t('final.title')}</h2>
        <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">{t('final.subtitle')}</p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#waitlist"
            className="bg-primary-foreground text-primary px-8 py-3.5 rounded-full text-base font-bold hover:opacity-90 transition-all hover:scale-105"
          >
            {t('final.cta1')}
          </a>
          <a
            href="#restaurants"
            className="border-2 border-primary-foreground text-primary-foreground px-8 py-3.5 rounded-full text-base font-bold hover:bg-primary-foreground hover:text-primary transition-all"
          >
            {t('final.cta2')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
