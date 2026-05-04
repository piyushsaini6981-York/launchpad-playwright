import React from "react";
import { cn } from "../../lib/utils";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  requiredIndicator?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  className,
  children,
  requiredIndicator,
  ...props
}) => (
  <label className={cn("text-body-md font-medium text-foreground", className)} {...props}>
    {requiredIndicator ? (
      <>
        <span className="text-destructive" aria-hidden="true">
          *
        </span>{" "}
      </>
    ) : null}
    {children}
  </label>
);
