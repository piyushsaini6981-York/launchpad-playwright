import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { FormSelect } from "../ui/select";

const COMPANY_TYPES = [
  { value: "operating", label: "Operating Company" },
  { value: "holding", label: "Holding Company" },
];

const OFFICE_TYPES = [
  { value: "regional", label: "Regional" },
  { value: "headquarters", label: "Headquarters" },
];

const REGIONS = [
  { value: "na", label: "North America" },
  { value: "eu", label: "Europe" },
  { value: "apac", label: "APAC" },
];

const INDUSTRIES = [
  { value: "tech", label: "Technology/ SaaS" },
  { value: "finance", label: "Financial Services" },
];

const STATES = [
  { value: "tx", label: "Texas" },
  { value: "ca", label: "California" },
];

const CITIES_PLANO = [
  { value: "plano", label: "Plano" },
  { value: "dallas", label: "Dallas" },
];

const TIME_ZONES = [
  { value: "est", label: "EST (Eastern Time)" },
  { value: "cst", label: "CST (Central Time)" },
];

export type EditCompanyDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function ReqLabel({
  htmlFor,
  children,
}: {
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <Label
      htmlFor={htmlFor}
      className="espra-required flex items-baseline gap-0 text-muted-foreground"
    >
      {children}
    </Label>
  );
}

export function EditCompanyDialog({
  open,
  onOpenChange,
}: EditCompanyDialogProps) {
  const [legalName, setLegalName] = React.useState("Tech Venture Digital");
  const [companyType, setCompanyType] = React.useState("operating");
  const [officeType, setOfficeType] = React.useState("regional");
  const [region, setRegion] = React.useState("na");
  const [industry, setIndustry] = React.useState("tech");
  const [state, setState] = React.useState("tx");
  const [city, setCity] = React.useState("plano");
  const [zip, setZip] = React.useState("75024");
  const [timezone, setTimezone] = React.useState("est");
  const [adminName, setAdminName] = React.useState("Martin Morgan");
  const [adminEmail, setAdminEmail] = React.useState("martin_morgan@email.com");
  const [employees, setEmployees] = React.useState("50");

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="p-0" aria-describedby="edit-company-desc">
        <div className="flex max-h-[min(792px,90vh)] flex-col rounded-lg bg-card text-foreground">
          <DialogHeader className="shrink-0 border-b border-border px-[var(--spacing-section)] pb-[18px] pt-[26px] md:pb-5 md:pr-14">
            <DialogTitle>Edit Company</DialogTitle>
            <DialogDescription id="edit-company-desc">
              Modify company details
            </DialogDescription>
          </DialogHeader>

          <div
            className="min-h-0 flex-1 space-y-[var(--spacing-section)] overflow-y-auto px-[var(--spacing-section)] py-[var(--spacing-section)]"
            style={{
              scrollbarGutter: "stable",
            }}
          >
            {/* Company Info. */}
            <section aria-labelledby="company-info-heading" className="space-y-[var(--spacing-section)]">
              <h3
                id="company-info-heading"
                className="text-[15px] font-semibold tracking-tight text-foreground"
              >
                Company Info.
              </h3>

              <div className="space-y-[var(--spacing-form-row)]">
                <div className="space-y-[9px]">
                  <ReqLabel htmlFor="legal-name">Company Legal Name</ReqLabel>
                  <Input
                    id="legal-name"
                    autoComplete="organization"
                    value={legalName}
                    onChange={(e) => setLegalName(e.target.value)}
                  />
                </div>

                <div className="espra-field-grid">
                  <div className="space-y-[9px]">
                    <ReqLabel htmlFor="company-type">Company Type</ReqLabel>
                    <FormSelect
                      id="company-type"
                      value={companyType}
                      onValueChange={setCompanyType}
                      aria-label="Company Type"
                      options={COMPANY_TYPES}
                    />
                  </div>
                  <div className="space-y-[9px]">
                    <ReqLabel htmlFor="office-type">Office Type</ReqLabel>
                    <FormSelect
                      id="office-type"
                      value={officeType}
                      onValueChange={setOfficeType}
                      aria-label="Office Type"
                      options={OFFICE_TYPES}
                    />
                  </div>
                  <div className="space-y-[9px]">
                    <ReqLabel htmlFor="region-dd">
                      Region (Data Residency)
                    </ReqLabel>
                    <FormSelect
                      id="region-dd"
                      value={region}
                      onValueChange={setRegion}
                      aria-label="Region Data Residency"
                      options={REGIONS}
                    />
                  </div>
                  <div className="space-y-[9px]">
                    <ReqLabel htmlFor="industry-dd">Industry</ReqLabel>
                    <FormSelect
                      id="industry-dd"
                      value={industry}
                      onValueChange={setIndustry}
                      aria-label="Industry"
                      options={INDUSTRIES}
                    />
                  </div>
                  <div className="space-y-[9px]">
                    <ReqLabel htmlFor="state-dd">State/Province</ReqLabel>
                    <FormSelect
                      id="state-dd"
                      value={state}
                      onValueChange={setState}
                      aria-label="State or Province"
                      options={STATES}
                    />
                  </div>
                  <div className="space-y-[9px]">
                    <ReqLabel htmlFor="city-dd">City</ReqLabel>
                    <FormSelect
                      id="city-dd"
                      value={city}
                      onValueChange={setCity}
                      aria-label="City"
                      options={CITIES_PLANO}
                    />
                  </div>
                  <div className="space-y-[9px] md:col-span-1">
                    <ReqLabel htmlFor="zip">ZIP/Postal Code</ReqLabel>
                    <Input
                      id="zip"
                      autoComplete="postal-code"
                      inputMode="numeric"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                    />
                  </div>
                  <div className="space-y-[9px]">
                    <ReqLabel htmlFor="tz-dd">Time Zone</ReqLabel>
                    <FormSelect
                      id="tz-dd"
                      value={timezone}
                      onValueChange={setTimezone}
                      aria-label="Time Zone"
                      options={TIME_ZONES}
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Access Setup */}
            <section aria-labelledby="access-setup-heading" className="space-y-[var(--spacing-section)] pb-2">
              <h3
                id="access-setup-heading"
                className="text-[15px] font-semibold tracking-tight text-foreground"
              >
                Access Setup
              </h3>

              <div className="espra-field-grid">
                <div className="space-y-[9px]">
                  <ReqLabel htmlFor="admin-name">Admin Name</ReqLabel>
                  <Input
                    id="admin-name"
                    autoComplete="name"
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                  />
                </div>
                <div className="space-y-[9px]">
                  <ReqLabel htmlFor="admin-email">Company Admin Email</ReqLabel>
                  <Input
                    id="admin-email"
                    type="email"
                    autoComplete="email"
                    value={adminEmail}
                    onChange={(e) => setAdminEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-[9px]">
                  <ReqLabel htmlFor="employees-count">No. of Employees</ReqLabel>
                  <Input
                    id="employees-count"
                    inputMode="numeric"
                    value={employees}
                    onChange={(e) => setEmployees(e.target.value)}
                  />
                </div>
                <div className="space-y-[9px]">
                  <span className="text-sm font-medium text-muted-foreground">
                    Security Posture
                  </span>
                  <div
                    role="note"
                    aria-label="Security posture"
                    className="flex h-[44px] items-center rounded-md border border-border bg-accent px-[14px] text-sm font-semibold text-accent-foreground shadow-sm"
                    style={{ paddingInline: "calc(var(--spacing-section) - 6px)" }}
                  >
                    Standard
                  </div>
                </div>
              </div>
            </section>
          </div>

          <DialogFooter className="shrink-0 border-t border-border px-[var(--spacing-section)] py-[18px] pt-[17px]">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="button"
              className="min-w-[148px]"
              onClick={() => onOpenChange(false)}
            >
              Save &amp; Update
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
