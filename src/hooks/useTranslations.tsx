import { useContext } from "react";

import { LanguageContext, LanguageContextType } from "@/context/languageContext";

const useTranslations = () => useContext<LanguageContextType>(LanguageContext);

export default useTranslations;
