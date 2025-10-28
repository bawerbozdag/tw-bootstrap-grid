import type { IAppContext } from "./contexts/AppContext";

export interface ISidebarTab {
    title: string;
    items: {
        id: IAppContext["activeTab"];
        label: string;
    }[];
}
