import React from "react";
import { cn } from "../../lib/utils";

export type BadgeVariant = "success" | "brand" | "secondary";

const variantClasses: Record<BadgeVariant, string> = {
  success: "bg-success/15 text-success border-success/25",
  brand: "bg-primary/10 text-primary border-primary/20",
  secondary: "bg-muted text-muted-foreground border-border",
};

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = "secondary",
  ...props
}) => (
  <span
    className={cn(
      "inline-flex items-center rounded-full border px-md py-xs text-body-sm font-medium leading-none",
      variantClasses[variant],
      className
    )}
    {...props}
  />
);
