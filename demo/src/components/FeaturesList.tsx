import {
    LucideBox,
    LucideColumns3,
    LucideGlobe,
    LucideLayoutGrid,
    LucideMoveRight,
    LucideStretchHorizontal,
} from "lucide-react";

const FeaturesList = () => (
    <ul className="row gy-4 gx-4">
        <li className="col-12 lg:col-6">
            <div className="group flex items-center gap-3 rounded-xl border bg-white/70 dark:bg-slate-950 backdrop-blur p-5 shadow-sm transition-all hover:shadow-md hover:bg-white dark:hover:bg-slate-950">
                <span className="inline-flex items-center justify-center rounded-lg border bg-sky-50 p-2 transition group-hover:scale-105">
                    <LucideLayoutGrid className="text-sky-600" size={22} />
                </span>
                <div>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-300 mb-1.5">Grid Columns</h3>
                    <p className="text-sm text-slate-600">
                        <code className="badge">.row</code>, <code className="badge">.col</code>,
                        <code className="badge">.col-1</code> to <code className="badge">.col-12</code> for flexible
                        column layouts.
                    </p>
                </div>
            </div>
        </li>
        <li className="col-12 lg:col-6">
            <div className="group flex items-center gap-3 rounded-xl border bg-white/70 dark:bg-slate-950 backdrop-blur p-5 shadow-sm transition-all hover:shadow-md hover:bg-white dark:hover:bg-slate-950">
                <span className="inline-flex items-center justify-center rounded-lg border bg-emerald-50 p-2 transition group-hover:scale-105">
                    <LucideStretchHorizontal className="text-emerald-600" size={22} />
                </span>
                <div>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-300 mb-1.5">Gutters</h3>
                    <p className="text-sm text-slate-600">
                        <code className="badge">.g-*</code>, <code className="badge">.gx-*</code>and
                        <code className="badge">.gy-*</code> for gutter spacing (uses Tailwind spacing scale).
                    </p>
                </div>
            </div>
        </li>
        <li className="col-12 lg:col-6">
            <div className="group flex items-center gap-3 rounded-xl border bg-white/70 dark:bg-slate-950 backdrop-blur p-5 shadow-sm transition-all hover:shadow-md hover:bg-white dark:hover:bg-slate-950">
                <span className="inline-flex items-center justify-center rounded-lg border bg-amber-50 p-2 transition group-hover:scale-105">
                    <LucideMoveRight className="text-amber-600" size={22} />
                </span>
                <div>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-300 mb-1.5">Offsets</h3>
                    <p className="text-sm text-slate-600">
                        <code className="badge">.offset-*</code>to add horizontal column offsets.
                    </p>
                </div>
            </div>
        </li>
        <li className="col-12 lg:col-6">
            <div className="group flex items-center gap-3 rounded-xl border bg-white/70 dark:bg-slate-950 backdrop-blur p-5 shadow-sm transition-all hover:shadow-md hover:bg-white dark:hover:bg-slate-950">
                <span className="inline-flex items-center justify-center rounded-lg border bg-indigo-50 p-2 transition group-hover:scale-105">
                    <LucideColumns3 className="text-sky-600" size={22} />
                </span>
                <div>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-300 mb-1.5">Row columns</h3>
                    <p className="text-sm text-slate-600">
                        <code className="badge">.row-cols-(1–6)</code>classes evenly divide row children into equal
                        columns.
                    </p>
                </div>
            </div>
        </li>
        <li className="col-12 lg:col-6">
            <div className="group flex items-center gap-3 rounded-xl border bg-white/70 dark:bg-slate-950 backdrop-blur p-5 shadow-sm transition-all hover:shadow-md hover:bg-white dark:hover:bg-slate-950">
                <span className="inline-flex items-center justify-center rounded-lg border bg-purple-50 p-2 transition group-hover:scale-105">
                    <LucideBox className="text-purple-600" size={22} />
                </span>
                <div>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-300 mb-1.5">Containers</h3>
                    <p className="text-sm text-slate-600">
                        <code className="badge">.container</code>and<code className="badge">.container-fluid</code> with
                        responsive max-widths.
                    </p>
                </div>
            </div>
        </li>
        <li className="col-12 lg:col-6">
            <div className="group flex items-center gap-3 rounded-xl border bg-white/70 dark:bg-slate-950 backdrop-blur p-5 shadow-sm transition-all hover:shadow-md hover:bg-white dark:hover:bg-slate-950">
                <span className="inline-flex items-center justify-center rounded-lg border bg-rose-50 p-2 transition group-hover:scale-105">
                    <LucideGlobe className="text-rose-600" size={22} />
                </span>
                <div>
                    <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-300 mb-1.5">RTL Support</h3>
                    <p className="text-sm text-slate-600">
                        Automatically adapts <code className="badge">.row</code>,
                        <code className="badge">.offset-*</code> and <code className="badge">.container</code> for
                        right-to-left layouts.
                    </p>
                </div>
            </div>
        </li>
    </ul>
);

export default FeaturesList;
