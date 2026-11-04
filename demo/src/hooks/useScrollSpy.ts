import { useEffect, useState } from "react";

// returns the id of the section that currently sits near the top of the viewport
const useScrollSpy = <T extends string>(ids: readonly T[], initial: T): T => {
    const [active, setActive] = useState<T>(initial);

    useEffect(() => {
        const visible = new Map<string, boolean>();

        // a thin band 30% from the top: whichever section crosses it is the active one
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => visible.set(entry.target.id, entry.isIntersecting));

                const first = ids.find((id) => visible.get(id));

                if (first) {
                    setActive(first);
                }
            },
            { rootMargin: "-30% 0px -65% 0px" },
        );

        ids.forEach((id) => {
            const element = document.getElementById(id);

            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [ids]);

    return active;
};

export default useScrollSpy;
