import React from "react";
import { cn } from "../../lib/utils";

export const TabsList: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => (
  <div
    role="tablist"
    className={cn("flex w-full gap-xl border-b border-border", className)}
    {...props}
  />
);

export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({
  selected,
  className,
  ...props
}) => (
  <button
    role="tab"
    type="button"
    aria-selected={selected}
    className={cn(
      "-mb-px border-b-2 px-xs pb-md pt-0 text-body-md font-medium transition-colors",
      selected
        ? "border-primary text-primary"
        : "border-transparent text-muted-foreground hover:text-foreground",
      className
    )}
    {...props}
  />
);
