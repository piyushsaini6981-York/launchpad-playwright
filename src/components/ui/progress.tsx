import * as React from "react";
import { cn } from "../../lib/utils";

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
}

/** Linear progress (0–100); uses design token `--primary` for the fill. */
const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, ...props }, ref) => (
    <div
      ref={ref}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn(
        "tw-relative tw-h-2 tw-w-full tw-overflow-hidden tw-rounded-full tw-bg-muted",
        className
      )}
      {...props}
    >
      <div
        className="tw-h-full tw-rounded-full tw-bg-primary tw-transition-all"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  )
);
Progress.displayName = "Progress";

export { Progress };
