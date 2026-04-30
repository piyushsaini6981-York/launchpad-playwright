import * as React from "react";
import {
  BadgeCheck,
  Bell,
  Building2,
  ChevronDown,
  CircleDollarSign,
  ClipboardList,
  FileBarChart,
  Layers3,
  LayoutDashboard,
  LineChart,
  Moon,
  SlidersHorizontal,
  UsersRound,
  WalletMinimal,
} from "lucide-react";
import { cn } from "../../lib/utils";

type Props = {
  children: React.ReactNode;
};

type SidebarGroup = {
  title: string;
  items: { label: string; Icon: typeof LayoutDashboard }[];
};

const SIDEBAR: SidebarGroup[] = [
  {
    title: "Main",
    items: [{ label: "Dashboard", Icon: LayoutDashboard }],
  },
  {
    title: "Administration",
    items: [
      { label: "Corporation Directory", Icon: Building2 },
      { label: "Company Directory", Icon: Layers3 },
      { label: "Assessments", Icon: ClipboardList },
      { label: "Tax Returns", Icon: FileBarChart },
      { label: "Bank Connection", Icon: WalletMinimal },
      { label: "Payment Settings", Icon: WalletMinimal },
      { label: "Payment History", Icon: CircleDollarSign },
      { label: "Company Users", Icon: UsersRound },
      { label: "Partners", Icon: UsersRound },
      { label: "Company Settings", Icon: SlidersHorizontal },
    ],
  },
  {
    title: "Users & Access",
    items: [
      { label: "Users Directory", Icon: UsersRound },
      { label: "Group Master", Icon: UsersRound },
      { label: "Group Directory", Icon: UsersRound },
    ],
  },
  {
    title: "Finance",
    items: [
      { label: "Finance Dashboard", Icon: LayoutDashboard },
      { label: "Bank Connection", Icon: WalletMinimal },
      { label: "Payment Settings", Icon: WalletMinimal },
      { label: "Payment History", Icon: WalletMinimal },
    ],
  },
];

function isDirectoryRow(label: string) {
  return (
    label === "Corporation Directory" || label === "Company Directory"
  );
}

/** Full-viewport Espra corporation shell aligned to the company-details reference layout. */
export function EspraAppShell({ children }: Props) {
  return (
    <div className="espra-shell-root fixed inset-0 z-40 flex bg-background leading-snug text-[14px]">
      <aside
        className="flex h-screen w-[var(--sidebar-expanded)] shrink-0 flex-col border-[var(--sidebar-border)] bg-[var(--sidebar-bg)] text-[var(--sidebar-item)] shadow-[inset_-1px_0_0_var(--sidebar-border)]"
        aria-label="Primary navigation"
      >
        <div className="flex h-[var(--shell-header-height)] items-center px-5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-[9px] bg-gradient-to-br from-[#3957c9] via-[#2d489a] to-[#253b80] shadow-inner ring-1 ring-white/10">
              <BadgeCheck className="h-5 w-5 text-white" aria-hidden strokeWidth={2} />
            </span>
            <span className="text-[19px] font-semibold tracking-[-0.02em] text-white">
              Espra
            </span>
          </div>
        </div>
        <div className="flex-1 space-y-5 overflow-y-auto pb-14 pl-[18px] pr-[14px] pt-[18px]">
          {SIDEBAR.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <p className="mb-2 px-1 text-[11px] font-semibold uppercase tracking-[0.09em] text-[var(--sidebar-group)]">
                {group.title}
              </p>
              <ul className="space-y-[2px]">
                {group.items.map(({ label, Icon }) => {
                  const dir = isDirectoryRow(label);
                  const emphasis =
                    dir ||
                    label === "Users Directory" ||
                    label === "Finance Dashboard";

                  return (
                    <li key={`${group.title}-${label}`}>
                      <div
                        className={cn(
                          "relative flex cursor-default gap-[11px] rounded-[10px] py-[11px] pl-[13px] pr-[10px] select-none",
                          dir &&
                            "bg-[rgb(255_255_255/0.05)] shadow-[inset_2px_0_0_rgb(229_239_253/0.55)] text-[rgb(239_246_255)]",
                          !dir &&
                            emphasis &&
                            "text-[rgb(229_239_253/0.78)] hover:bg-[rgb(255_255_255/0.03)]",
                          !emphasis &&
                            "text-[var(--sidebar-item-muted)] hover:bg-[rgb(255_255_255/0.02)]"
                        )}
                      >
                        <Icon className="mt-[1px] h-[17px] w-[17px] shrink-0 opacity-[0.88]" strokeWidth={1.75} aria-hidden />
                        <span className="text-[13px] leading-[17px] font-medium">
                          {label}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col bg-[var(--background)]">
        <header
          className="relative z-[1] flex h-[var(--shell-header-height)] shrink-0 items-center border-b border-[var(--shell-header-divider)] bg-[var(--shell-header-bg)] px-10 shadow-[inset_0_-1px_0_rgb(237_241_246)]"
          role="banner"
        >
          <nav aria-label="Breadcrumb" className="text-[13px] leading-tight">
            <ol className="flex flex-wrap items-center gap-x-1 gap-y-[2px] text-[rgb(117_139_169)]">
              <li className="font-semibold tracking-tight">
                Corporation Directory /
              </li>
              <li className="mx-1 opacity-65">/</li>
              <li className="font-semibold text-foreground">Company Details /</li>
              <li className="mx-1 opacity-65">/</li>
              <li className="font-semibold text-foreground">Tech Venture Digital</li>
            </ol>
          </nav>

          <div className="ml-auto flex items-center gap-3 text-muted-foreground">
            <button
              type="button"
              aria-label="Theme"
              className="rounded-[9px] p-2 hover:bg-muted"
            >
              <Moon strokeWidth={1.75} className="h-[18px] w-[18px]" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Notifications"
              className="rounded-[9px] p-2 hover:bg-muted"
            >
              <Bell strokeWidth={1.75} className="h-[18px] w-[18px]" aria-hidden />
            </button>
            <button
              type="button"
              aria-label="Account"
              className="flex items-center gap-2 rounded-full border border-border bg-secondary py-1 pl-1 pr-2"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#627fc7] via-[#3d5aa8] to-[#253b80] text-[12px] font-bold text-white shadow-sm">
                J
              </span>
              <ChevronDown className="mr-1 h-4 w-4 text-muted-foreground" aria-hidden />
            </button>
          </div>
        </header>

        <main className="min-h-0 flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
