import type { ReactNode } from "react";
import type { DeviceId } from "@/lib/devices";
import {
    LucideArrowDownUp,
    LucideArrowRightToLine,
    LucideColumns3,
    LucideColumns4,
    LucideLanguages,
    LucideLayers,
    LucideLayoutGrid,
    LucideMonitorSmartphone,
    LucideStretchHorizontal,
    type LucideIcon,
} from "lucide-react";

export interface IExample {
    id: string;
    icon: LucideIcon;
    title: string;
    description: ReactNode;
    tip?: ReactNode;
    code: string;
    // the width the preview starts at, "fit" when left out
    device?: DeviceId;
}

export const EXAMPLES: IExample[] = [
    {
        id: "basic",
        icon: LucideLayoutGrid,
        title: "A basic layout",
        description: (
            <>
                A <code>.container</code> centers your content, a <code>.row</code> lines columns up side by side, and
                each <code>.col-*</code> takes that many of the 12 available slots. Two <code>col-6</code> columns split
                the row in half.
            </>
        ),
        tip: (
            <>
                Columns always wrap. Anything past 12 slots in a single row drops down to the next line, which is handy
                for card lists.
            </>
        ),
        code: `<div class="container">
  <div class="row">
    <div class="col-6">col-6</div>
    <div class="col-6">col-6</div>
  </div>
  <div class="row">
    <div class="col-4">col-4</div>
    <div class="col-4">col-4</div>
    <div class="col-4">col-4</div>
  </div>
</div>`,
    },
    {
        id: "equal-and-auto",
        icon: LucideColumns3,
        title: "Equal and auto-width columns",
        description: (
            <>
                A bare <code>.col</code> shares whatever space is left, so three of them are three equal columns.{" "}
                <code>.col-auto</code> sizes itself to its content, and the neighbouring <code>.col</code> takes the
                rest.
            </>
        ),
        code: `<div class="container">
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
  <div class="row">
    <div class="col-auto">col-auto</div>
    <div class="col">col (fills the rest)</div>
    <div class="col-auto">auto</div>
  </div>
</div>`,
    },
    {
        id: "responsive",
        device: "tablet",
        icon: LucideMonitorSmartphone,
        title: "Responsive columns",
        description: (
            <>
                Every class takes Tailwind's breakpoint prefixes. Start mobile-first with <code>col-12</code>, then
                change the width at larger screens with <code>sm:</code>, <code>md:</code>, <code>lg:</code> and so on.
                Use the width buttons above the preview to see each breakpoint kick in.
            </>
        ),
        tip: (
            <>
                The preview is a real viewport. It shows the width and breakpoint in the corner, and the phone, tablet
                and desktop buttons switch it, so <code>md:</code> and <code>lg:</code> apply just as they would on that
                screen.
            </>
        ),
        code: `<div class="container">
  <div class="row">
    <div class="col-12 md:col-8">col-12 md:col-8</div>
    <div class="col-12 md:col-4">col-12 md:col-4</div>
  </div>
  <div class="row">
    <div class="col-6 lg:col-3">1</div>
    <div class="col-6 lg:col-3">2</div>
    <div class="col-6 lg:col-3">3</div>
    <div class="col-6 lg:col-3">4</div>
  </div>
</div>`,
    },
    {
        id: "gutters",
        icon: LucideStretchHorizontal,
        title: "Gutters",
        description: (
            <>
                Gutters are the gaps between columns. <code>.g-*</code> sets both directions, <code>.gx-*</code> only
                horizontal and <code>.gy-*</code> only vertical. The numbers come from Tailwind's spacing scale, so{" "}
                <code>g-4</code> is the same step as <code>p-4</code>.
            </>
        ),
        tip: (
            <>
                Put gutter classes on the <code>.row</code>. Use <code>g-0</code> to remove the gaps completely.
            </>
        ),
        code: `<div class="container">
  <div class="row g-0">
    <div class="col-6">g-0</div>
    <div class="col-6">g-0</div>
  </div>
  <div class="row g-4">
    <div class="col-4">g-4</div>
    <div class="col-4">g-4</div>
    <div class="col-4">g-4</div>
    <div class="col-4">g-4</div>
    <div class="col-4">g-4</div>
    <div class="col-4">g-4</div>
  </div>
  <div class="row gx-10 gy-2">
    <div class="col-6">gx-10 gy-2</div>
    <div class="col-6">gx-10 gy-2</div>
    <div class="col-6">gx-10 gy-2</div>
    <div class="col-6">gx-10 gy-2</div>
  </div>
</div>`,
    },
    {
        id: "offset",
        icon: LucideArrowRightToLine,
        title: "Offsets",
        description: (
            <>
                <code>.offset-*</code> pushes a column over by that many slots. It's the quick way to center a column or
                leave a gap. Offsets work with breakpoint prefixes too, like <code>lg:offset-3</code>.
            </>
        ),
        tip: (
            <>
                Offsets use <code>margin-inline-start</code>, so they push from the correct side when the page is
                right-to-left. Try the RTL button above the preview.
            </>
        ),
        code: `<div class="container">
  <div class="row">
    <div class="col-6 offset-3">col-6 offset-3 (centered)</div>
  </div>
  <div class="row">
    <div class="col-4">col-4</div>
    <div class="col-4 offset-4">col-4 offset-4</div>
  </div>
  <div class="row">
    <div class="col-12 md:col-8 md:offset-2">col-12 md:col-8 md:offset-2</div>
  </div>
</div>`,
    },
    {
        id: "row-cols",
        icon: LucideColumns4,
        title: "Row columns",
        description: (
            <>
                When every column is the same size, set it once on the row instead of on each child.{" "}
                <code>.row-cols-1</code> to <code>.row-cols-6</code> give each child an equal share, and{" "}
                <code>.row-cols-auto</code> sizes them by content.
            </>
        ),
        tip: (
            <>
                Combine it with breakpoints to change the column count as the screen grows, for example{" "}
                <code>row-cols-2 lg:row-cols-3</code>.
            </>
        ),
        code: `<div class="container">
  <div class="row row-cols-2 lg:row-cols-3">
    <div class="col">1</div>
    <div class="col">2</div>
    <div class="col">3</div>
    <div class="col">4</div>
    <div class="col">5</div>
    <div class="col">6</div>
  </div>
</div>`,
    },
    {
        id: "nesting",
        icon: LucideLayers,
        title: "Nesting",
        description: (
            <>
                A column can hold its own <code>.row</code>. The nested row starts a fresh 12-slot grid inside the
                column, so you can split a space as many times as you need.
            </>
        ),
        code: `<div class="container">
  <div class="row">
    <div class="col-12 md:col-8">
      col-12 md:col-8
      <div class="row mt-3">
        <div class="col-6">nested col-6</div>
        <div class="col-6">nested col-6</div>
      </div>
    </div>
    <div class="col-12 md:col-4">col-12 md:col-4</div>
  </div>
</div>`,
    },
    {
        id: "alignment-and-order",
        icon: LucideArrowDownUp,
        title: "Alignment and order",
        description: (
            <>
                A <code>.row</code> is a normal flex container, so Tailwind's own flexbox utilities work on it:{" "}
                <code>items-*</code>, <code>justify-*</code>, <code>self-*</code> and <code>order-*</code>. The plugin
                doesn't redefine them.
            </>
        ),
        tip: (
            <>
                <code>order-2 md:order-1</code> style swaps are a common pattern: stack in one order on phones, flip
                them on larger screens.
            </>
        ),
        code: `<div class="container">
  <div class="row items-center justify-center" style="min-height: 7rem">
    <div class="col-3">items-center</div>
    <div class="col-3" style="padding-block: 2rem">taller</div>
    <div class="col-3">justify-center</div>
  </div>
  <div class="row">
    <div class="col-4 order-3">1 (order-3)</div>
    <div class="col-4 order-1">2 (order-1)</div>
    <div class="col-4 order-2">3 (order-2)</div>
  </div>
</div>`,
    },
    {
        id: "rtl",
        icon: LucideLanguages,
        title: "Right-to-left",
        description: (
            <>
                Set <code>dir="rtl"</code> on the container, or on <code>&lt;html&gt;</code> for the whole page, and the
                grid flows from the right. This is the one to use for Arabic, Persian, Hebrew and other RTL languages.
            </>
        ),
        tip: (
            <>
                Nothing to configure. The row's gutters are symmetric and offsets use logical properties, so they flip
                on their own.
            </>
        ),
        code: `<div class="container" dir="rtl">
  <div class="row">
    <div class="col-4">1</div>
    <div class="col-4">2</div>
    <div class="col-4">3</div>
  </div>
  <div class="row">
    <div class="col-6 offset-3">offset-3 starts from the right</div>
  </div>
</div>`,
    },
];
