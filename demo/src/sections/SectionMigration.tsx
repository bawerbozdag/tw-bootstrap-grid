import { LucideArrowRight } from "lucide-react";
import Section from "@/components/Section";
import { MIGRATION_CARDS } from "@/migration-content";
import { MIGRATION_PATH } from "@/site";

// a short version of the guide, which lives on its own page
const SectionMigration = () => (
    <Section
        id="migration"
        eyebrow="Coming from Bootstrap"
        title="Migrating from Bootstrap"
        description="The grid works the way you remember. Three things look different: how responsive classes are written, the spacing numbers, and the breakpoint widths."
    >
        <div className="space-y-6">
            <ul role="list" className="row gy-5">
                {MIGRATION_CARDS.map((card) => (
                    <li key={card.title} className="col-12 md:col-4">
                        <div className="panel h-full p-5">
                            <span className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                {card.icon}
                            </span>
                            <h3 className="mb-1.5 font-semibold">{card.title}</h3>
                            <p className="prose-sm-muted">{card.body}</p>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="panel flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                <p className="prose-sm-muted max-w-2xl">
                    The full guide has the class mapping tables, the gutter size changes, how to match Bootstrap's
                    breakpoints and a command that converts your markup.
                </p>
                <a href={MIGRATION_PATH} className="btn btn-primary shrink-0">
                    Read the migration guide
                    <LucideArrowRight size={16} aria-hidden="true" />
                </a>
            </div>
        </div>
    </Section>
);

export default SectionMigration;
