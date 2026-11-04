import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { pageFromPath } from "./site";

// every page is its own prerendered HTML file, the URL says which one this is
createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <App page={pageFromPath(location.pathname)} />
    </StrictMode>,
);
