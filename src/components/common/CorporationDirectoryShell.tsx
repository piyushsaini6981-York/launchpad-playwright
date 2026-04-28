import React from "react";
import {
  Bell,
  Building2,
  ChevronRight,
  LayoutDashboard,
  Moon,
  Settings,
  Shield,
  Users,
  Wallet,
} from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";

type NavItem = {
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  active?: boolean;
};

const mainItems: NavItem[] = [
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Corporation Directory", icon: Building2, active: true },
];

const adminItems: NavItem[] = [
  { label: "Administration", icon: Settings },
  { label: "Users & Access", icon: Users },
  { label: "Finance", icon: Wallet },
  { label: "Security", icon: Shield },
];

type CorporationDirectoryShellProps = {
  breadcrumbCurrent: string;
  title: string;
  description: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
};

function LogoMark() {
  return (
    <div className="tw-flex tw-items-center tw-gap-2 tw-px-3 tw-py-4 tw-border-b tw-border-sidebar-border">
      <div
        className="tw-flex tw-size-9 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-md tw-bg-primary tw-text-primary-foreground tw-text-xs tw-font-bold"
        aria-hidden
      >
        BP
      </div>
      <span className="tw-text-sm tw-font-bold tw-tracking-tight tw-text-sidebar-foreground">
        BSPBlueprint
      </span>
    </div>
  );
}

function NavBlock({
  title,
  items,
}: {
  title: string;
  items: NavItem[];
}) {
  return (
    <div className="tw-mb-6 tw-px-2">
      <p className="tw-mb-2 tw-px-2 tw-text-[10px] tw-font-semibold tw-uppercase tw-tracking-wider tw-text-muted-foreground/80">
        {title}
      </p>
      <nav className="tw-space-y-1 tw-text-sm">
        {items.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            type="button"
            className={cn(
              "tw-flex tw-w-full tw-items-center tw-gap-3 tw-rounded-md tw-py-2.5 tw-pl-3 tw-pr-2 tw-text-left tw-transition-colors",
              active
                ? "tw-bg-sidebar-nav-active tw-text-sidebar-foreground tw-shadow-sm"
                : "tw-text-sidebar-foreground/90 hover:tw-bg-sidebar-accent"
            )}
          >
            <Icon className="tw-size-4 tw-shrink-0 tw-opacity-90" aria-hidden />
            <span className="tw-font-medium">{label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}

/** App chrome for Corporation Directory flows (sidebar + top bar); matches Quick setup frames. */
const CorporationDirectoryShell: React.FC<CorporationDirectoryShellProps> = ({
  breadcrumbCurrent,
  title,
  description,
  badge,
  children,
}) => {
  return (
    <div className="corporation-directory-root tw-flex tw-min-h-screen tw-w-full tw-overflow-hidden tw-bg-background">
      <aside
        className="tw-flex tw-h-screen tw-w-sidebar tw-flex-shrink-0 tw-flex-col tw-border-r tw-border-sidebar-border tw-bg-sidebar"
        aria-label="Primary navigation"
      >
        <LogoMark />
        <div className="tw-flex-1 tw-overflow-y-auto tw-py-4">
          <NavBlock title="Main" items={mainItems} />
          <NavBlock title="Administration" items={adminItems} />
        </div>
      </aside>

      <div className="tw-flex tw-min-h-0 tw-min-w-0 tw-flex-1 tw-flex-col">
        <header
          className="tw-flex tw-h-header tw-shrink-0 tw-items-center tw-justify-between tw-border-b tw-border-border tw-bg-card tw-px-content-x"
          role="banner"
        >
          <nav
            className="tw-flex tw-min-w-0 tw-items-center tw-gap-2 tw-text-sm tw-text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <span className="tw-shrink-0">Corporation Directory</span>
            <ChevronRight
              className="tw-size-4 tw-shrink-0 tw-opacity-70"
              aria-hidden
            />
            <span className="tw-truncate tw-font-medium tw-text-foreground">
              {breadcrumbCurrent}
            </span>
          </nav>
          <div className="tw-flex tw-items-center tw-gap-2">
            <Button variant="ghost" size="icon" type="button" aria-label="Theme">
              <Moon className="tw-size-[18px]" />
            </Button>
            <Button variant="ghost" size="icon" type="button" aria-label="Notifications">
              <Bell className="tw-size-[18px]" />
            </Button>
            <div
              className="tw-ml-1 tw-flex tw-size-10 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-border tw-bg-muted tw-text-xs tw-font-semibold tw-text-muted-foreground"
              aria-hidden
            >
              SJ
            </div>
          </div>
        </header>

        <main className="tw-flex tw-flex-1 tw-flex-col tw-overflow-y-auto tw-bg-background tw-px-content-x tw-py-content-y">
          <div className="tw-mx-auto tw-flex tw-w-full tw-max-w-frame tw-flex-col tw-gap-6 tw-min-h-0 tw-flex-1">
            <div className="tw-flex tw-flex-col tw-gap-4 sm:tw-flex-row sm:tw-items-start sm:tw-justify-between">
              <div>
                <h1 className="tw-text-3xl tw-font-bold tw-tracking-tight tw-text-foreground">
                  {title}
                </h1>
                <p className="tw-mt-1 tw-max-w-2xl tw-text-sm tw-text-muted-foreground">
                  {description}
                </p>
              </div>
              {badge != null ? <div className="tw-shrink-0">{badge}</div> : null}
            </div>
            <div className="tw-flex-1 tw-min-h-0">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CorporationDirectoryShell;
