import { LanguageContext, type LanguageContextType } from "@/context/languageContext";
import { useContext } from "react";

const useTranslations = () => useContext<LanguageContextType>(LanguageContext);

export default useTranslations;
