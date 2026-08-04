import type { SVGProps } from "react";

type IconName =
  | "users" | "calendar" | "wallet" | "phone" | "school" | "check" | "pix"
  | "chart" | "bag" | "invoice" | "alert" | "layers" | "shield" | "history"
  | "settings" | "support" | "card" | "rocket" | "arrow" | "menu" | "close"
  | "play" | "chevron" | "spark" | "lock" | "clock" | "bell" | "search" | "pin" | "teacher"
  | "car" | "wrench" | "box" | "clipboard";

type Props = SVGProps<SVGSVGElement> & { name: IconName };

export function Icon({ name, ...props }: Props) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  const paths: Record<IconName, React.ReactNode> = {
    users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    calendar: <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 11h18"/></>,
    wallet: <><path d="M20 7V5a2 2 0 0 0-2-2H5a3 3 0 0 0 0 6h16v10a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V6"/><path d="M16 14h2"/></>,
    phone: <><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 18h4"/></>,
    school: <><path d="m3 10 9-6 9 6-9 6-9-6Z"/><path d="M7 13v5c3 2 7 2 10 0v-5M21 10v6"/></>,
    check: <><path d="m9 11 3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></>,
    pix: <><path d="m7.2 7.2 2.7-2.7a3 3 0 0 1 4.2 0l2.7 2.7a3 3 0 0 0 4.2 0M16.8 16.8l-2.7 2.7a3 3 0 0 1-4.2 0l-2.7-2.7a3 3 0 0 0-4.2 0M8 8l8 8M16 8l-8 8"/></>,
    chart: <><path d="M3 3v18h18"/><path d="m7 16 4-5 3 3 5-7"/></>,
    bag: <><path d="M6 8h12l1 13H5L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></>,
    invoice: <><path d="M6 2h9l4 4v16H6z"/><path d="M14 2v5h5M9 12h6M9 16h6"/></>,
    alert: <><path d="M12 3 2.8 20h18.4L12 3Z"/><path d="M12 9v4M12 17h.01"/></>,
    layers: <><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></>,
    history: <><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5M12 7v5l3 2"/></>,
    settings: <><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-2.83 2.83-.06-.06A1.7 1.7 0 0 0 15 19.4a1.7 1.7 0 0 0-1 .6 1.7 1.7 0 0 0-.4 1.1V22H9.6v-.9A1.7 1.7 0 0 0 8.5 19.5a1.7 1.7 0 0 0-1.88.34l-.06.06-2.83-2.83.06-.06A1.7 1.7 0 0 0 4.1 15a1.7 1.7 0 0 0-.6-1 1.7 1.7 0 0 0-1.1-.4H2V9.6h.9A1.7 1.7 0 0 0 4.5 8.5a1.7 1.7 0 0 0-.34-1.88L4.1 6.56l2.83-2.83.06.06A1.7 1.7 0 0 0 9 4.1a1.7 1.7 0 0 0 1-.6 1.7 1.7 0 0 0 .4-1.1V2h4v.9A1.7 1.7 0 0 0 15.5 4.5a1.7 1.7 0 0 0 1.88-.34l.06-.06 2.83 2.83-.06.06A1.7 1.7 0 0 0 19.9 9c.2.36.5.7.9.9.36.2.77.3 1.2.3V14c-.43 0-.84.1-1.2.3-.4.2-.7.54-.9.9Z"/></>,
    support: <><circle cx="12" cy="12" r="9"/><path d="M8 15v-3a4 4 0 0 1 8 0v3M8 15H6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2M16 15h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2M16 18h-3"/></>,
    card: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/></>,
    rocket: <><path d="M4.5 16.5c-1.5 1.2-2 4-2 4s2.8-.5 4-2l1-1-2-2-1 1Z"/><path d="M9 15 4 10l6-6c4-4 8-2 10-2 0 2 2 6-2 10l-6 6-5-5"/><circle cx="15" cy="7" r="2"/></>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    play: <><circle cx="12" cy="12" r="10"/><path d="m10 8 6 4-6 4V8Z"/></>,
    chevron: <path d="m9 18 6-6-6-6"/>,
    spark: <><path d="m12 3 1.3 4.2L17.5 8.5l-4.2 1.3L12 14l-1.3-4.2-4.2-1.3 4.2-1.3L12 3Z"/><path d="m19 14 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14Z"/></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></>,
    clock: <><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    teacher: <><circle cx="9" cy="7" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5h5v9h-5M18 9h1"/></>,
    car: <><path d="m5 17-1.5-1.5A2 2 0 0 1 3 14.1V11l2.4-5A2 2 0 0 1 7.2 5h9.6a2 2 0 0 1 1.8 1l2.4 5v3.1a2 2 0 0 1-.5 1.4L19 17"/><path d="M5 17h14M6 17v2M18 17v2M3 11h18M7 13h.01M17 13h.01"/></>,
    wrench: <><path d="M5 15.5 6.7 10h10.6l1.7 5.5"/><path d="M3.5 15.5h17v3h-17zM6 18.5V21M18 18.5V21"/><circle cx="7" cy="17" r=".7"/><circle cx="17" cy="17" r=".7"/><path d="M12 3v4M9.5 5h5"/></>,
    box: <><path d="m21 8-9 5-9-5 9-5 9 5Z"/><path d="M3 8v9l9 5 9-5V8M12 13v9"/></>,
    clipboard: <><rect x="5" y="4" width="14" height="18" rx="2"/><path d="M9 4V2h6v2M9 10h6M9 14h6M9 18h4"/></>,
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true" {...common} {...props}>{paths[name]}</svg>;
}
