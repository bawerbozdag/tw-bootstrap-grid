import useI18n from "@/hooks/useI18n";

// screen readers can't see that a link opens a new tab, so it is said out loud
const NewTabHint = () => {
    const { m } = useI18n();

    return <span className="sr-only"> {m.common.newTab}</span>;
};

export default NewTabHint;
