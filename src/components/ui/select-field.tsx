import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

export interface SelectFieldProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <select
          ref={ref}
          className={cn(
            "flex min-h-control w-full appearance-none rounded-md border border-input bg-background py-field-py pl-field-px pr-10 text-sm text-foreground shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
          strokeWidth={2}
        />
      </div>
    );
  }
);
SelectField.displayName = "SelectField";

export { SelectField };
