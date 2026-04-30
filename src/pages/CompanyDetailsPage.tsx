import * as React from "react";
import { BadgeCheck } from "lucide-react";
import { EspraAppShell } from "../components/common/EspraAppShell";
import { EditCompanyDialog } from "../components/company/EditCompanyDialog";
import { Button } from "../components/ui/button";

/**
 * Implements the Espra corporation “Company Details / Edit Company” frame
 * (`node-id=1-10147` reference). Dialog opens by default per design screenshots.
 */
const CompanyDetailsPage: React.FC = () => {
  const [editOpen, setEditOpen] = React.useState(true);

  return (
    <EspraAppShell>
      <div className="min-h-full bg-background px-10 pb-16 pt-8">
        <div className="mx-auto max-w-[1080px]">
          <div className="mb-7 flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-[28px] font-bold tracking-[-0.02em] text-foreground">
                Company Details
              </h1>
              <p className="mt-2 max-w-[520px] text-[14px] leading-relaxed text-muted-foreground">
                Manage company information, access, and configuration for this
                entity.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                type="button"
                variant="outline"
                className="h-10 min-w-[108px] border-destructive text-destructive shadow-none hover:bg-destructive/5"
                onClick={() => setEditOpen(true)}
              >
                Suspend
              </Button>
              <Button
                type="button"
                variant="destructive"
                className="h-10 min-w-[168px] shadow-sm"
              >
                Close Corporation
              </Button>
            </div>
          </div>

          <section
            className="rounded-[12px] border border-border bg-card shadow-sm"
            aria-label="Company summary"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-[var(--spacing-section)] py-5">
              <div className="flex min-w-0 items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[11px] bg-gradient-to-br from-[#c7d6f5] to-[#8ca7e0]">
                  <BadgeCheck
                    className="h-7 w-7 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                </span>
                <div className="min-w-0">
                  <h2 className="truncate text-[18px] font-semibold text-foreground">
                    Tech Venture Digital
                  </h2>
                  <ul className="mt-3 flex flex-wrap gap-x-[18px] gap-y-2 text-[13px] text-muted-foreground">
                    <li>
                      Corporation:{" "}
                      <span className="font-medium text-foreground">
                        Apex Corp
                      </span>
                    </li>
                    <li>
                      Operating Company Region:{" "}
                      <span className="font-medium text-foreground">
                        NA
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setEditOpen(true)}
                className="shrink-0 rounded-[9px] border border-transparent px-4 py-2 text-[13px] font-semibold text-primary underline-offset-4 hover:underline"
              >
                Edit Company
              </button>
            </div>

            <div className="grid gap-px bg-border md:grid-cols-2">
              {[
                ["Primary Contact", "Marissa Stone"],
                ["Account Status", "Active"],
                ["Data Residency", "North America"],
                ["Industry", "Technology / SaaS"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex flex-col gap-2 bg-secondary px-[var(--spacing-section)] py-[22px]"
                >
                  <span className="text-[13px] font-medium text-muted-foreground">
                    {k}
                  </span>
                  <span className="text-[14px] font-semibold text-foreground">
                    {v}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <EditCompanyDialog open={editOpen} onOpenChange={setEditOpen} />
    </EspraAppShell>
  );
};

export default CompanyDetailsPage;
