import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { ReactComponent as ArrowLeftIcon } from "../../assets/arrow-left.svg";
import { ReactComponent as TrashIcon } from "../../assets/trash.svg";

export const COMPANY_DIRECTORY_TAB_ROUTES = [
  { to: "/company-directory/basic-info", label: "Basic Info." },
  { to: "/company-directory/key-contacts", label: "Key Contacts" },
  { to: "/company-directory/plan-seats", label: "Plan & Seats" },
  { to: "/company-directory/configuration", label: "Configuration" },
] as const;

export const CompanyDirectoryEditFrame: React.FC = () => {
  return (
    <>
      <div className="flex flex-wrap items-start justify-between gap-md">
        <div className="flex min-w-0 flex-1 flex-wrap items-center gap-md">
          <Button variant="outline" className="h-9 shrink-0 px-md py-sm text-body-md font-normal">
            <ArrowLeftIcon className="mr-sm h-5 w-5 shrink-0 text-foreground" aria-hidden />
            Back
          </Button>
          <h1 className="text-heading-xl font-semibold text-foreground">New York HQ</h1>
          <div className="flex flex-wrap items-center gap-sm">
            <Badge variant="success">Assigned</Badge>
            <Badge variant="brand">Enterprise</Badge>
          </div>
        </div>
        <Button variant="destructive" className="h-9 shrink-0 px-md py-sm text-body-md font-medium">
          <TrashIcon className="mr-sm h-[18px] w-[18px] shrink-0 text-destructive" aria-hidden />
          Delete
        </Button>
      </div>

      <nav
        className="flex w-full flex-wrap gap-xs rounded-lg bg-muted p-xs"
        aria-label="Company location sections"
      >
        {COMPANY_DIRECTORY_TAB_ROUTES.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              cn(
                "rounded-md border px-md py-sm text-body-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                isActive
                  ? "border-primary bg-card text-primary shadow-card"
                  : "border-transparent bg-transparent text-muted-foreground hover:text-foreground"
              )
            }
            end
          >
            {tab.label}
          </NavLink>
        ))}
      </nav>
    </>
  );
};
