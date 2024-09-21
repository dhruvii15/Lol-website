import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            welcome: "Welcome",
            description: "This is the English version."
        }
    },
    hi: {
        translation: {
            welcome: "स्वागत है",
            description: "यह हिंदी संस्करण है।"
        }
    },
    // Add translations for other languages
};

// Get the user's language from the browser
const userLanguage = navigator.language || navigator.userLanguage; // Detect user language
const defaultLanguage = userLanguage.slice(0, 2); // Get the first two characters (e.g., 'en', 'hi')

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: defaultLanguage, // Set the detected language as the default
        fallbackLng: 'en', // Fallback language
        interpolation: {
            escapeValue: false, // React already does escaping
        }
    });

export default i18n;
