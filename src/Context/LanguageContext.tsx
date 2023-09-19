import { createContext, useContext } from "react";

export type Language = {
    langCode: string,
    setLangCode: (lang: string) => void
}

export const GlobalLangContext = createContext<Language>({
    langCode: "en",
    setLangCode: () => {}
})

export const useLangContext = () => useContext(GlobalLangContext)