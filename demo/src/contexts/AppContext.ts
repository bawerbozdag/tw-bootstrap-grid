import { createContext } from "react";
import type { SectionId } from "@/_constants";
import type { PageId } from "@/site";

export type TailwindVersion = "v3" | "v4";
export type Theme = "light" | "dark";

export interface IAppContext {
    page: PageId;
    activeSection: SectionId;
    tailwindVersion: TailwindVersion;
    setTailwindVersion: (version: TailwindVersion) => void;
    theme: Theme;
    toggleTheme: () => void;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export default AppContext;
