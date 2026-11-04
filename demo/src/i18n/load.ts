import type { Messages } from "./messages/en";

// one chunk per language, so a visitor only downloads the one they read
const LOADERS: Record<string, () => Promise<{ default: Messages }>> = {
    en: () => import("./messages/en"),
};

export const loadMessages = async (code: string): Promise<Messages> => (await (LOADERS[code] ?? LOADERS.en)()).default;
