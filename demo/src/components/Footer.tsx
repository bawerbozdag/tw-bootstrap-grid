import { LucideHistory } from "lucide-react";
import { CHANGELOG_URL, GITHUB_URL, NPM_URL } from "@/_constants";
import useI18n from "@/hooks/useI18n";
import { fmt } from "@/i18n/format";
import { IconGithub, IconNpm } from "./BrandIcons";
import NewTabHint from "./NewTabHint";

const LINK = "inline-flex items-center gap-2 rounded-md px-2.5 py-2 transition hover:text-accent";

const Footer = () => {
    const { m } = useI18n();

    return (
        <footer className="border-t">
            <div className="container max-w-6xl flex flex-col items-center justify-between gap-3 py-8 text-sm text-muted sm:flex-row">
                <p>
                    {fmt(m.common.license, { year: new Date().getFullYear() })}{" "}
                    <a
                        href="https://github.com/bawerbozdag"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-accent"
                    >
                        Baver Bozdağ
                        <NewTabHint />
                    </a>
                </p>
                <nav aria-label={m.common.projectLinks} className="flex flex-wrap justify-center gap-x-2">
                    <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={LINK}>
                        <IconGithub size={16} />
                        {m.common.github}
                        <NewTabHint />
                    </a>
                    <a href={NPM_URL} target="_blank" rel="noreferrer" className={LINK}>
                        <IconNpm size={16} />
                        {m.common.npm}
                        <NewTabHint />
                    </a>
                    <a href={CHANGELOG_URL} target="_blank" rel="noreferrer" className={LINK}>
                        <LucideHistory size={16} aria-hidden="true" />
                        {m.common.changelog}
                        <NewTabHint />
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
