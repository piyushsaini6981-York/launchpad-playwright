import React from "react";
import { cn } from "../../lib/utils";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "info";
}

export const Alert: React.FC<AlertProps> = ({ className, variant = "info", ...props }) => (
  <div
    role="status"
    className={cn(
      "flex flex-row items-start gap-md rounded-lg border border-primary/15 bg-info px-lg py-md text-body-md text-info-foreground",
      className
    )}
    {...props}
  />
);

export const AlertTitle: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => <p className={cn("font-semibold text-foreground", className)} {...props} />;

export const AlertDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  ...props
}) => <p className={cn("text-body-md text-muted-foreground", className)} {...props} />;
