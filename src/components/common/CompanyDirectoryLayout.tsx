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
      { label: "Company Directory", to: "/company-directory/key-contacts" },
      { label: "Programs" },
      { label: "Projects" },
    ],
  },
  {
    heading: "Administration",
    items: [{ label: "Settings" }, { label: "Reports" }],
  },
  {
    heading: "Users & Access",
    items: [{ label: "Users" }, { label: "Roles" }],
  },
  {
    heading: "Finance",
    items: [{ label: "Billing" }, { label: "Invoices" }],
  },
  {
    heading: "Assessments",
    items: [{ label: "Templates" }, { label: "Runs" }],
  },
  { heading: "BSPU", items: [{ label: "Overview" }, { label: "Tasks" }] },
  { heading: "System", items: [{ label: "Audit Log" }, { label: "Integrations" }] },
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
  const companyDirectoryActive = location.pathname.startsWith("/company-directory");

  return (
    <div className="box-border flex min-h-screen w-full bg-background text-foreground">
      <aside
        className="box-border flex w-sidebar shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground"
        aria-label="Primary navigation"
      >
        <div className="flex h-header-bar items-center border-b border-sidebar-border px-lg">
          <span className="text-heading-lg font-semibold tracking-tight">Logoipsum</span>
        </div>
        <nav className="flex flex-1 flex-col gap-lg overflow-y-auto px-md py-lg">
          {NAV_GROUPS.map((group) => (
            <div key={group.heading}>
              <p className="px-md pb-sm text-body-sm font-semibold uppercase tracking-wide text-sidebar-muted-foreground">
                {group.heading}
              </p>
              <div className="flex flex-col gap-xs">
                {group.items.map((item) => {
                  if (item.label === "Company Directory" && item.to) {
                    return (
                      <NavLink
                        key={item.label}
                        to={item.to}
                        className={cn(
                          "block rounded-md px-md py-sm text-body-sm transition-colors",
                          companyDirectoryActive
                            ? "bg-sidebar-accent font-medium text-sidebar-foreground"
                            : "text-sidebar-muted-foreground hover:bg-sidebar-accent/80 hover:text-sidebar-foreground"
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
                            "block rounded-md px-md py-sm text-body-sm transition-colors",
                            isActive
                              ? "bg-sidebar-accent font-medium text-sidebar-foreground"
                              : "text-sidebar-muted-foreground hover:bg-sidebar-accent/80 hover:text-sidebar-foreground"
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
                      className="w-full rounded-md px-md py-sm text-left text-body-sm text-sidebar-muted-foreground transition-colors hover:bg-sidebar-accent/80 hover:text-sidebar-foreground"
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
                <span className="text-foreground/80">Company Directory</span>
              </li>
              <li aria-hidden className="text-muted-foreground">
                &gt;
              </li>
              <li className="font-medium text-foreground">{breadcrumbCurrent}</li>
            </ol>
          </nav>
          <div className="flex items-center gap-md">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-card hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Toggle theme"
            >
              <img src={moonUrl} alt="" className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-card hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Notifications"
            >
              <img src={bellUrl} alt="" className="h-5 w-5" />
            </button>
            <div
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-body-md font-semibold text-primary-foreground"
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
