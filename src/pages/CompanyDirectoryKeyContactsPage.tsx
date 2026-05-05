import React from "react";
import { CompanyDirectoryLayout } from "../components/common/CompanyDirectoryLayout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Select } from "../components/ui/select";
import { Input } from "../components/ui/input";
import { cn } from "../lib/utils";

const setupSteps = [
  { number: 1, title: "Basic Info.", description: "Create top-level organization", complete: true },
  { number: 2, title: "Company Info.", description: "Set up first operating unit", complete: false },
  { number: 3, title: "Confirmation", description: "Review & confirm", complete: false },
] as const;

const CompanyDirectoryKeyContactsPage: React.FC = () => {
  return (
    <CompanyDirectoryLayout breadcrumbCurrent="Add New Corporation">
      <div className="mx-auto box-border flex w-full max-w-content flex-col gap-lg">
        <div className="space-y-xs">
          <h1 className="text-heading-xl font-semibold text-foreground">Add New Corporation</h1>
          <p className="text-body-md text-muted-foreground">
            Set up a new corporation with its plan, region, and initial admin access.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-md">
          <Card className="col-span-12 h-fit p-lg lg:col-span-4">
            <div className="space-y-lg">
              {setupSteps.map((step, index) => (
                <div key={step.number} className="flex gap-md">
                  <div className="flex flex-col items-center">
                    <span
                      className={cn(
                        "inline-flex h-7 w-7 items-center justify-center rounded-full border text-body-sm font-medium",
                        step.complete
                          ? "border-primary bg-primary text-primary-foreground"
                          : step.number === 2
                            ? "border-primary text-primary"
                            : "border-border text-muted-foreground"
                      )}
                    >
                      {step.complete ? "✓" : step.number}
                    </span>
                    {index < setupSteps.length - 1 ? (
                      <span className="mt-sm h-10 w-px bg-border" aria-hidden />
                    ) : null}
                  </div>
                  <div className="pt-xs">
                    <p
                      className={cn(
                        "text-body-md font-semibold",
                        step.number === 2 ? "text-primary" : "text-info-foreground"
                      )}
                    >
                      {step.title}
                    </p>
                    <p className="text-body-md text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="col-span-12 overflow-hidden lg:col-span-8">
            <div className="border-b border-border px-lg py-md">
              <p className="text-body-sm text-muted-foreground">33% Complete</p>
              <div className="mt-sm h-1 rounded-full bg-muted">
                <div className="h-1 w-1/3 rounded-full bg-primary" />
              </div>
            </div>

            <div className="space-y-lg p-lg">
              <div className="space-y-xs">
                <h2 className="text-heading-xl font-semibold text-foreground">Company Info.</h2>
                <p className="text-body-md text-info-foreground">
                  Each corporation must have at least one company before continuing.
                </p>
              </div>

              <section className="overflow-hidden rounded-xl border border-border">
                <div className="border-b border-border px-lg py-sm text-heading-lg font-medium text-info-foreground">
                  Company Details
                </div>
                <div className="grid grid-cols-2 gap-md p-lg">
                  <div className="col-span-2 space-y-sm">
                    <Label htmlFor="company-legal-name" requiredIndicator>
                      Company Legal Name
                    </Label>
                    <Input id="company-legal-name" placeholder="e.g., Acme India Pvt Ltd" />
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="company-type" requiredIndicator>
                      Company Type
                    </Label>
                    <Select id="company-type" defaultValue="Operating Company">
                      <option>Operating Company</option>
                    </Select>
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="office-type" requiredIndicator>
                      Office Type
                    </Label>
                    <Select id="office-type" defaultValue="Regional">
                      <option>Regional</option>
                    </Select>
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="region">Region (Data Residency)</Label>
                    <Select id="region" defaultValue="North America">
                      <option>North America</option>
                    </Select>
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="industry">Industry</Label>
                    <Select id="industry" defaultValue="Technology/ SaaS">
                      <option>Technology/ SaaS</option>
                    </Select>
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="state-province" requiredIndicator>
                      State/ Province
                    </Label>
                    <Select id="state-province" defaultValue="CA">
                      <option>CA</option>
                    </Select>
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="city" requiredIndicator>
                      City
                    </Label>
                    <Select id="city" defaultValue="San Francisco">
                      <option>San Francisco</option>
                    </Select>
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="zip" requiredIndicator>
                      ZIP/ Postal Code
                    </Label>
                    <Input id="zip" defaultValue="100202" />
                  </div>
                </div>
              </section>

              <section className="overflow-hidden rounded-xl border border-border">
                <div className="border-b border-border px-lg py-sm text-heading-lg font-medium text-info-foreground">
                  Access Setup
                </div>
                <div className="grid grid-cols-2 gap-md p-lg">
                  <div className="space-y-sm">
                    <Label htmlFor="admin-name" requiredIndicator>
                      Admin Name
                    </Label>
                    <Input id="admin-name" placeholder="e.g., Martin Morgan" />
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="admin-email" requiredIndicator>
                      Company Admin Email
                    </Label>
                    <Input id="admin-email" placeholder="e.g., admin@acmecare.com" />
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="employees" requiredIndicator>
                      No. of Employees
                    </Label>
                    <Input id="employees" placeholder="e.g., 25, 50, etc." />
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="security-posture">Security Posture</Label>
                    <Input id="security-posture" defaultValue="Standard" />
                  </div>
                </div>
              </section>
            </div>

            <div className="flex items-center justify-between border-t border-border bg-card px-lg py-md">
              <Button variant="outline" className="h-10 px-lg">
                Cancel
              </Button>
              <div className="flex items-center gap-sm">
                <Button variant="outline" className="h-10 bg-muted px-lg">
                  Previous
                </Button>
                <Button className="h-10 px-xl">Next</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </CompanyDirectoryLayout>
  );
};

export default CompanyDirectoryKeyContactsPage;
