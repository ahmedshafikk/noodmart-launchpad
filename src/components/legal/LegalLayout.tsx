import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import CountdownBar from '@/components/landing/CountdownBar';
import Navbar from '@/components/landing/Navbar';
import Footer from '@/components/landing/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface LegalLayoutProps {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

const LegalLayout = ({ title, lastUpdated, children }: LegalLayoutProps) => {
  const { lang, t } = useLanguage();
  const fontClass = lang === 'ar' ? 'font-arabic' : 'font-english';

  return (
    <div className="min-h-screen bg-background">
      <CountdownBar />
      <Navbar />
      <main className="pt-[6.5rem] md:pt-[7.5rem] pb-16">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <Link
            to="/"
            className={`inline-block mb-8 text-sm text-muted-foreground hover:text-primary transition-colors ${fontClass}`}
          >
            {t('legal.back')}
          </Link>

          <article
            dir="ltr"
            className="font-english prose max-w-none prose-headings:text-foreground prose-p:text-foreground/80 prose-li:text-foreground/80 prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-table:text-foreground/80 prose-th:text-foreground prose-blockquote:text-foreground/80 text-left"
          >
            <h1>{title}</h1>
            {lastUpdated && (
              <p className="text-sm text-muted-foreground -mt-4">{lastUpdated}</p>
            )}
            {children}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LegalLayout;
