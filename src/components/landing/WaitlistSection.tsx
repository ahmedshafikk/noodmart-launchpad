import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';

const WaitlistSection = () => {
  const { lang, t } = useLanguage();
  const fontClass = lang === 'ar' ? 'font-arabic' : 'font-english';
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'customer' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ready to connect to Formspree / Supabase / Google Forms / Custom API
    console.log('Waitlist submission:', formData);
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-20 md:py-32 gradient-warm">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto">
          <div className={`text-center mb-10 ${fontClass}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">{t('waitlist.title')}</h2>
            <p className="text-lg text-muted-foreground">{t('waitlist.subtitle')}</p>
          </div>

          {submitted ? (
            <div className={`text-center p-10 rounded-3xl bg-card border border-border/50 ${fontClass}`}>
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground">{t('waitlist.success.title')}</h3>
              <p className="text-muted-foreground">{t('waitlist.success.desc')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={`p-8 md:p-10 rounded-3xl bg-card border border-border/50 space-y-5 ${fontClass}`}>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">{t('waitlist.name')}</label>
                <input
                  type="text"
                  required
                  placeholder={t('waitlist.name.placeholder')}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">{t('waitlist.email')}</label>
                <input
                  type="email"
                  required
                  placeholder={t('waitlist.email.placeholder')}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">{t('waitlist.role')}</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                >
                  <option value="customer">{t('waitlist.role.customer')}</option>
                  <option value="restaurant">{t('waitlist.role.restaurant')}</option>
                  <option value="partner">{t('waitlist.role.partner')}</option>
                </select>
              </div>
              <button
                type="submit"
                className={`w-full gradient-primary text-primary-foreground py-3.5 rounded-xl font-bold text-lg hover:opacity-90 transition-all hover:scale-[1.02] glow-primary`}
              >
                {t('waitlist.submit')}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
