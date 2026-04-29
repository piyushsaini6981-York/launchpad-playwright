import React, { useState } from "react";
import { Check, Zap } from "lucide-react";
import CorporationDirectoryShell from "../../components/common/CorporationDirectoryShell";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Progress } from "../../components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
const Req = () => (
  <span className="tw-text-destructive" aria-hidden>
    {" "}
    *
  </span>
);

/** Figma node 1:10380 — “Quick setup – Step 2 / Company Info.” (1440×1134 reference). */
const AddCorporationQuickSetupStep2: React.FC = () => {
  const [companyType, setCompanyType] = useState("Operating Company");
  const [officeType, setOfficeType] = useState("Regional");
  const [region, setRegion] = useState("North America");
  const [industry, setIndustry] = useState("Technology/SaaS");
  const [stateProv, setStateProv] = useState("CA");
  const [city, setCity] = useState("San Francisco");
  const [employees, setEmployees] = useState("");
  const [securityPosture, setSecurityPosture] = useState("Standard");

  return (
    <CorporationDirectoryShell
      breadcrumbCurrent="Add New Corporation"
      title="Add New Corporation"
      description="Set up a new corporation with its plan, region, and initial admin access"
      badge={
        <Badge
          variant="brand"
          className="tw-h-9 tw-rounded-md tw-border tw-border-primary/20 tw-bg-secondary tw-pl-3 tw-pr-3 tw-text-primary"
        >
          <Zap className="tw-size-3.5" aria-hidden />
          Quick Setup
        </Badge>
      }
    >
      <div className="tw-flex tw-min-h-frame tw-flex-col tw-gap-section lg:tw-flex-row lg:tw-items-start">
        {/* Stepper — node column */}
        <Card className="tw-w-full tw-shrink-0 tw-border-border lg:tw-w-[280px]">
          <CardContent className="tw-p-6">
            <ol className="tw-relative tw-space-y-0">
              <li className="tw-flex tw-gap-4">
                <div className="tw-flex tw-flex-col tw-items-center">
                  <div className="tw-flex tw-size-9 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-bg-primary tw-text-primary-foreground tw-ring-4 tw-ring-card">
                    <Check className="tw-size-[18px]" strokeWidth={3} aria-hidden />
                  </div>
                  <div
                    className="tw-mt-2 tw-w-px tw-flex-1 tw-min-h-[44px] tw-bg-border"
                    aria-hidden
                  />
                </div>
                <div className="tw-pb-8 tw-pt-0.5">
                  <p className="tw-text-sm tw-font-semibold tw-text-foreground">
                    Basic Info.
                  </p>
                  <p className="tw-text-xs tw-text-muted-foreground tw-mt-0.5">
                    Corporation basics
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-gap-4">
                <div className="tw-flex tw-flex-col tw-items-center">
                  <div className="tw-flex tw-size-9 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-border-2 tw-border-primary tw-bg-card tw-text-sm tw-font-bold tw-text-primary tw-ring-4 tw-ring-card">
                    2
                  </div>
                  <div
                    className="tw-mt-2 tw-w-px tw-flex-1 tw-min-h-[44px] tw-bg-border"
                    aria-hidden
                  />
                </div>
                <div className="tw-pb-8 tw-pt-0.5">
                  <p className="tw-text-sm tw-font-semibold tw-text-primary">
                    Company Info.
                  </p>
                  <p className="tw-text-xs tw-text-muted-foreground tw-mt-0.5 tw-leading-snug">
                    Companies & admins
                  </p>
                </div>
              </li>
              <li className="tw-flex tw-gap-4">
                <div className="tw-flex tw-flex-col tw-items-center">
                  <div className="tw-flex tw-size-9 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-border tw-bg-card tw-text-sm tw-font-semibold tw-text-muted-foreground">
                    3
                  </div>
                </div>
                <div className="tw-pb-0 tw-pt-0.5">
                  <p className="tw-text-sm tw-font-medium tw-text-muted-foreground">
                    Confirmation
                  </p>
                  <p className="tw-text-xs tw-text-muted-foreground tw-mt-0.5 tw-opacity-80">
                    Review & submit
                  </p>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Form column */}
        <Card className="tw-min-w-0 tw-flex-1 tw-border-border">
          <CardHeader className="tw-space-y-4 tw-border-b tw-border-border tw-bg-card tw-p-6 tw-pb-5">
            <div className="tw-space-y-2">
              <p className="tw-text-xs tw-font-medium tw-text-muted-foreground">
                33% Complete
              </p>
              <Progress value={33} className="tw-h-1.5" />
            </div>
            <div>
              <CardTitle className="tw-text-xl tw-text-foreground">
                Company Info.
              </CardTitle>
              <p className="tw-mt-1.5 tw-text-sm tw-leading-relaxed tw-text-accent tw-font-medium">
                Each corporation must have at least one company before continuing.
              </p>
            </div>
          </CardHeader>
          <CardContent className="tw-space-y-section tw-p-6">
            <section
              className="tw-rounded-lg tw-border tw-border-border tw-bg-card tw-p-5"
              aria-labelledby="company-details-heading"
            >
              <h2
                id="company-details-heading"
                className="tw-mb-4 tw-text-sm tw-font-semibold tw-text-foreground"
              >
                Company Details
              </h2>
              <div className="tw-flex tw-flex-col tw-gap-field">
                <div className="tw-space-y-2">
                  <Label htmlFor="legal-name">
                    Company Legal Name
                    <Req />
                  </Label>
                  <Input
                    id="legal-name"
                    name="companyLegalName"
                    placeholder="e.g., Acme India Pvt Ltd"
                    autoComplete="organization"
                  />
                </div>
                <div className="tw-grid tw-grid-cols-1 tw-gap-field md:tw-grid-cols-2">
                  <div className="tw-space-y-2">
                    <Label id="company-type-label">
                      Company Type
                      <Req />
                    </Label>
                    <Select value={companyType} onValueChange={setCompanyType}>
                      <SelectTrigger aria-labelledby="company-type-label">
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Operating Company">
                          Operating Company
                        </SelectItem>
                        <SelectItem value="Holding Company">
                          Holding Company
                        </SelectItem>
                        <SelectItem value="Subsidiary">Subsidiary</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="tw-space-y-2">
                    <Label id="office-type-label">
                      Office Type
                      <Req />
                    </Label>
                    <Select value={officeType} onValueChange={setOfficeType}>
                      <SelectTrigger aria-labelledby="office-type-label">
                        <SelectValue placeholder="Select office type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Regional">Regional</SelectItem>
                        <SelectItem value="Headquarters">Headquarters</SelectItem>
                        <SelectItem value="Branch">Branch</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="tw-grid tw-grid-cols-1 tw-gap-field md:tw-grid-cols-2">
                  <div className="tw-space-y-2">
                    <Label id="region-label">
                      Region (Data Residency)
                      <Req />
                    </Label>
                    <Select value={region} onValueChange={setRegion}>
                      <SelectTrigger aria-labelledby="region-label">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="North America">North America</SelectItem>
                        <SelectItem value="Europe">Europe</SelectItem>
                        <SelectItem value="Asia Pacific">Asia Pacific</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="tw-space-y-2">
                    <Label id="industry-label">
                      Industry
                      <Req />
                    </Label>
                    <Select value={industry} onValueChange={setIndustry}>
                      <SelectTrigger aria-labelledby="industry-label">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Technology/SaaS">Technology/SaaS</SelectItem>
                        <SelectItem value="Finance">Finance</SelectItem>
                        <SelectItem value="Healthcare">Healthcare</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="tw-grid tw-grid-cols-1 tw-gap-field md:tw-grid-cols-2">
                  <div className="tw-space-y-2">
                    <Label id="state-label">
                      State/Province
                      <Req />
                    </Label>
                    <Select value={stateProv} onValueChange={setStateProv}>
                      <SelectTrigger aria-labelledby="state-label">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CA">CA</SelectItem>
                        <SelectItem value="NY">NY</SelectItem>
                        <SelectItem value="TX">TX</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="tw-space-y-2">
                    <Label id="city-label">
                      City
                      <Req />
                    </Label>
                    <Select value={city} onValueChange={setCity}>
                      <SelectTrigger aria-labelledby="city-label">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="San Francisco">San Francisco</SelectItem>
                        <SelectItem value="Los Angeles">Los Angeles</SelectItem>
                        <SelectItem value="New York">New York</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="tw-grid tw-grid-cols-1 tw-gap-field md:tw-grid-cols-2">
                  <div className="tw-space-y-2">
                    <Label htmlFor="zip">
                      ZIP/Postal Code
                      <Req />
                    </Label>
                    <Input
                      id="zip"
                      name="postalCode"
                      placeholder="100202"
                      inputMode="numeric"
                    />
                  </div>
                  <div className="tw-hidden md:tw-block" aria-hidden />
                </div>
              </div>
            </section>

            <section
              className="tw-rounded-lg tw-border tw-border-border tw-bg-card tw-p-5"
              aria-labelledby="access-setup-heading"
            >
              <h2
                id="access-setup-heading"
                className="tw-mb-4 tw-text-sm tw-font-semibold tw-text-foreground"
              >
                Access Setup
              </h2>
              <div className="tw-flex tw-flex-col tw-gap-field">
                <div className="tw-grid tw-grid-cols-1 tw-gap-field md:tw-grid-cols-2">
                  <div className="tw-space-y-2">
                    <Label htmlFor="admin-name">
                      Admin Name
                      <Req />
                    </Label>
                    <Input
                      id="admin-name"
                      name="adminName"
                      placeholder="e.g., Martin Morgan"
                      autoComplete="name"
                    />
                  </div>
                  <div className="tw-space-y-2">
                    <Label htmlFor="admin-email">
                      Company Admin Email
                      <Req />
                    </Label>
                    <Input
                      id="admin-email"
                      name="adminEmail"
                      type="email"
                      placeholder="e.g., admin@acmcare.com"
                      autoComplete="email"
                    />
                  </div>
                </div>
                <div className="tw-grid tw-grid-cols-1 tw-gap-field md:tw-grid-cols-2">
                  <div className="tw-space-y-2">
                    <Label htmlFor="employees">No. of Employees</Label>
                    <Input
                      id="employees"
                      name="employeeCount"
                      placeholder="e.g., 25, 50, etc."
                      value={employees}
                      onChange={(e) => setEmployees(e.target.value)}
                      inputMode="numeric"
                    />
                  </div>
                  <div className="tw-space-y-2">
                    <Label id="security-label">Security Posture</Label>
                    <Select
                      value={securityPosture}
                      onValueChange={setSecurityPosture}
                    >
                      <SelectTrigger aria-labelledby="security-label">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Standard">Standard</SelectItem>
                        <SelectItem value="Elevated">Elevated</SelectItem>
                        <SelectItem value="Strict">Strict</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </section>
          </CardContent>
          <CardFooter className="tw-flex tw-flex-col tw-gap-3 tw-border-t tw-border-border tw-bg-card tw-px-6 tw-py-5 sm:tw-flex-row sm:tw-items-center sm:tw-justify-between">
            <Button type="button" variant="outline" className="tw-w-full sm:tw-w-auto">
              Cancel
            </Button>
            <div className="tw-flex tw-w-full tw-flex-col tw-gap-3 sm:tw-w-auto sm:tw-flex-row sm:tw-justify-end">
              <Button
                type="button"
                variant="secondary"
                className="tw-w-full sm:tw-w-auto tw-min-w-[120px]"
              >
                Previous
              </Button>
              <Button
                type="button"
                className="tw-w-full sm:tw-w-auto tw-min-w-[120px]"
              >
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </CorporationDirectoryShell>
  );
};

export default AddCorporationQuickSetupStep2;
