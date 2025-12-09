import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "./assets/Locales/en/translation.json"; // تحميل ترجمة الإنجليزية
import arTranslation from "./assets/Locales/ar/translation.json"; // تحميل ترجمة العربية

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      ar: { translation: arTranslation }
    },
    lng: "en", // اللغة الافتراضية
    fallbackLng: "en", // في حال لم يجد الترجمة المطلوبة
    interpolation: { escapeValue: false }
  });

export default i18next;