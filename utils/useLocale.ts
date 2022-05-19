import { EN, TH, JA, Locale } from "../locales";

const useLocale = (locale: string | undefined): Locale => {
  let lang: Locale;
  switch (locale) {
    case "th":
      lang = TH;
      break;
    case "ja":
      lang = JA;
      break;
    default:
      lang = EN;
  }
  return lang;
};

export default useLocale;
