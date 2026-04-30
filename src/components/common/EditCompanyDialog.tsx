import React from "react";
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
import { SelectField } from "../ui/select-field";
import { Button } from "../ui/button";

type EditCompanyDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <Label htmlFor={id} requiredMark={required}>
        {label}
      </Label>
      {children}
    </div>
  );
}

export const EditCompanyDialog: React.FC<EditCompanyDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 overflow-hidden p-0 sm:rounded-lg">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="p-dialog-pad pb-0 pr-14">
            <DialogHeader className="space-y-1 p-0">
              <DialogTitle>Edit Company</DialogTitle>
              <DialogDescription>
                Modify company details
              </DialogDescription>
            </DialogHeader>
          </div>

          <div className="space-y-section-gap px-dialog-pad py-dialog-gap">
            <section className="space-y-form-row">
              <h3 className="text-sm font-semibold text-foreground">
                Company Info.
              </h3>
              <Field id="company-legal-name" label="Company Legal Name" required>
                <Input
                  id="company-legal-name"
                  name="companyLegalName"
                  defaultValue="Tech Venture Digital"
                  autoComplete="organization"
                />
              </Field>

              <div className="grid grid-cols-1 gap-x-form-col gap-y-form-row md:grid-cols-2">
                <Field id="company-type" label="Company Type" required>
                  <SelectField
                    id="company-type"
                    name="companyType"
                    defaultValue="operating"
                    aria-label="Company Type"
                  >
                    <option value="operating">Operating Company</option>
                    <option value="holding">Holding Company</option>
                  </SelectField>
                </Field>
                <Field id="office-type" label="Office Type" required>
                  <SelectField
                    id="office-type"
                    name="officeType"
                    defaultValue="regional"
                    aria-label="Office Type"
                  >
                    <option value="regional">Regional</option>
                    <option value="hq">Headquarters</option>
                  </SelectField>
                </Field>
                <Field id="region" label="Region (Data Residency)">
                  <SelectField
                    id="region"
                    name="region"
                    defaultValue="na"
                    aria-label="Region (Data Residency)"
                  >
                    <option value="na">North America</option>
                    <option value="eu">Europe</option>
                  </SelectField>
                </Field>
                <Field id="industry" label="Industry">
                  <SelectField
                    id="industry"
                    name="industry"
                    defaultValue="tech"
                    aria-label="Industry"
                  >
                    <option value="tech">Technology/ SaaS</option>
                    <option value="finance">Finance</option>
                  </SelectField>
                </Field>
                <Field id="state" label="State/ Province">
                  <SelectField
                    id="state"
                    name="state"
                    defaultValue="tx"
                    aria-label="State or Province"
                  >
                    <option value="tx">Texas</option>
                    <option value="ca">California</option>
                  </SelectField>
                </Field>
                <Field id="city" label="City">
                  <SelectField
                    id="city"
                    name="city"
                    defaultValue="plano"
                    aria-label="City"
                  >
                    <option value="plano">Plano</option>
                    <option value="dallas">Dallas</option>
                  </SelectField>
                </Field>
                <Field id="zip" label="ZIP/ Postal Code">
                  <Input
                    id="zip"
                    name="zip"
                    defaultValue="75024"
                    inputMode="numeric"
                  />
                </Field>
                <Field id="time-zone" label="Time Zone" required>
                  <SelectField
                    id="time-zone"
                    name="timeZone"
                    defaultValue="est"
                    aria-label="Time Zone"
                  >
                    <option value="est">EST (Eastern Time)</option>
                    <option value="cst">CST (Central Time)</option>
                  </SelectField>
                </Field>
              </div>
            </section>

            <section className="space-y-form-row border-t border-border pt-section-gap">
              <h3 className="text-sm font-semibold text-foreground">
                Access Setup
              </h3>
              <div className="grid grid-cols-1 gap-x-form-col gap-y-form-row md:grid-cols-2">
                <Field id="admin-name" label="Admin Name" required>
                  <Input
                    id="admin-name"
                    name="adminName"
                    defaultValue="Martin Morgan"
                    autoComplete="name"
                  />
                </Field>
                <Field id="admin-email" label="Company Admin Email" required>
                  <Input
                    id="admin-email"
                    name="adminEmail"
                    type="email"
                    defaultValue="martin_morgan@email.com"
                    autoComplete="email"
                  />
                </Field>
                <Field id="employees" label="No. of Employees" required>
                  <Input
                    id="employees"
                    name="employees"
                    defaultValue="50"
                    inputMode="numeric"
                  />
                </Field>
                <Field id="security-posture" label="Security Posture">
                  <SelectField
                    id="security-posture"
                    name="securityPosture"
                    defaultValue="standard"
                    aria-label="Security Posture"
                  >
                    <option value="standard">Standard</option>
                    <option value="elevated">Elevated</option>
                  </SelectField>
                </Field>
              </div>
            </section>
          </div>

          <div className="border-t border-border px-dialog-pad py-dialog-gap">
            <DialogFooter className="flex flex-row flex-wrap justify-end gap-form-col">
              <Button
                type="button"
                variant="outline"
                className="min-w-[104px]"
                onClick={() => onOpenChange(false)}
              >
                Cancel
              </Button>
              <Button type="submit" className="min-w-[144px]">
                Save &amp; Update
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
