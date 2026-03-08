import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

const Navbar = () => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { key: 'nav.features', href: '#features' },
    { key: 'nav.howItWorks', href: '#how-it-works' },
    { key: 'nav.restaurants', href: '#restaurants' },
    { key: 'nav.waitlist', href: '#waitlist' },
    { key: 'nav.faq', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="text-2xl md:text-3xl font-bold text-gradient-primary font-english tracking-tight">
            NoodMart
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={`text-sm font-medium text-foreground/70 hover:text-primary transition-colors ${lang === 'ar' ? 'font-arabic' : 'font-english'}`}
              >
                {t(link.key)}
              </a>
            ))}
          </div>

          {/* Lang Toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-border text-sm font-medium text-foreground/70 hover:text-primary hover:border-primary transition-all"
            >
              <Globe className="w-4 h-4" />
              {lang === 'ar' ? 'English' : 'العربية'}
            </button>
            <a
              href="#waitlist"
              className="gradient-primary text-primary-foreground px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {t('hero.cta1')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-border text-xs font-medium text-foreground/70"
            >
              <Globe className="w-3.5 h-3.5" />
              {lang === 'ar' ? 'EN' : 'ع'}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground p-1">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border/50 pt-4 animate-fade-up">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block py-2.5 text-sm font-medium text-foreground/70 hover:text-primary transition-colors ${lang === 'ar' ? 'font-arabic' : 'font-english'}`}
              >
                {t(link.key)}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => setIsOpen(false)}
              className="mt-3 block text-center gradient-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold"
            >
              {t('hero.cta1')}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
