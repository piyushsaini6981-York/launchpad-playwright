import React from "react";
import { Check } from "lucide-react";
import { cn } from "../../lib/utils";
import { Card, CardContent } from "../ui/card";

type Step = {
  id: number;
  title: string;
  state: "complete" | "current" | "upcoming";
};

const steps: Step[] = [
  { id: 1, title: "Basic Info.", state: "complete" },
  { id: 2, title: "Company Info.", state: "current" },
  { id: 3, title: "Confirmation", state: "upcoming" },
];

const QuickSetupStepper: React.FC = () => {
  return (
    <Card className="tw-h-fit tw-w-stepper tw-shrink-0 tw-shadow-sm">
      <CardContent className="tw-p-card">
        <ol className="tw-relative tw-space-y-0">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            return (
              <li key={step.id} className="tw-relative tw-flex tw-gap-3">
                {!isLast ? (
                  <span
                    className="tw-absolute tw-left-[calc(var(--step-indicator-size)/2-var(--step-connector-width)/2)] tw-top-[var(--step-indicator-size)] tw-bottom-0 tw-w-[var(--step-connector-width)] tw-bg-border"
                    aria-hidden
                  />
                ) : null}
                <div
                  className={cn(
                    "tw-relative tw-z-[1] tw-flex tw-size-[var(--step-indicator-size)] tw-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-text-sm tw-font-semibold",
                    step.state === "complete" &&
                      "tw-border-primary tw-bg-primary tw-text-primary-foreground",
                    step.state === "current" &&
                      "tw-border-primary tw-bg-background tw-text-primary",
                    step.state === "upcoming" &&
                      "tw-border-muted-foreground/40 tw-bg-background tw-text-muted-foreground"
                  )}
                  aria-current={step.state === "current" ? "step" : undefined}
                >
                  {step.state === "complete" ? (
                    <Check className="tw-size-4" strokeWidth={2.5} />
                  ) : (
                    step.id
                  )}
                </div>
                <div
                  className={cn(
                    "tw-pt-0.5",
                    !isLast ? "tw-pb-6" : "tw-pb-0"
                  )}
                >
                  <p
                    className={cn(
                      "tw-text-sm tw-font-medium tw-leading-tight",
                      step.state === "current" && "tw-text-primary",
                      step.state === "complete" && "tw-text-foreground",
                      step.state === "upcoming" && "tw-text-muted-foreground"
                    )}
                  >
                    {step.title}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </CardContent>
    </Card>
  );
};

export default QuickSetupStepper;
