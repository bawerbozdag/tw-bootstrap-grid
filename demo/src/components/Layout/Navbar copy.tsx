import srcLogo from "@/assets/images/logo.png";

const Navbar = () => {
    return (
        <header id="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <img src={srcLogo} width={60} height={44} alt="Logo" />
                </div>
                <label className="sr-only" htmlFor="select-tw-version">
                    Select Tailwind version
                </label>
                <select
                    id="select-tw-version"
                    className={[
                        "rounded-xl border border-indigo-400/70 bg-white text-indigo-700",
                        "px-3 py-2 text-sm",
                        "shadow-sm shadow-indigo-400/70 focus:outline-none focus:ring-2 focus:ring-indigo-500/50",
                    ].join(" ")}
                >
                    <option value="v3">Tailwind v3.4.x</option>
                    <option value="v4">Tailwind v4+</option>
                </select>
            </div>
        </header>
    );
};

export default Navbar;
