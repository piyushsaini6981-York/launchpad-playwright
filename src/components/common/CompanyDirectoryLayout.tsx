import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { cn } from "../../lib/utils";
import moonUrl from "../../assets/moon.svg";
import bellUrl from "../../assets/bell.svg";

type NavItem = { label: string; to?: string };

type NavGroup = { heading: string; items: NavItem[] };

const NAV_GROUPS: NavGroup[] = [
  {
    heading: "Main",
    items: [
      { label: "Dashboard", to: "/" },
      { label: "Corporation Directory", to: "/company-directory/basic-info" },
      { label: "Company Directory" },
    ],
  },
  {
    heading: "Administration",
    items: [],
  },
  {
    heading: "Users & Access",
    items: [{ label: "User Directory" }, { label: "Company Admins" }, { label: "Team Leads" }, { label: "Roles & Permissions" }, { label: "Coaches" }],
  },
  {
    heading: "Finance",
    items: [{ label: "Billing Overview" }, { label: "Global Billing Settings" }, { label: "Promo Code Management" }],
  },
  {
    heading: "Assessments",
    items: [{ label: "Question Bank" }],
  },
  { heading: "BSPU", items: [{ label: "Learning Library" }] },
  { heading: "System", items: [{ label: "System Health" }] },
];

export interface CompanyDirectoryLayoutProps {
  breadcrumbCurrent: string;
  children: React.ReactNode;
}

export const CompanyDirectoryLayout: React.FC<CompanyDirectoryLayoutProps> = ({
  breadcrumbCurrent,
  children,
}) => {
  const location = useLocation();
  const corporationDirectoryActive = location.pathname.startsWith("/company-directory");

  return (
    <div className="box-border flex min-h-screen w-full bg-background text-foreground">
      <aside
        className="box-border flex w-sidebar shrink-0 flex-col border-r border-border bg-card text-foreground"
        aria-label="Primary navigation"
      >
        <div className="flex h-header-bar items-center border-b border-border px-lg">
          <div className="flex items-center gap-sm">
            <span className="inline-flex h-5 w-5 rounded-sm bg-primary/90" aria-hidden />
            <span className="text-heading-lg font-semibold tracking-tight text-foreground">BSPBlueprint</span>
          </div>
        </div>
        <nav className="flex flex-1 flex-col gap-lg overflow-y-auto px-md py-lg">
          {NAV_GROUPS.map((group) => (
            <div key={group.heading}>
              <p className="px-md pb-sm text-body-sm font-semibold text-muted-foreground">
                {group.heading}
              </p>
              <div className="flex flex-col gap-xs">
                {group.items.map((item) => {
                  if (item.label === "Corporation Directory" && item.to) {
                    return (
                      <NavLink
                        key={item.label}
                        to={item.to}
                        className={cn(
                          "block rounded-md px-md py-sm text-body-md transition-colors",
                          corporationDirectoryActive
                            ? "bg-accent font-medium text-foreground"
                            : "text-muted-foreground hover:bg-accent/80 hover:text-foreground"
                        )}
                      >
                        {item.label}
                      </NavLink>
                    );
                  }

                  if (item.to) {
                    return (
                      <NavLink
                        key={item.label}
                        to={item.to}
                        className={({ isActive }) =>
                          cn(
                            "block rounded-md px-md py-sm text-body-md transition-colors",
                            isActive
                              ? "bg-accent font-medium text-foreground"
                              : "text-muted-foreground hover:bg-accent/80 hover:text-foreground"
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    );
                  }

                  return (
                    <button
                      key={item.label}
                      type="button"
                      className="w-full rounded-md px-md py-sm text-left text-body-md text-muted-foreground transition-colors hover:bg-accent/80 hover:text-foreground"
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      <div className="flex min-h-screen min-w-0 flex-1 flex-col">
        <header className="box-border flex h-header-bar shrink-0 items-center justify-between border-b border-border bg-card px-lg">
          <nav className="text-body-md text-muted-foreground" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-sm">
              <li>
                <span className="text-info-foreground">Corporation Directory</span>
              </li>
              <li aria-hidden className="text-muted-foreground">
                &gt;
              </li>
              <li className="font-medium text-foreground">{breadcrumbCurrent}</li>
            </ol>
          </nav>
          <div className="flex items-center gap-md">
            <span className="inline-flex items-center rounded-full border border-border bg-background px-md py-xs text-body-sm font-medium text-muted-foreground">
              Quick Setup
            </span>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-card text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Toggle theme"
            >
              <img src={moonUrl} alt="" className="h-4 w-4" />
            </button>
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-card text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Notifications"
            >
              <img src={bellUrl} alt="" className="h-4 w-4" />
            </button>
            <div
              className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-body-sm font-semibold text-primary-foreground"
              aria-hidden
            >
              JD
            </div>
          </div>
        </header>

        <div className="box-border flex flex-1 flex-col bg-background p-lg">{children}</div>
      </div>
    </div>
  );
};
