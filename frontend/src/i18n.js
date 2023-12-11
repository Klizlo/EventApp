import i18n from "i18next";
import i18nBackend from "i18next-http-backend";
import {initReactI18next} from "react-i18next";

const getLanguage = () => {
    const language = localStorage.getItem("lang");
    if (language === null) {
        localStorage.setItem("lang", "pl");
        return "pl";
    }
    return language;
};

i18n
    .use(i18nBackend)
    .use(initReactI18next)
    .init({
        fallbackLng: "pl",
        lng: getLanguage(),
        interpolation: {
            escapeValue: false,
        },
        backend: {
            loadPath: `${window.location.origin}/i18n/{{lng}}.json`
        }
    });

export default i18n;