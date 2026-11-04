import { useContext } from "react";
import I18nContext from "@/i18n/I18nContext";

const useI18n = () => {
    const context = useContext(I18nContext);

    if (!context) {
        throw new Error("useI18n must be used within an I18nContext provider");
    }

    return context;
};

export default useI18n;
