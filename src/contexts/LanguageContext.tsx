import React, { createContext, useContext, useState, useEffect } from 'react';

type Lang = 'ar' | 'en';

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
  dir: 'rtl' | 'ltr';
}

const translations: Record<Lang, Record<string, string>> = {
  ar: {
    // Nav
    'nav.home': 'الرئيسية',
    'nav.features': 'المميزات',
    'nav.howItWorks': 'كيف يعمل',
    'nav.restaurants': 'للمطاعم',
    'nav.waitlist': 'قائمة الانتظار',
    'nav.faq': 'الأسئلة الشائعة',

    // Countdown
    'countdown.label': 'الإطلاق خلال',
    'countdown.days': 'يوم',
    'countdown.hours': 'ساعة',
    'countdown.minutes': 'دقيقة',
    'countdown.seconds': 'ثانية',

    // Hero
    'hero.badge': '🚀 إطلاق قريب في سمنود والقاهرة وحدائق القبة',
    'hero.title1': 'أطعمتك المفضلة',
    'hero.title2': 'من أفضل المطاعم حولك',
    'hero.subtitle': 'نودمارت هو سوق الطعام الذكي الذي يربطك بأفضل المطاعم والبائعين المحليين. اكتشف، اطلب، واستمتع بتجربة طعام لا مثيل لها.',
    'hero.cta1': 'انضم لقائمة الانتظار',
    'hero.cta2': 'للمطاعم',
    'hero.trust': 'قريبًا في سمنود والقاهرة وحدائق القبة • إطلاق قريب',

    // Value Props
    'value.title': 'لماذا نودمارت؟',
    'value.subtitle': 'نقدم لك تجربة طلب طعام مختلفة تمامًا',
    'value.fast.title': 'طلب سريع',
    'value.fast.desc': 'اطلب من مطعمك المفضل في ثوانٍ معدودة مع واجهة سلسة وسهلة.',
    'value.discover.title': 'اكتشف المحلي',
    'value.discover.desc': 'تعرّف على أفضل المطاعم والبائعين في منطقتك واكتشف أطباق جديدة كل يوم.',
    'value.vendor.title': 'انضمام سهل للبائعين',
    'value.vendor.desc': 'إذا كنت صاحب مطعم، انضم بسهولة وابدأ في استقبال الطلبات فورًا.',
    'value.delivery.title': 'توصيل أفضل',
    'value.delivery.desc': 'تجربة توصيل محلية أسرع وأكثر موثوقية من أي منصة أخرى.',

    // How It Works
    'how.title': 'كيف يعمل نودمارت؟',
    'how.subtitle': 'ثلاث خطوات بسيطة لتجربة طعام مميزة',
    'how.step1.title': 'اكتشف',
    'how.step1.desc': 'تصفح المطاعم والمتاجر القريبة منك واختر ما يناسبك.',
    'how.step2.title': 'اطلب',
    'how.step2.desc': 'أضف ما تريده إلى السلة واختر طريقة الدفع المناسبة.',
    'how.step3.title': 'استمتع',
    'how.step3.desc': 'استلم طلبك بسرعة واستمتع بأفضل الأطعمة المحلية.',

    'how.restaurant.title': 'للمطاعم والبائعين',
    'how.restaurant.step1.title': 'انضم',
    'how.restaurant.step1.desc': 'سجّل مطعمك في دقائق معدودة.',
    'how.restaurant.step2.title': 'أضف المنيو',
    'how.restaurant.step2.desc': 'أضف منتجاتك وأسعارك بسهولة.',
    'how.restaurant.step3.title': 'استقبل الطلبات',
    'how.restaurant.step3.desc': 'ابدأ في استقبال الطلبات وزيادة مبيعاتك.',

    // For Restaurants
    'restaurants.title': 'للمطاعم والبائعين',
    'restaurants.subtitle': 'انضم لنودمارت ووسّع نطاق عملك',
    'restaurants.reach.title': 'وصول أكبر للعملاء',
    'restaurants.reach.desc': 'اوصل لعملاء جدد في منطقتك بدون مجهود تسويقي كبير.',
    'restaurants.upload.title': 'إضافة المنتجات بسهولة',
    'restaurants.upload.desc': 'أضف منيو مطعمك وصور المنتجات بواجهة بسيطة وسريعة.',
    'restaurants.visibility.title': 'ظهور أكبر',
    'restaurants.visibility.desc': 'زد من ظهور مطعمك واحصل على تقييمات إيجابية من العملاء.',
    'restaurants.revenue.title': 'زيادة الإيرادات',
    'restaurants.revenue.desc': 'حقق مبيعات أكثر من خلال قاعدة عملاء متنامية.',
    'restaurants.onboarding.title': 'تسجيل بسيط',
    'restaurants.onboarding.desc': 'عملية انضمام سهلة وسريعة بدون تعقيدات.',

    // Waitlist
    'waitlist.title': 'انضم لقائمة الانتظار',
    'waitlist.subtitle': 'كن من أوائل المستخدمين واحصل على مزايا حصرية عند الإطلاق',
    'waitlist.name': 'الاسم',
    'waitlist.name.placeholder': 'أدخل اسمك الكامل',
    'waitlist.email': 'البريد الإلكتروني',
    'waitlist.email.placeholder': 'أدخل بريدك الإلكتروني',
    'waitlist.role': 'نوع المستخدم',
    'waitlist.role.customer': 'عميل',
    'waitlist.role.restaurant': 'مطعم / بائع',
    'waitlist.role.partner': 'شريك',
    'waitlist.submit': 'انضم الآن',
    'waitlist.success.title': '🎉 تم التسجيل بنجاح!',
    'waitlist.success.desc': 'شكرًا لانضمامك. سنتواصل معك قريبًا بأخبار مثيرة!',

    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.q1': 'ما هو نودمارت؟',
    'faq.a1': 'نودمارت هو سوق إلكتروني للطعام يربط العملاء بالمطاعم والبائعين المحليين في منطقتهم، مع تجربة طلب سلسة وتوصيل سريع.',
    'faq.q2': 'متى سيتم الإطلاق؟',
    'faq.a2': 'نعمل حاليًا على الاستعدادات النهائية للإطلاق. انضم لقائمة الانتظار لتكون أول من يعرف عن موعد الإطلاق الرسمي.',
    'faq.q3': 'هل يمكن للمطاعم التسجيل مبكرًا؟',
    'faq.a3': 'بالطبع! نرحب بجميع المطاعم والبائعين للتسجيل المبكر والاستفادة من مزايا الانضمام قبل الإطلاق.',
    'faq.q4': 'ما هي المناطق التي ستبدأون بها؟',
    'faq.a4': 'سنبدأ الإطلاق في سمنود والقاهرة وحدائق القبة، وسنتوسع تدريجيًا لتغطية مناطق أخرى في مصر.',
    'faq.q5': 'هل سيكون هناك تطبيق موبايل؟',
    'faq.a5': 'نعم، نعمل على تطبيق موبايل لنظامي iOS و Android سيكون متاحًا عند الإطلاق أو بعده بفترة قصيرة.',

    // Final CTA
    'final.title': 'جاهز لتجربة طعام جديدة؟',
    'final.subtitle': 'انضم الآن واحصل على وصول مبكر حصري. سواء كنت عميلًا أو صاحب مطعم، نودمارت هو وجهتك القادمة.',
    'final.cta1': 'انضم لقائمة الانتظار',
    'final.cta2': 'سجّل مطعمك',

    // Footer
    'footer.tagline': 'سوق الطعام الذكي • قريبًا',
    'footer.rights': '© ٢٠٢٦ نودمارت. جميع الحقوق محفوظة.',

    // Legal
    'legal.back': '← العودة للرئيسية',
    'legal.privacy': 'سياسة الخصوصية',
    'legal.terms': 'شروط الخدمة',
    'legal.deleteAccount': 'حذف الحساب',
    'legal.sellerAgreement': 'اتفاقية البائع',
  },
  en: {
    'nav.home': 'Home',
    'nav.features': 'Features',
    'nav.howItWorks': 'How It Works',
    'nav.restaurants': 'For Restaurants',
    'nav.waitlist': 'Waitlist',
    'nav.faq': 'FAQ',

    'countdown.label': 'Launching in',
    'countdown.days': 'Days',
    'countdown.hours': 'Hrs',
    'countdown.minutes': 'Min',
    'countdown.seconds': 'Sec',

    'hero.badge': '🚀 Launching Soon in Samanoud, Cairo & Hadayek El Kobba',
    'hero.title1': 'Your Favorite Food',
    'hero.title2': 'From the Best Local Spots',
    'hero.subtitle': 'NoodMart is the smart food marketplace connecting you with the best restaurants and local vendors. Discover, order, and enjoy an unmatched dining experience.',
    'hero.cta1': 'Join the Waitlist',
    'hero.cta2': 'For Restaurants',
    'hero.trust': 'Coming Soon to Samanoud, Cairo & Hadayek El Kobba • Launching Soon',

    'value.title': 'Why NoodMart?',
    'value.subtitle': 'A completely different food ordering experience',
    'value.fast.title': 'Fast Ordering',
    'value.fast.desc': 'Order from your favorite restaurant in seconds with a smooth, intuitive interface.',
    'value.discover.title': 'Discover Local',
    'value.discover.desc': 'Find the best restaurants and vendors in your area and discover new dishes every day.',
    'value.vendor.title': 'Easy Vendor Onboarding',
    'value.vendor.desc': 'Restaurant owners can join easily and start receiving orders immediately.',
    'value.delivery.title': 'Better Delivery',
    'value.delivery.desc': 'Faster and more reliable local delivery experience than any other platform.',

    'how.title': 'How NoodMart Works',
    'how.subtitle': 'Three simple steps to an amazing food experience',
    'how.step1.title': 'Discover',
    'how.step1.desc': 'Browse nearby restaurants and stores, and pick what suits you.',
    'how.step2.title': 'Order',
    'how.step2.desc': 'Add items to your cart and choose your preferred payment method.',
    'how.step3.title': 'Enjoy',
    'how.step3.desc': 'Get your order delivered fast and enjoy the best local food.',

    'how.restaurant.title': 'For Restaurants & Vendors',
    'how.restaurant.step1.title': 'Join',
    'how.restaurant.step1.desc': 'Register your restaurant in just minutes.',
    'how.restaurant.step2.title': 'Add Menu',
    'how.restaurant.step2.desc': 'Upload your products and pricing with ease.',
    'how.restaurant.step3.title': 'Receive Orders',
    'how.restaurant.step3.desc': 'Start receiving orders and growing your sales.',

    'restaurants.title': 'For Restaurants & Vendors',
    'restaurants.subtitle': 'Join NoodMart and expand your business',
    'restaurants.reach.title': 'Reach More Customers',
    'restaurants.reach.desc': 'Connect with new customers in your area without heavy marketing spend.',
    'restaurants.upload.title': 'Easy Product Upload',
    'restaurants.upload.desc': 'Add your menu and product photos with a simple, fast interface.',
    'restaurants.visibility.title': 'Greater Visibility',
    'restaurants.visibility.desc': 'Increase your restaurant visibility and earn positive customer reviews.',
    'restaurants.revenue.title': 'Boost Revenue',
    'restaurants.revenue.desc': 'Achieve more sales through a growing customer base.',
    'restaurants.onboarding.title': 'Simple Registration',
    'restaurants.onboarding.desc': 'Quick and easy onboarding process with no complications.',

    'waitlist.title': 'Join the Waitlist',
    'waitlist.subtitle': 'Be among the first users and get exclusive perks at launch',
    'waitlist.name': 'Name',
    'waitlist.name.placeholder': 'Enter your full name',
    'waitlist.email': 'Email',
    'waitlist.email.placeholder': 'Enter your email address',
    'waitlist.role': 'User Type',
    'waitlist.role.customer': 'Customer',
    'waitlist.role.restaurant': 'Restaurant / Vendor',
    'waitlist.role.partner': 'Partner',
    'waitlist.submit': 'Join Now',
    'waitlist.success.title': '🎉 Successfully Registered!',
    'waitlist.success.desc': 'Thanks for joining. We\'ll be in touch soon with exciting news!',

    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'What is NoodMart?',
    'faq.a1': 'NoodMart is an online food marketplace connecting customers with local restaurants and vendors in their area, offering a smooth ordering experience and fast delivery.',
    'faq.q2': 'When is the launch?',
    'faq.a2': 'We\'re making final preparations for launch. Join the waitlist to be the first to know about our official launch date.',
    'faq.q3': 'Can restaurants register early?',
    'faq.a3': 'Absolutely! We welcome all restaurants and vendors to register early and benefit from pre-launch advantages.',
    'faq.q4': 'Which areas will you start in?',
    'faq.a4': 'We\'ll launch in Samanoud, Cairo, and Hadayek El Kobba first and gradually expand to cover other areas in Egypt.',
    'faq.q5': 'Will there be a mobile app?',
    'faq.a5': 'Yes, we\'re working on mobile apps for iOS and Android that will be available at or shortly after launch.',

    'final.title': 'Ready for a New Food Experience?',
    'final.subtitle': 'Join now and get exclusive early access. Whether you\'re a customer or restaurant owner, NoodMart is your next destination.',
    'final.cta1': 'Join the Waitlist',
    'final.cta2': 'Register Your Restaurant',

    'footer.tagline': 'The Smart Food Marketplace • Coming Soon',
    'footer.rights': '© 2026 NoodMart. All rights reserved.',

    // Legal
    'legal.back': '← Back to Home',
    'legal.privacy': 'Privacy Policy',
    'legal.terms': 'Terms of Service',
    'legal.deleteAccount': 'Delete Account',
    'legal.sellerAgreement': 'Seller Agreement',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('ar');
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    document.documentElement.style.fontFamily = lang === 'ar' ? 'Cairo, sans-serif' : 'DM Sans, sans-serif';
  }, [lang, dir]);

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
