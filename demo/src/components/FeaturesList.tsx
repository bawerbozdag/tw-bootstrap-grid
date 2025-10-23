import {
    LucideArrowUpDown,
    LucideBox,
    LucideGlobe,
    LucideLayoutGrid,
    LucideMoveRight,
    LucideStretchHorizontal,
} from "lucide-react";
import type { ReactNode } from "react";

const FeaturesList = () => (
    <ul className="row gy-4 gx-4">
        <li className="col-12 lg:col-6">
            <div className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-5 shadow-sm transition-all hover:shadow-md hover:bg-white">
                <span className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-sky-50 p-2 transition group-hover:scale-105">
                    <LucideLayoutGrid className="text-sky-600" size={22} />
                </span>
                <div>
                    <h3 className="text-sm font-semibold text-slate-800 mb-1.5">Grid Columns</h3>
                    <p className="text-sm text-slate-600">
                        <FeatureBadge>.row</FeatureBadge>, <FeatureBadge>.col</FeatureBadge>,{" "}
                        <FeatureBadge>.col-1</FeatureBadge> to <FeatureBadge>.col-12</FeatureBadge> for flexible column
                        layouts.
                    </p>
                </div>
            </div>
        </li>
        <li className="col-12 lg:col-6">
            <div className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-5 shadow-sm transition-all hover:shadow-md hover:bg-white">
                <span className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-emerald-50 p-2 transition group-hover:scale-105">
                    <LucideStretchHorizontal className="text-emerald-600" size={22} />
                </span>
                <div>
                    <h3 className="text-sm font-semibold text-slate-800 mb-1.5">Gutters</h3>
                    <p className="text-sm text-slate-600">
                        <FeatureBadge>.g-*</FeatureBadge>, <FeatureBadge>.gx-*</FeatureBadge>,{" "}
                        <FeatureBadge>.gy-*</FeatureBadge> for gutter spacing (uses Tailwind spacing scale).
                    </p>
                </div>
            </div>
        </li>
        <li className="col-12 lg:col-6">
            <div className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-5 shadow-sm transition-all hover:shadow-md hover:bg-white">
                <span className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-amber-50 p-2 transition group-hover:scale-105">
                    <LucideMoveRight className="text-amber-600" size={22} />
                </span>
                <div>
                    <h3 className="text-sm font-semibold text-slate-800 mb-1.5">Offsets</h3>
                    <p className="text-sm text-slate-600">
                        <FeatureBadge>.offset-*</FeatureBadge> to add horizontal column offsets.
                    </p>
                </div>
            </div>
        </li>
        <li className="col-12 lg:col-6">
            <div className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-5 shadow-sm transition-all hover:shadow-md hover:bg-white">
                <span className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-indigo-50 p-2 transition group-hover:scale-105">
                    <LucideArrowUpDown className="text-indigo-600" size={22} />
                </span>
                <div>
                    <h3 className="text-sm font-semibold text-slate-800 mb-1.5">Ordering</h3>
                    <p className="text-sm text-slate-600">
                        <FeatureBadge>.order-*</FeatureBadge>, <FeatureBadge>.order-first</FeatureBadge>,{" "}
                        <FeatureBadge>.order-last</FeatureBadge> for reordering flex items.
                    </p>
                </div>
            </div>
        </li>
        <li className="col-12 lg:col-6">
            <div className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-5 shadow-sm transition-all hover:shadow-md hover:bg-white">
                <span className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-purple-50 p-2 transition group-hover:scale-105">
                    <LucideBox className="text-purple-600" size={22} />
                </span>
                <div>
                    <h3 className="text-sm font-semibold text-slate-800 mb-1.5">Containers</h3>
                    <p className="text-sm text-slate-600">
                        <FeatureBadge>.container</FeatureBadge>, <FeatureBadge>.container-fluid</FeatureBadge> with
                        responsive max-widths.
                    </p>
                </div>
            </div>
        </li>
        <li className="col-12 lg:col-6">
            <div className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white/70 backdrop-blur p-5 shadow-sm transition-all hover:shadow-md hover:bg-white">
                <span className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-rose-50 p-2 transition group-hover:scale-105">
                    <LucideGlobe className="text-rose-600" size={22} />
                </span>
                <div>
                    <h3 className="text-sm font-semibold text-slate-800 mb-1.5">RTL Support</h3>
                    <p className="text-sm text-slate-600">
                        Automatically adapts <FeatureBadge>.row</FeatureBadge>, <FeatureBadge>.offset-*</FeatureBadge>,
                        and <FeatureBadge>.container</FeatureBadge> for right-to-left layouts.
                    </p>
                </div>
            </div>
        </li>
    </ul>
);

const FeatureBadge = ({ children }: { children: ReactNode }) => (
    <span className="px-1.5 py-0.5 rounded-md bg-slate-200 text-slate-700 font-mono text-xs">{children}</span>
);

export default FeaturesList;
