import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle } from 'lucide-react';

const WAITLIST_STORAGE_KEY = 'noodmart_waitlist_submitted';

const GOOGLE_FORM_ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSex2R2HFWmD3UImiDVq-gTAtF1YHuRT3qPsWVvNoOzZZy5HmQ/formResponse';

const GOOGLE_FORM_ENTRY_IDS = {
  name: 'entry.1814000453',
  email: 'entry.435630173',
  role: 'entry.386182',
};

const GOOGLE_FORM_ROLE_LABELS: Record<string, string> = {
  customer: 'Customer',
  restaurant: 'Restaurant-Vendor',
  partner: 'Partner',
};

const WaitlistSection = () => {
  const { lang, t } = useLanguage();
  const fontClass = lang === 'ar' ? 'font-arabic' : 'font-english';
  const [submitted, setSubmitted] = useState(
    () => typeof window !== 'undefined' && !!localStorage.getItem(WAITLIST_STORAGE_KEY)
  );
  const [submitting, setSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', role: 'customer' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting || submitted) return;
    setSubmitting(true);

    const params = new URLSearchParams();
    params.append(GOOGLE_FORM_ENTRY_IDS.name, formData.name);
    params.append(GOOGLE_FORM_ENTRY_IDS.email, formData.email);
    params.append(GOOGLE_FORM_ENTRY_IDS.role, GOOGLE_FORM_ROLE_LABELS[formData.role] ?? formData.role);

    try {
      // Google Forms doesn't send CORS headers, so the response is opaque
      // (no-cors) — a resolved fetch here just means the request went out.
      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
    } catch (error) {
      console.error('Waitlist submission failed:', error);
    } finally {
      setSubmitting(false);
      setSubmitted(true);
      localStorage.setItem(WAITLIST_STORAGE_KEY, formData.email);
    }
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
                disabled={submitting}
                className={`w-full gradient-primary text-primary-foreground py-3.5 rounded-xl font-bold text-lg hover:opacity-90 transition-all hover:scale-[1.02] glow-primary disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100`}
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
