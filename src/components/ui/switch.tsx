import React from "react";
import { cn } from "../../lib/utils";

export interface SwitchProps {
  id?: string;
  checked: boolean;
  onCheckedChange: (next: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  id,
  checked,
  onCheckedChange,
  disabled,
  className,
}) => (
  <button
    id={id}
    type="button"
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    className={cn(
      "relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border border-border bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
      checked && "border-primary bg-primary",
      className
    )}
    onClick={() => {
      if (!disabled) onCheckedChange(!checked);
    }}
  >
    <span
      className={cn(
        "pointer-events-none absolute top-1/2 block h-5 w-5 -translate-y-1/2 rounded-full bg-card shadow-card transition-all",
        checked ? "right-1" : "left-1"
      )}
      aria-hidden
    />
  </button>
);
