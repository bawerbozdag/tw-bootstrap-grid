import Callout from "@/components/Callout";
import CodeBlock from "@/components/CodeBlock";
import PackageManagerTabs from "@/components/PackageManagerTabs";
import Section, { Step } from "@/components/Section";
import Rich from "@/components/Rich";
import VersionCode from "@/components/VersionCode";
import useI18n from "@/hooks/useI18n";

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

const SectionInstallation = () => {
    const { m } = useI18n();
    const t = m.installation;

    return (
        <Section id="installation" eyebrow={t.eyebrow} title={t.title} description={t.description}>
            <div className="space-y-5">
                <Step index={1} title={t.step1}>
                    <PackageManagerTabs />
                </Step>

                <Step index={2} title={t.step2.title}>
                    <p className="prose-sm-muted">
                        <Rich text={t.step2.body} />
                    </p>
                    <VersionCode
                        v3={{ file: "tailwind.config.ts", code: V3_CONFIG }}
                        v4={{ file: "main.css", code: V4_CSS }}
                    />
                    <p className="prose-sm-muted">
                        <Rich text={t.step2.note} />
                    </p>
                </Step>

                <Step index={3} title={t.step3.title}>
                    <p className="prose-sm-muted">
                        <Rich text={t.step3.body} />
                    </p>
                    <CodeBlock code={USAGE} file="index.html" />
                </Step>

                <Callout kind="warning" title={t.buildStep.title}>
                    <Rich text={t.buildStep.body} />
                </Callout>
            </div>
        </Section>
    );
};

export default SectionInstallation;
