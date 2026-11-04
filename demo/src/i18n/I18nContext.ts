import { createContext } from "react";
import type { ILanguage } from "./languages";
import type { Messages } from "./messages/en";

export interface II18n {
    language: ILanguage;
    m: Messages;
    // a path in the current language, "/#faq" becomes "/tr/#faq"
    url: (path: string) => string;
}

const I18nContext = createContext<II18n | undefined>(undefined);

export default I18nContext;
