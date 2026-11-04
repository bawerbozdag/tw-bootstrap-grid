import Callout from "@/components/Callout";
import Rich from "@/components/Rich";
import Section from "@/components/Section";
import useI18n from "@/hooks/useI18n";
import { fmt } from "@/i18n/format";

// the class names of each row, in the same order as the groups and rows in the messages
const NAMES: string[][] = [
    [".container", ".container-fluid", ".row"],
    [".col", ".col-auto", ".col-1 … .col-12"],
    [".offset-0 … .offset-12", ".row-cols-1 … .row-cols-6", ".row-cols-auto"],
    [".g-*", ".gx-*", ".gy-*"],
];

const SectionClasses = () => {
    const { m } = useI18n();
    const t = m.classes;

    return (
        <Section id="classes" eyebrow={t.eyebrow} title={t.title} description={t.description}>
            <div className="space-y-5">
                {t.groups.map((group, groupIndex) => (
                    <div key={group.title} className="panel overflow-hidden">
                        <h3 className="border-b bg-sunken px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-muted">
                            {group.title}
                        </h3>
                        <div
                            role="group"
                            tabIndex={0}
                            aria-label={fmt(t.scrollableTable, { title: group.title })}
                            className="overflow-x-auto"
                        >
                            <table className="w-full min-w-[40rem] table-fixed text-start text-sm">
                                <caption className="sr-only">{fmt(t.tableCaption, { title: group.title })}</caption>
                                <colgroup>
                                    <col className="w-[32%]" />
                                    <col className="w-[34%]" />
                                    <col className="w-[34%]" />
                                </colgroup>
                                <thead className="sr-only">
                                    <tr>
                                        <th scope="col">{t.columns.name}</th>
                                        <th scope="col">{t.columns.what}</th>
                                        <th scope="col">{t.columns.notes}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y">
                                    {group.rows.map((row, rowIndex) => (
                                        <tr key={NAMES[groupIndex][rowIndex]}>
                                            <th scope="row" className="px-5 py-3 text-start align-top font-normal">
                                                <code>{NAMES[groupIndex][rowIndex]}</code>
                                            </th>
                                            <td className="px-5 py-3 align-top font-mono text-xs text-muted">
                                                {row.what}
                                            </td>
                                            <td className="px-5 py-3 align-top text-muted">{row.note}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                ))}

                <div className="row gy-5">
                    <div className="col-12 lg:col-6">
                        <Callout kind="tip" title={t.responsive.title} className="h-full">
                            <Rich text={t.responsive.body} />
                        </Callout>
                    </div>
                    <div className="col-12 lg:col-6">
                        <Callout kind="note" title={t.gutterSteps.title} className="h-full">
                            <Rich text={t.gutterSteps.body} />
                        </Callout>
                    </div>
                </div>

                <Callout kind="note" title={t.alignment.title}>
                    <Rich text={t.alignment.body} />
                </Callout>
            </div>
        </Section>
    );
};

export default SectionClasses;
