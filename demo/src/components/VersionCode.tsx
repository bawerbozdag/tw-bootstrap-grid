import useApp from "@/hooks/useApp";
import CodeBlock from "./CodeBlock";

interface IVariant {
    file: string;
    code: string;
}

interface IVersionCodeProps {
    v3: IVariant;
    v4: IVariant;
}

// shows the snippet that matches the Tailwind version picked in the header
const VersionCode = ({ v3, v4 }: IVersionCodeProps) => {
    const { tailwindVersion } = useApp();

    const variant = tailwindVersion === "v3" ? v3 : v4;

    return (
        <div>
            <p className="mb-2 text-xs font-medium text-muted">Tailwind {tailwindVersion === "v3" ? "v3.4" : "v4"}</p>
            <CodeBlock code={variant.code} file={variant.file} />
        </div>
    );
};

export default VersionCode;
