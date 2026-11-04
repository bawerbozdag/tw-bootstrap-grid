import { LucideArrowRight } from "lucide-react";
import { MIGRATION_CARD_ICONS } from "@/components/MigrationCards";
import Rich from "@/components/Rich";
import Section from "@/components/Section";
import useI18n from "@/hooks/useI18n";
import { MIGRATION_PATH } from "@/site";

// a short version of the guide, which lives on its own page
const SectionMigration = () => {
    const { m, url } = useI18n();
    const t = m.migrationSummary;

    return (
        <Section id="migration" eyebrow={t.eyebrow} title={t.title} description={t.description}>
            <div className="space-y-6">
                <ul role="list" className="row gy-5">
                    {t.cards.map((card, index) => (
                        <li key={card.title} className="col-12 md:col-4">
                            <div className="panel h-full p-5">
                                <span className="mb-3 inline-flex size-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
                                    {MIGRATION_CARD_ICONS[index]}
                                </span>
                                <h3 className="mb-1.5 font-semibold">{card.title}</h3>
                                <p className="prose-sm-muted">
                                    <Rich text={card.body} />
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>

                <div className="panel flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                    <p className="prose-sm-muted max-w-2xl">{t.ctaBody}</p>
                    <a href={url(MIGRATION_PATH)} className="btn btn-primary shrink-0">
                        {t.ctaButton}
                        <LucideArrowRight size={16} aria-hidden="true" className="rtl:-scale-x-100" />
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default SectionMigration;
