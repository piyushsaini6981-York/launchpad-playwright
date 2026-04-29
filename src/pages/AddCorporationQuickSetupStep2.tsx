import React from "react";
import CorporationPageHeader from "../components/common/CorporationPageHeader";
import QuickSetupStepper from "../components/common/QuickSetupStepper";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const RequiredMark: React.FC = () => (
  <span className="tw-text-destructive" aria-hidden>
    *
  </span>
);

const FieldLabel: React.FC<{
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}> = ({ htmlFor, children, required }) => (
  <Label
    htmlFor={htmlFor}
    className="tw-flex tw-items-center tw-gap-1 tw-text-foreground"
  >
    {children}
    {required ? <RequiredMark /> : null}
  </Label>
);

const AddCorporationQuickSetupStep2: React.FC = () => {
  return (
    <>
      <CorporationPageHeader />
      <div className="tw-mx-auto tw-flex tw-w-full tw-max-w-shell tw-flex-1 tw-gap-row tw-px-shell tw-py-section">
        <QuickSetupStepper />
        <div className="tw-min-w-0 tw-flex-1">
          <Card className="tw-overflow-hidden tw-shadow-sm">
            <div className="tw-border-b tw-border-border tw-bg-card tw-px-card tw-py-field">
              <div className="tw-flex tw-items-center tw-gap-4">
                <div
                  className="tw-relative tw-h-[var(--progress-track-height)] tw-min-w-0 tw-flex-1 tw-overflow-hidden tw-rounded-full tw-bg-muted"
                  role="progressbar"
                  aria-valuenow={33}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="tw-h-full tw-rounded-full tw-bg-primary"
                    style={{ width: "33%" }}
                  />
                </div>
                <span className="tw-shrink-0 tw-text-sm tw-font-medium tw-text-muted-foreground">
                  33% Complete
                </span>
              </div>
            </div>
            <CardHeader className="tw-space-y-2 tw-p-card">
              <CardTitle className="tw-text-pageTitle tw-font-semibold">
                Company Info.
              </CardTitle>
              <CardDescription className="tw-text-sm tw-font-normal tw-text-brand-info">
                Each corporation must have at least one company before
                continuing.
              </CardDescription>
            </CardHeader>
            <CardContent className="tw-space-y-row tw-p-card tw-pt-0">
              <Card className="tw-border-border tw-shadow-none">
                <CardHeader className="tw-pb-field">
                  <CardTitle>Company Details</CardTitle>
                </CardHeader>
                <CardContent className="tw-grid tw-grid-cols-1 tw-gap-row md:tw-grid-cols-2">
                  <div className="tw-space-y-field md:tw-col-span-2">
                    <FieldLabel htmlFor="company-legal-name" required>
                      Company Legal Name
                    </FieldLabel>
                    <Input
                      id="company-legal-name"
                      name="companyLegalName"
                      placeholder="e.g., Acme India Pvt Ltd"
                      autoComplete="organization"
                    />
                  </div>
                  <div className="tw-space-y-field">
                    <FieldLabel htmlFor="company-type" required>
                      Company Type
                    </FieldLabel>
                    <Select defaultValue="operating">
                      <SelectTrigger id="company-type" aria-label="Company Type">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="operating">
                          Operating Company
                        </SelectItem>
                        <SelectItem value="holding">Holding Company</SelectItem>
                        <SelectItem value="subsidiary">Subsidiary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="tw-space-y-field">
                    <FieldLabel htmlFor="office-type" required>
                      Office Type
                    </FieldLabel>
                    <Select defaultValue="regional">
                      <SelectTrigger id="office-type" aria-label="Office Type">
                        <SelectValue placeholder="Select office type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="regional">Regional</SelectItem>
                        <SelectItem value="headquarters">
                          Headquarters
                        </SelectItem>
                        <SelectItem value="branch">Branch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="tw-space-y-field">
                    <FieldLabel htmlFor="region" required>
                      Region (Data Residency)
                    </FieldLabel>
                    <Select defaultValue="na">
                      <SelectTrigger id="region" aria-label="Region">
                        <SelectValue placeholder="Select region" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="na">North America</SelectItem>
                        <SelectItem value="eu">Europe</SelectItem>
                        <SelectItem value="apac">Asia Pacific</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="tw-space-y-field">
                    <FieldLabel htmlFor="industry" required>
                      Industry
                    </FieldLabel>
                    <Select defaultValue="tech">
                      <SelectTrigger id="industry" aria-label="Industry">
                        <SelectValue placeholder="Select industry" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tech">Technology/ SaaS</SelectItem>
                        <SelectItem value="finance">Financial Services</SelectItem>
                        <SelectItem value="healthcare">Healthcare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="tw-space-y-field">
                    <FieldLabel htmlFor="state" required>
                      State/ Province
                    </FieldLabel>
                    <Select defaultValue="ca">
                      <SelectTrigger id="state" aria-label="State or Province">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ca">CA</SelectItem>
                        <SelectItem value="ny">NY</SelectItem>
                        <SelectItem value="tx">TX</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="tw-space-y-field">
                    <FieldLabel htmlFor="city" required>
                      City
                    </FieldLabel>
                    <Select defaultValue="sf">
                      <SelectTrigger id="city" aria-label="City">
                        <SelectValue placeholder="Select city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sf">San Francisco</SelectItem>
                        <SelectItem value="la">Los Angeles</SelectItem>
                        <SelectItem value="nyc">New York</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="tw-space-y-field">
                    <FieldLabel htmlFor="zip" required>
                      ZIP/ Postal Code
                    </FieldLabel>
                    <Input
                      id="zip"
                      name="zip"
                      defaultValue="100202"
                      inputMode="numeric"
                      autoComplete="postal-code"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="tw-border-border tw-shadow-none">
                <CardHeader className="tw-pb-field">
                  <CardTitle>Access Setup</CardTitle>
                </CardHeader>
                <CardContent className="tw-grid tw-grid-cols-1 tw-gap-row md:tw-grid-cols-2">
                  <div className="tw-space-y-field">
                    <FieldLabel htmlFor="admin-name" required>
                      Admin Name
                    </FieldLabel>
                    <Input
                      id="admin-name"
                      name="adminName"
                      placeholder="e.g., Martin Morgan"
                      autoComplete="name"
                    />
                  </div>
                  <div className="tw-space-y-field">
                    <FieldLabel htmlFor="admin-email" required>
                      Company Admin Email
                    </FieldLabel>
                    <Input
                      id="admin-email"
                      name="adminEmail"
                      type="email"
                      placeholder="e.g., admin@acmecare.com"
                      autoComplete="email"
                    />
                  </div>
                  <div className="tw-space-y-field">
                    <FieldLabel htmlFor="employees" required>
                      No. of Employees
                    </FieldLabel>
                    <Input
                      id="employees"
                      name="employees"
                      placeholder="e.g., 25, 50, etc."
                      inputMode="numeric"
                    />
                  </div>
                  <div className="tw-space-y-field">
                    <FieldLabel htmlFor="security-posture" required>
                      Security Posture
                    </FieldLabel>
                    <Select defaultValue="standard">
                      <SelectTrigger
                        id="security-posture"
                        aria-label="Security Posture"
                      >
                        <SelectValue placeholder="Select posture" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="standard">Standard</SelectItem>
                        <SelectItem value="elevated">Elevated</SelectItem>
                        <SelectItem value="strict">Strict</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
            <div className="tw-flex tw-flex-wrap tw-items-center tw-justify-between tw-gap-field tw-border-t tw-border-border tw-bg-card tw-px-card tw-py-4">
              <Button type="button" variant="ghost">
                Cancel
              </Button>
              <div className="tw-flex tw-flex-wrap tw-items-center tw-gap-field">
                <Button type="button" variant="secondary">
                  Previous
                </Button>
                <Button type="button">Next</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default AddCorporationQuickSetupStep2;
