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
import type { IMessages } from "@/i18n/messages/en";
import type { DeviceId } from "@/lib/devices";

export type ExampleId = keyof IMessages["examples"]["items"];

export interface IExample {
    id: ExampleId;
    icon: LucideIcon;
    code: string;
    // the width the preview starts at, "fit" when left out
    device?: DeviceId;
}

export const EXAMPLES: IExample[] = [
    {
        id: "basic",
        icon: LucideLayoutGrid,
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
        code: `<div class="container">
  <div class="row g-0">
    <div class="col-6">g-0</div>
    <div class="col-6">g-0</div>
  </div>
  <div class="row g-4">
    <div class="col-6">g-4</div>
    <div class="col-6">g-4</div>
    <div class="col-6">g-4</div>
    <div class="col-6">g-4</div>
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
