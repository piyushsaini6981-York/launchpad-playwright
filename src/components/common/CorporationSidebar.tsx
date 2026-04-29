import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Users,
  Shield,
  FileText,
  Settings,
  Briefcase,
  Layers,
  UserCog,
  Database,
  Globe,
} from "lucide-react";
import { cn } from "../../lib/utils";

type NavItem =
  | { type: "route"; to: string; label: string; icon: React.ElementType }
  | { type: "placeholder"; label: string; icon: React.ElementType };

type NavGroup = { heading: string; items: NavItem[] };

const groups: NavGroup[] = [
  {
    heading: "Main",
    items: [
      { type: "placeholder", label: "Dashboard", icon: LayoutDashboard },
      { type: "placeholder", label: "Operations", icon: Briefcase },
    ],
  },
  {
    heading: "Administration",
    items: [
      {
        type: "route",
        to: "/corporation-directory/add",
        label: "Corporation Directory",
        icon: Building2,
      },
      { type: "placeholder", label: "Compliance", icon: FileText },
      { type: "placeholder", label: "Policies", icon: Shield },
    ],
  },
  {
    heading: "Users & Access",
    items: [
      { type: "placeholder", label: "Directory", icon: Users },
      { type: "placeholder", label: "Roles", icon: UserCog },
    ],
  },
  {
    heading: "Data & Integrations",
    items: [
      { type: "placeholder", label: "Catalog", icon: Database },
      { type: "placeholder", label: "Regions", icon: Globe },
      { type: "placeholder", label: "Modules", icon: Layers },
    ],
  },
  {
    heading: "System",
    items: [{ type: "placeholder", label: "Settings", icon: Settings }],
  },
];

const itemClass = (isActive: boolean) =>
  cn(
    "tw-flex tw-items-center tw-gap-3 tw-rounded-md tw-px-3 tw-py-2 tw-text-sm tw-transition-colors",
    isActive
      ? "tw-bg-muted tw-font-medium tw-text-foreground tw-border-r-4 tw-border-accent tw-pr-2"
      : "tw-border-r-4 tw-border-transparent tw-text-sidebar-foreground hover:tw-bg-muted/60"
  );

const CorporationSidebar: React.FC = () => {
  return (
    <aside
      className="tw-sticky tw-top-0 tw-flex tw-h-screen tw-w-sidebar tw-shrink-0 tw-flex-col tw-border-r tw-border-border tw-bg-sidebar tw-text-sidebar-foreground"
      aria-label="Primary navigation"
    >
      <div className="tw-flex tw-h-header tw-items-center tw-px-4 tw-border-b tw-border-border">
        <div className="tw-flex tw-items-baseline tw-gap-1 tw-font-semibold tw-tracking-tight">
          <span className="tw-text-lg tw-text-foreground">BSP</span>
          <span className="tw-text-lg tw-font-normal tw-text-muted-foreground">
            Blueprint
          </span>
        </div>
      </div>
      <nav className="tw-flex-1 tw-overflow-y-auto tw-py-4">
        {groups.map((group) => (
          <div key={group.heading} className="tw-mb-6 tw-px-2">
            <p className="tw-mb-2 tw-px-3 tw-text-xs tw-font-semibold tw-uppercase tw-tracking-wide tw-text-muted-foreground">
              {group.heading}
            </p>
            <ul className="tw-space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;
                const key = `${group.heading}-${item.label}`;
                if (item.type === "route") {
                  return (
                    <li key={key}>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) => itemClass(isActive)}
                        end
                      >
                        <Icon
                          className="tw-size-[1.125rem] tw-shrink-0 tw-text-muted-foreground"
                          aria-hidden
                        />
                        {item.label}
                      </NavLink>
                    </li>
                  );
                }
                return (
                  <li key={key}>
                    <a
                      href="#"
                      className={itemClass(false)}
                      onClick={(e) => e.preventDefault()}
                    >
                      <Icon
                        className="tw-size-[1.125rem] tw-shrink-0 tw-text-muted-foreground"
                        aria-hidden
                      />
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default CorporationSidebar;
