export type DeviceId = "fit" | "phone" | "tablet" | "desktop";

export interface IDevice {
    id: DeviceId;
    label: string;
    // the viewport width the preview pretends to have, or null to use the width of the preview panel
    width: number | null;
}

export const DEVICES: IDevice[] = [
    { id: "fit", label: "Fit to panel", width: null },
    { id: "phone", label: "Phone, 375px", width: 375 },
    { id: "tablet", label: "Tablet, 768px", width: 768 },
    { id: "desktop", label: "Desktop, 1280px", width: 1280 },
];

// Tailwind's default breakpoints, which is what this demo uses
const BREAKPOINTS = [
    { name: "2xl", min: 1536 },
    { name: "xl", min: 1280 },
    { name: "lg", min: 1024 },
    { name: "md", min: 768 },
    { name: "sm", min: 640 },
];

export const breakpointFor = (width: number): string =>
    BREAKPOINTS.find((breakpoint) => width >= breakpoint.min)?.name ?? "base";
