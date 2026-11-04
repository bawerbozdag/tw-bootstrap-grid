import Callout from "@/components/Callout";
import CodeBlock from "@/components/CodeBlock";
import PackageManagerTabs from "@/components/PackageManagerTabs";
import Section, { Step } from "@/components/Section";
import VersionCode from "@/components/VersionCode";

const V3_CONFIG = `import Grid from "tw-bootstrap-grid";

export default {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  plugins: [Grid],
};`;

const V4_CSS = `@import "tailwindcss";
@plugin "tw-bootstrap-grid";`;

const USAGE = `<div class="container">
  <div class="row g-4">
    <div class="col-12 md:col-6 lg:col-4">One</div>
    <div class="col-12 md:col-6 lg:col-4">Two</div>
    <div class="col-12 lg:col-4">Three</div>
  </div>
</div>`;

const SectionInstallation = () => (
    <Section
        id="installation"
        eyebrow="Getting started"
        title="Installation"
        description="Three steps: install the package, register the plugin, start using the classes."
    >
        <div className="space-y-5">
            <Step index={1} title="Install the package">
                <PackageManagerTabs />
            </Step>

            <Step index={2} title="Register the plugin">
                <p className="prose-sm-muted">
                    Pick your Tailwind version in the header and the snippet below follows. Tailwind v4 registers
                    plugins in CSS, v3 in the config file.
                </p>
                <VersionCode
                    v3={{ file: "tailwind.config.ts", code: V3_CONFIG }}
                    v4={{ file: "main.css", code: V4_CSS }}
                />
                <p className="prose-sm-muted">
                    In a CommonJS v3 config, <code className="code-wrap">plugins: [require("tw-bootstrap-grid")]</code>{" "}
                    works as well.
                </p>
            </Step>

            <Step index={3} title="Use the classes">
                <p className="prose-sm-muted">
                    That's it. Use them in your markup like any other Tailwind class. Anything you can do with{" "}
                    <code>sm:</code>, <code>md:</code> or <code>hover:</code> works here too.
                </p>
                <CodeBlock code={USAGE} file="index.html" />
            </Step>

            <Callout kind="warning" title="You need a build step">
                The plugin runs inside Tailwind's compiler (PostCSS, Vite, Webpack, the Tailwind CLI…). It can't work
                with the Tailwind Play CDN script, which has no way to load plugins from npm.
            </Callout>
        </div>
    </Section>
);

export default SectionInstallation;
