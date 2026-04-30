import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

export interface FormSelectProps
  extends Omit<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    "onChange" | "children"
  > {
  options: readonly { readonly value: string; readonly label: string }[];
  onValueChange?: (value: string) => void;
  onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}

const FormSelect = React.forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ className, options, onValueChange, onChange, disabled, ...props }, ref) => {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      onChange?.(event);
      onValueChange?.(event.target.value);
    };

    return (
      <div className={cn("relative w-full", className)}>
        <select
          ref={ref}
          disabled={disabled}
          onChange={handleChange}
          className="espra-select-trigger w-full appearance-none cursor-pointer disabled:opacity-60 pr-11"
          {...props}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown
          strokeWidth={1.75}
          className="pointer-events-none absolute right-[14px] top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
      </div>
    );
  }
);

FormSelect.displayName = "FormSelect";

export { FormSelect };
