import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { strokeWidth?: number };

function baseProps(p: IconProps) {
  const { className, strokeWidth = 2, children, ...rest } = p;
  return {
    xmlns: "http://www.w3.org/2000/svg" as const,
    width: 24,
    height: 24,
    viewBox: "0 0 24 24" as const,
    fill: "none" as const,
    stroke: "currentColor" as const,
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    ...rest,
    children,
  };
}

export type IconComponent = (props: IconProps) => JSX.Element;

export function Cpu(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M20 9h2M20 14h2M2 9h2M2 14h2" />
    </svg>
  );
}

export function Sparkles(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3Z" />
      <path d="M5 3v4M7 5H3M19 17v4M21 19h-4" />
    </svg>
  );
}

export function CheckCircle2(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function BrainCircuit(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.972.078 3 3 0 0 0 .164-1.185 3 3 0 0 0 3-3 3 3 0 0 0-3-3 3 3 0 0 0-3 3" />
      <path d="M12 12v-2M9 12h6M12 9v6" />
      <circle cx="6" cy="8" r="1" fill="currentColor" stroke="none" />
      <circle cx="18" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Workflow(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect width="8" height="8" x="3" y="3" rx="2" />
      <path d="M7 11v4a2 2 0 0 0 2 2h4" />
      <rect width="8" height="8" x="13" y="13" rx="2" />
    </svg>
  );
}

export function Bot(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 8V4H8" />
      <rect width="16" height="12" x="4" y="8" rx="2" />
      <path d="M2 14h2M20 14h2M15 13v2M9 13v2" />
      <circle cx="9" cy="16" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="16" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LineChart(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

export function Cog(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" />
      <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

export function RadioTower(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4.9 4.9a16 16 0 0 1 14.2 0" />
      <path d="M7.8 7.8a10 10 0 0 1 8.4 0" />
      <path d="M10.7 10.7a4 4 0 0 1 2.6 0" />
      <path d="M12 13v9M9 22h6" />
    </svg>
  );
}

export function Earth(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

export function Database(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

export function ServerCog(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect width="20" height="8" x="2" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <path d="M6 6h.01M6 18h.01M10 6h4M10 18h4" />
      <circle cx="18" cy="10" r="3" />
      <path d="M18 8v1M18 11v1M16.5 9.5h1M18.5 9.5h1" />
    </svg>
  );
}

export function Zap(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
    </svg>
  );
}

export function Clock(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

export function Trophy(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

export function UserRound(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="8" r="5" />
      <path d="M20 21a8 8 0 0 0-16 0" />
    </svg>
  );
}

export function CalendarDays(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="M8 2v4M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
    </svg>
  );
}

export function ClipboardList(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <rect width="8" height="4" x="8" y="2" rx="1" />
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
      <path d="M12 11h4M12 16h4M8 11h.01M8 16h.01" />
    </svg>
  );
}

export function Star(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export function Ban(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="10" />
      <path d="m4.9 4.9 14.2 14.2" />
    </svg>
  );
}

export function XCircle(props: IconProps) {
  return (
    <svg {...baseProps(props)}>
      <circle cx="12" cy="12" r="10" />
      <path d="m15 9-6 6M9 9l6 6" />
    </svg>
  );
}
