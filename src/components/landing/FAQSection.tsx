import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const { lang, t } = useLanguage();
  const fontClass = lang === 'ar' ? 'font-arabic' : 'font-english';
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    { q: 'faq.q1', a: 'faq.a1' },
    { q: 'faq.q2', a: 'faq.a2' },
    { q: 'faq.q3', a: 'faq.a3' },
    { q: 'faq.q4', a: 'faq.a4' },
    { q: 'faq.q5', a: 'faq.a5' },
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className={`text-center mb-16 ${fontClass}`}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">{t('faq.title')}</h2>
        </div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className={`rounded-2xl border border-border/50 bg-card overflow-hidden transition-all ${fontClass}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-start"
              >
                <span className="font-semibold text-foreground text-base md:text-lg">{t(faq.q)}</span>
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ms-3 ${openIndex === i ? 'rotate-180' : ''}`} />
              </button>
              {openIndex === i && (
                <div className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground leading-relaxed animate-fade-up">
                  {t(faq.a)}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
