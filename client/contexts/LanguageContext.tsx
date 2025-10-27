import React, { createContext, useContext, useState, useEffect } from 'react';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

const supportedLanguages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'ur', name: 'Urdu', nativeName: 'اردو', flag: '🇮🇳' },
  { code: 'or', name: 'Oriya', nativeName: 'ଓଡ଼ିଆ', flag: '🇮🇳' }
];

interface Translations {
  [key: string]: {
    [langCode: string]: string;
  };
}

const translations: Translations = {
  // Navigation
  'search_placeholder': {
    'en': 'Search for products, brands, categories...',
    'hi': 'उत्पाद, ब्रांड, श्रेणियों की खोज करें...',
    'te': 'ఉత్పత్తులు, బ్రాండ్లు, వర్గాలను వెతకండి...',
    'ta': 'தயாரிப்புகள், பிராண்டுகள், வகைகளைத் தேடுங்கள்...',
    'ml': 'ഉൽപ്പന്നങ്ങൾ, ബ്രാൻഡുകൾ, വിഭാഗങ്ങൾ തിരയുക...',
    'mr': 'उत्पादने, ब्रँड, श्रेणी शोधा...',
    'gu': 'ઉત્પાદનો, બ્રાન્ડ્સ, કેટેગરીઝ શોધો...',
    'kn': 'ಉತ್ಪನ್ನಗಳು, ಬ್ರಾಂಡ್‌ಗಳು, ವರ್ಗಗಳನ್ನು ಹುಡುಕಿ...',
    'ur': 'مصنوعات، برانڈز، اقسام تلاش کریں...',
    'or': 'ଉତ୍ପାଦ, ବ୍ରା���୍ଡ, ବର୍ଗ ଖୋଜନ୍ତୁ...'
  },
  'electronics': {
    'en': 'Electronics',
    'hi': 'इलेक्ट्रॉनिक्स',
    'te': 'ఎలక్ట్రానిక్స్',
    'ta': 'மின்னணுவியல்',
    'ml': 'ഇലക്ട്രോണിക്സ്',
    'mr': 'इलेक्ट्रॉनिक्स',
    'gu': 'ઇલેક્ટ્રોનિક્સ',
    'kn': 'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್',
    'ur': 'الیکٹرانکس',
    'or': 'ଇଲେକ୍ଟ୍ରୋନିକ୍ସ'
  },
  'home_appliances': {
    'en': 'Home Appliances',
    'hi': 'घरेलू उपकरण',
    'te': 'గృహోపకరణాలు',
    'ta': 'வீட்டு உபகரணங்கள்',
    'ml': 'വീട്ടുപകരണങ്ങൾ',
    'mr': 'घरगुती उपकरणे',
    'gu': 'ઘરેલું ઉપકરણો',
    'kn': 'ಮನೆಯ ಉಪಕರಣಗಳು',
    'ur': 'گھریلو آلات',
    'or': 'ଘରୋଇ ଉପକରଣ'
  },
  'fashion': {
    'en': 'Fashion',
    'hi': 'फैशन',
    'te': 'ఫ్యాషన్',
    'ta': 'நாகரீகம்',
    'ml': 'ഫാഷൻ',
    'mr': 'फॅशन',
    'gu': 'ફેશન',
    'kn': 'ಫ್ಯ���ಶನ್',
    'ur': 'فیشن',
    'or': 'ଫ୍ୟାଶନ'
  },
  'shoes': {
    'en': 'Shoes',
    'hi': 'जूते',
    'te': 'చెప్పులు',
    'ta': 'காலணிகள்',
    'ml': 'ഷൂകൾ',
    'mr': 'बूट',
    'gu': 'જૂતા',
    'kn': 'ಶೂಗಳು',
    'ur': 'جوتے',
    'or': 'ଜୋତା'
  },
  'smartwatches': {
    'en': 'Smartwatches',
    'hi': 'स्मार्टवॉच',
    'te': 'స్మార్ట్‌వాచ్‌లు',
    'ta': 'ஸ்மார்ட்வாட்ச்கள்',
    'ml': 'സ്മാർട്ട്വാച്ചുകൾ',
    'mr': 'स्मार्टवॉच',
    'gu': 'સ્માર્ટવોચ',
    'kn': 'ಸ್ಮಾರ್ಟ್‌ವಾಚ್‌ಗಳು',
    'ur': 'سمارٹ واچ',
    'or': 'ସ୍ମାର୍ଟ ଘଣ୍ଟା'
  },
  'add_to_cart': {
    'en': 'Add to Cart',
    'hi': 'कार्ट में जोड़ें',
    'te': 'కార్ట్‌కు జోడించండి',
    'ta': 'கார்ட்டில் சேர்க்கவும்',
    'ml': 'കാർട്ടിലേക്ക് ചേർക്കുക',
    'mr': 'कार्टमध्ये जोडा',
    'gu': 'કાર્ટમાં ઉમ��રો',
    'kn': 'ಕಾರ್ಟ್‌ಗೆ ಸೇರಿಸಿ',
    'ur': 'کارٹ میں شامل کریں',
    'or': 'କାର୍ଟରେ ଯୋଗ କରନ୍ତୁ'
  },
  'compare_prices': {
    'en': 'Compare Prices',
    'hi': 'कीमतों की तुलना करें',
    'te': 'ధరలను పోల్చండి',
    'ta': 'விலைகளை ஒப்பிடுங்கள்',
    'ml': 'വിലകൾ താരതമ്യം ചെയ്യുക',
    'mr': 'किंमतींची तुलना करा',
    'gu': 'કિંમતોની તુલના કરો',
    'kn': 'ಬೆಲೆಗಳನ್ನು ಹೋಲಿಸಿ',
    'ur': 'قیمتوں کا موازنہ کریں',
    'or': 'ମୂଲ୍ୟ ତୁଳନା କରନ୍ତୁ'
  },
  'local_stores': {
    'en': 'Local Stores',
    'hi': 'स्थानीय दुकानें',
    'te': 'స్థానిక దుకాణాలు',
    'ta': 'உள்ளூர் கடைகள்',
    'ml': 'പ്രാദേശിക കടകൾ',
    'mr': 'स्थानिक दुकाने',
    'gu': 'સ્થાનિક દુકાનો',
    'kn': 'ಸ್ಥಳೀಯ ಅಂಗಡಿಗಳು',
    'ur': 'مقامی دکانیں',
    'or': 'ସ୍ଥାନୀୟ ଦୋକାନ'
  },
  'best_price': {
    'en': 'Best Price',
    'hi': 'सबसे अच्छी कीमत',
    'te': 'అత్యుత్తమ ధర',
    'ta': 'சிறந்த விலை',
    'ml': 'ഏറ്റവും നല്ല വില',
    'mr': 'सर्वोत्तम किंमत',
    'gu': 'શ્રેષ્ઠ કિંમત',
    'kn': 'ಅತ್ಯುತ್ತಮ ಬೆಲೆ',
    'ur': 'بہترین قیمت',
    'or': 'ସର୍ବୋତ୍ତମ ମୂଲ୍ୟ'
  },
  'loading': {
    'en': 'Loading...',
    'hi': 'लोड हो रहा है...',
    'te': 'లోడ్ అవుతోంది...',
    'ta': 'ஏற்றுகிறது...',
    'ml': 'ലോഡ് ചെയ്യുന്നു...',
    'mr': 'लोड होत आहे...',
    'gu': 'લોડ થઈ રહ્યું છે...',
    'kn': 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...',
    'ur': 'لوڈ ہو رہا ہے...',
    'or': 'ଲୋଡ୍ ହେଉଛି...'
  },
  'no_products_found': {
    'en': 'No products found',
    'hi': 'कोई उत्पाद नहीं मिला',
    'te': 'ఉత్పత్తులు కనుగొనబడలేదు',
    'ta': 'தயாரிப்புகள் எதுவும் க��டைக்கவில்லை',
    'ml': 'ഉൽപ്പന്നങ്ങൾ കണ്ടെത്തിയില്ല',
    'mr': 'कोणतेही उत्पादन सापडले नाही',
    'gu': 'કોઈ ઉત્પાદનો મળ્યા નથી',
    'kn': 'ಯಾವುದೇ ಉತ್ಪನ್ನಗಳು ಕಂಡುಬಂದಿಲ್ಲ',
    'ur': 'کوئی مصنوعات نہیں ملیں',
    'or': 'କୌଣସି ଉତ୍ପାଦ ମିଳିଲା ନାହିଁ'
  }
};

interface LanguageContextType {
  currentLanguage: Language;
  supportedLanguages: Language[];
  changeLanguage: (languageCode: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(supportedLanguages[0]); // Default to English

  // Load saved language on mount
  useEffect(() => {
    const savedLanguageCode = localStorage.getItem('preferred-language');
    if (savedLanguageCode) {
      const savedLanguage = supportedLanguages.find(lang => lang.code === savedLanguageCode);
      if (savedLanguage) {
        setCurrentLanguage(savedLanguage);
      }
    } else {
      // Try to detect browser language
      const browserLanguage = navigator.language.split('-')[0];
      const matchedLanguage = supportedLanguages.find(lang => lang.code === browserLanguage);
      if (matchedLanguage) {
        setCurrentLanguage(matchedLanguage);
      }
    }
  }, []);

  const changeLanguage = (languageCode: string) => {
    const language = supportedLanguages.find(lang => lang.code === languageCode);
    if (language) {
      setCurrentLanguage(language);
      localStorage.setItem('preferred-language', languageCode);
      
      // Update document language attribute
      document.documentElement.lang = languageCode;
      
      // Update document direction for RTL languages
      if (languageCode === 'ur') {
        document.documentElement.dir = 'rtl';
      } else {
        document.documentElement.dir = 'ltr';
      }
    }
  };

  const t = (key: string): string => {
    const translation = translations[key];
    if (translation && translation[currentLanguage.code]) {
      return translation[currentLanguage.code];
    }
    
    // Fallback to English if translation not found
    if (translation && translation['en']) {
      return translation['en'];
    }
    
    // If no translation found, return the key
    return key;
  };

  const value: LanguageContextType = {
    currentLanguage,
    supportedLanguages,
    changeLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export { supportedLanguages, translations };
export type { Language, Translations };
