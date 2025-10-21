import type { DetailedHTMLProps } from "react";
import clsx from "clsx";
import srcLogo from "@/assets/images/logo.png";

interface ILogoProps extends DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    direction?: "row" | "column";
}

const Logo = ({ className, direction = "row", ...props }: ILogoProps) => {
    const logoSize = direction === "row" ? 30 : 55;

    return (
        <div
            {...props}
            className={clsx(
                "select-none flex items-center",
                direction === "row" ? "gap-2" : "flex-col gap-1",
                className,
            )}
        >
            <img src={srcLogo} width={logoSize} height={logoSize} alt="Logo" className="rounded" />
            <span className="bg-gradient-to-r from-sky-600/90 via-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">
                tw-bootstrap-grid
            </span>
        </div>
    );
};

export default Logo;
