import { LucideHistory } from "lucide-react";
import { CHANGELOG_URL, GITHUB_URL, NPM_URL } from "@/_constants";
import { IconGithub, IconNpm } from "./BrandIcons";

const LINK = "inline-flex items-center gap-2 rounded-md px-2.5 py-2 transition hover:text-accent";

const Footer = () => (
    <footer className="border-t">
        <div className="container max-w-6xl flex flex-col items-center justify-between gap-3 py-8 text-sm text-muted sm:flex-row">
            <p>
                MIT © {new Date().getFullYear()}{" "}
                <a href="https://github.com/bawerbozdag" target="_blank" rel="noreferrer" className="hover:text-accent">
                    Baver Bozdağ
                </a>
            </p>
            <nav aria-label="Project links" className="flex flex-wrap justify-center gap-x-2">
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className={LINK}>
                    <IconGithub size={16} />
                    GitHub
                </a>
                <a href={NPM_URL} target="_blank" rel="noreferrer" className={LINK}>
                    <IconNpm size={16} />
                    npm
                </a>
                <a href={CHANGELOG_URL} target="_blank" rel="noreferrer" className={LINK}>
                    <LucideHistory size={16} aria-hidden="true" />
                    Changelog
                </a>
            </nav>
        </div>
    </footer>
);

export default Footer;
