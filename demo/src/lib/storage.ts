// localStorage can throw (private mode, blocked site data), so every access is guarded
export const readStorage = (key: string): string | null => {
    try {
        return localStorage.getItem(key);
    } catch {
        return null;
    }
};

export const writeStorage = (key: string, value: string): void => {
    try {
        localStorage.setItem(key, value);
    } catch {
        // ignore, the preference simply won't persist
    }
};
