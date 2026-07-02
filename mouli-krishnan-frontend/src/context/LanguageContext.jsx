import { createContext, useState } from "react";
import { translations } from "../translations";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {

    const [language,setLanguage] = useState("en");

    return(

        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
                text:translations[language]
            }}
        >
            {children}
        </LanguageContext.Provider>

    );

};