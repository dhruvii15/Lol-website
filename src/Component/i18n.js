import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: {
            next: "Next",
            tap: "people just tapped the button 👇",
            msg: "Get own message!",
            page2: "Select a card background",
            page3: ["Select Your Relation" , "Give hint just for fun..." , "Friend" , "Family" , "GirlFriend" , "BoyFriend" , "Enemy" , "Stranger" , "Send" , "Sending..."],
            success: ["Send another message" , "New App From LOL"],
            noUser: ["User Not Found !" , "Please try again with a different" , "username."],
            noData: ["No data found. !" , "Request failed! Please try again after some time.."]
        }
    },
    hi: {
        translation: {
            next: "आगे",
            tap: "लोगों ने बस बटन पर टैप किया 👇",
            msg: "अपना संदेश प्राप्त करें!",
            page2: "एक कार्ड पृष्ठभूमि चुनें",
            page3: ["अपने रिश्ते का चयन करें", "मज़े के लिए एक हिंट दें...", "दोस्त", "परिवार", "गर्लफ्रेंड", "बॉयफ्रेंड", "दुश्मन", "अजनबी", "भेजें", "भेजा जा रहा है..."],
            success: ["एक और संदेश भेजें", "LOL से नया ऐप"],
            noUser: ["उपयोगकर्ता नहीं मिला!", "कृपया एक अलग उपयोगकर्ता नाम के साथ फिर से प्रयास करें."],
            noData: ["कोई डेटा नहीं मिला!", "अनुरोध विफल! कृपया कुछ समय बाद फिर से प्रयास करें."]
        }
    },
    es: {
        translation: {
            next: "Siguiente",
            tap: "las personas acaban de tocar el botón 👇",
            msg: "¡Obtén tu propio mensaje!",
            page2: "Selecciona un fondo de tarjeta",
            page3: ["Selecciona tu relación", "Da una pista solo por diversión...", "Amigo", "Familia", "Novia", "Novio", "Enemigo", "Desconocido", "Enviar", "Enviando..."],
            success: ["Enviar otro mensaje", "Nueva aplicación de LOL"],
            noUser: ["¡Usuario no encontrado!", "Intenta nuevamente con un nombre de usuario diferente."],
            noData: ["¡No se encontraron datos!", "¡Solicitud fallida! Por favor, inténtalo de nuevo más tarde."]
        }
    },
    ur: {
        translation: {
            next: "اگلا",
            tap: "لوگوں نے صرف بٹن کو دبایا 👇",
            msg: "اپنا پیغام حاصل کریں!",
            page2: "ایک کارڈ پس منظر منتخب کریں",
            page3: ["اپنے رشتے کا انتخاب کریں", "تفریح کے لیے صرف ایک اشارہ دیں...", "دوست", "خاندان", "گرل فرینڈ", "بوائے فرینڈ", "دشمن", "اجنبی", "بھجوائیں", "بھیج رہے ہیں..."],
            success: ["ایک اور پیغام بھیجیں", "LOL سے نیا ایپ"],
            noUser: ["صارف نہیں ملا!", "براہ کرم ایک مختلف صارف نام کے ساتھ دوبارہ کوشش کریں."],
            noData: ["کوئی ڈیٹا نہیں ملا!", "درخواست ناکام! براہ کرم کچھ وقت بعد دوبارہ کوشش کریں."]
        }
    },
    fr: {
        translation: {
            next: "Suivant",
            tap: "les gens ont juste appuyé sur le bouton 👇",
            msg: "Obtenez votre propre message !",
            page2: "Sélectionnez un fond de carte",
            page3: ["Sélectionnez votre relation", "Donnez un indice juste pour le plaisir...", "Ami", "Famille", "Copine", "Copain", "Ennemi", "Inconnu", "Envoyer", "Envoi en cours..."],
            success: ["Envoyer un autre message", "Nouvelle application de LOL"],
            noUser: ["Utilisateur non trouvé !", "Veuillez réessayer avec un nom d'utilisateur différent."],
            noData: ["Aucune donnée trouvée !", "La demande a échoué ! Veuillez réessayer après un certain temps."]
        }
    },
    pt: {
        translation: {
            next: "Próximo",
            tap: "as pessoas acabaram de tocar o botão 👇",
            msg: "Obtenha sua própria mensagem!",
            page2: "Selecione um fundo de cartão",
            page3: ["Selecione seu relacionamento", "Dê uma dica só por diversão...", "Amigo", "Família", "Namorada", "Namorado", "Inimigo", "Desconhecido", "Enviar", "Enviando..."],
            success: ["Enviar outra mensagem", "Novo aplicativo da LOL"],
            noUser: ["Usuário não encontrado!", "Tente novamente com um nome de usuário diferente."],
            noData: ["Nenhum dado encontrado!", "Solicitação falhou! Por favor, tente novamente depois de um tempo."]
        }
    },
    ar: {
        translation: {
            next: "التالي",
            tap: "لقد نقر الناس على الزر 👇",
            msg: "احصل على رسالتك الخاصة!",
            page2: "اختر خلفية بطاقة",
            page3: ["اختر علاقتك", "أعط تلميح للمرح فقط...", "صديق", "عائلة", "صديقة", "صديق", "عدو", "غريب", "أرسل", "يتم الإرسال..."],
            success: ["أرسل رسالة أخرى", "تطبيق جديد من LOL"],
            noUser: ["لم يتم العثور على مستخدم!", "يرجى المحاولة مرة أخرى باستخدام اسم مستخدم مختلف."],
            noData: ["لم يتم العثور على بيانات!", "فشلت الطلب! يرجى المحاولة مرة أخرى بعد بعض الوقت."]
        }
    }
    
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
