import { createContext } from "react";

type TailwindVersionType = "v3" | "v4" | undefined;
type TTabKey = "tab-introduction" | "tab-installation" | "tab-configuration" | "tab-examples" | "tab-playground";

export interface IAppContext {
    activeTabKey: TTabKey;
    setActiveTabKey: (tabKey: TTabKey) => void;
    tailwindVersion: TailwindVersionType;
    setTailwindVersion: (tailwindVersion: TailwindVersionType) => void;
}

const AppContext = createContext<IAppContext | undefined>(undefined);

export default AppContext;
