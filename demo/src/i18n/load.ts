import type { Messages } from "./messages/en";

// one chunk per language, so a visitor only downloads the one they read
const LOADERS: Record<string, () => Promise<{ default: Messages }>> = {
    en: () => import("./messages/en"),
    tr: () => import("./messages/tr"),
    es: () => import("./messages/es"),
    de: () => import("./messages/de"),
    fr: () => import("./messages/fr"),
    pt: () => import("./messages/pt"),
    ru: () => import("./messages/ru"),
    zh: () => import("./messages/zh"),
    ja: () => import("./messages/ja"),
};

export const loadMessages = async (code: string): Promise<Messages> => (await (LOADERS[code] ?? LOADERS.en)()).default;
