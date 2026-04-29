import React from "react";
import { Link } from "react-router-dom";
import { Bell, ChevronRight, Moon, Zap } from "lucide-react";
import { Button } from "../ui/button";

const CorporationPageHeader: React.FC = () => {
  return (
    <header className="tw-border-b tw-border-border tw-bg-card">
      <div className="tw-mx-auto tw-flex tw-max-w-shell tw-flex-col tw-gap-4 tw-px-shell tw-py-header">
        <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-4">
          <nav
            className="tw-flex tw-flex-wrap tw-items-center tw-gap-1 tw-text-sm tw-text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link
              to="/corporation-directory"
              className="tw-transition-colors hover:tw-text-foreground"
            >
              Corporation Directory
            </Link>
            <ChevronRight className="tw-size-4 tw-shrink-0 tw-text-muted-foreground" />
            <span className="tw-font-medium tw-text-foreground">
              Add New Corporation
            </span>
          </nav>
          <div className="tw-flex tw-items-center tw-gap-2">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="tw-text-muted-foreground"
              aria-label="Theme"
            >
              <Moon className="tw-size-5" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="tw-text-muted-foreground"
              aria-label="Notifications"
            >
              <Bell className="tw-size-5" />
            </Button>
            <button
              type="button"
              className="tw-flex tw-size-9 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-border tw-bg-muted tw-text-sm tw-font-medium tw-text-foreground"
              aria-label="Account menu"
            >
              A
            </button>
          </div>
        </div>
        <div className="tw-flex tw-flex-wrap tw-items-start tw-justify-between tw-gap-4">
          <div className="tw-min-w-0 tw-space-y-2">
            <h1 className="tw-text-pageTitle tw-font-semibold tw-text-foreground">
              Add New Corporation
            </h1>
            <p className="tw-max-w-3xl tw-text-pageSubtitle tw-text-muted-foreground">
              Set up a new corporation with its plan, region, and initial admin
              access.
            </p>
          </div>
          <Button
            type="button"
            className="tw-shrink-0 tw-gap-2 tw-bg-primary tw-text-primary-foreground"
          >
            <Zap className="tw-size-4" aria-hidden />
            Quick Setup
          </Button>
        </div>
      </div>
    </header>
  );
};

export default CorporationPageHeader;
