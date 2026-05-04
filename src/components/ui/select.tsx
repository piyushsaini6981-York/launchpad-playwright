import React from "react";
import { cn } from "../../lib/utils";
import chevronDownUrl from "../../assets/chevron-down.svg";

export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <div className="relative w-full">
      <select
        ref={ref}
        className={cn(
          "h-10 w-full appearance-none rounded-lg border border-input bg-card py-sm pl-md pr-2xl text-body-md text-foreground shadow-card outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <span className="pointer-events-none absolute right-md top-1/2 flex h-4 w-4 -translate-y-1/2 items-center justify-center text-muted-foreground">
        <img src={chevronDownUrl} alt="" className="h-4 w-4" aria-hidden />
      </span>
    </div>
  )
);
Select.displayName = "Select";
