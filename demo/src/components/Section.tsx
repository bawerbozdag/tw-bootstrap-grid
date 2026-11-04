import type { ReactNode } from "react";

interface ISectionProps {
    id: string;
    eyebrow: string;
    title: string;
    description?: ReactNode;
    children: ReactNode;
}

const Section = ({ id, eyebrow, title, description, children }: ISectionProps) => (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t py-12 first:border-t-0 sm:py-16">
        <header className="mb-8 max-w-2xl sm:mb-10">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</p>
            <h2 id={`${id}-title`} className="mb-3 text-3xl font-bold tracking-tight">
                {title}
            </h2>
            {description && <p className="lead">{description}</p>}
        </header>
        {children}
    </section>
);

export const Step = ({ index, title, children }: { index: number; title: string; children: ReactNode }) => (
    <div className="panel p-4 sm:p-6">
        <h3 className="mb-3 flex items-center gap-3 text-lg font-semibold">
            <span className="inline-flex size-6 items-center justify-center rounded-full bg-accent text-xs font-bold text-accent-ink">
                {index}
            </span>
            {title}
        </h3>
        <div className="space-y-4">{children}</div>
    </div>
);

export default Section;
