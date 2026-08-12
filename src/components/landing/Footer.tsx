import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { lang, t } = useLanguage();
  const fontClass = lang === 'ar' ? 'font-arabic' : 'font-english';

  const legalLinks = [
    { to: '/privacy-policy', label: t('legal.privacy') },
    { to: '/terms-of-service', label: t('legal.terms') },
    { to: '/delete-account', label: t('legal.deleteAccount') },
  ];

  return (
    <footer className="py-10 bg-warm-dark">
      <div className={`container mx-auto px-4 md:px-8 text-center ${fontClass}`}>
        <span className="text-2xl font-bold text-gradient-primary font-english tracking-tight">NoodMart</span>
        <p className="mt-3 text-cream/60 text-sm">{t('footer.tagline')}</p>
        <div className="mt-4 flex justify-center gap-4">
          {['Twitter', 'Instagram', 'Facebook'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-cream/40 hover:text-primary text-xs transition-colors"
            >
              {social}
            </a>
          ))}
        </div>
        <div className="mt-4 flex justify-center flex-wrap gap-x-5 gap-y-2">
          {legalLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-cream/40 hover:text-primary text-xs transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <p className="mt-6 text-cream/30 text-xs">{t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
