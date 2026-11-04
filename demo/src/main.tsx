import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { loadMessages } from "./i18n/load";
import { parseLocation } from "./site";

// every page in every language is its own prerendered HTML file, the URL says which one this is
const { language, page } = parseLocation(location.pathname);

// the prerendered page stays on screen while the messages of this language load
loadMessages(language.code).then((messages) => {
    createRoot(document.getElementById("root")!).render(
        <StrictMode>
            <App page={page} language={language} messages={messages} />
        </StrictMode>,
    );
});
