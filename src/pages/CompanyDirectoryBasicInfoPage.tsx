import React from "react";
import { CompanyDirectoryLayout } from "../components/common/CompanyDirectoryLayout";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Select } from "../components/ui/select";
import { cn } from "../lib/utils";
import chevronDownUrl from "../assets/chevron-down.svg";

const setupSteps = [
  {
    number: 1,
    title: "Basic Info.",
    description: "Create top-level organization",
  },
  {
    number: 2,
    title: "Company Info.",
    description: "Set up first operating unit",
  },
  {
    number: 3,
    title: "Confirmation",
    description: "Review details & confirm",
  },
] as const;

const industryOptions = [
  "Technology / SaaS",
  "Healthcare & Life Sciences",
  "Financial Services",
  "Education",
  "Manufacturing",
  "Retail & E-commerce",
  "Media & Entertainment",
  "Logistics & Transportation",
  "Energy & Utilities",
  "Government & Public Sector",
  "Professional Services",
  "Non-Profit",
  "Other",
] as const;

const regionOptions = [
  "North America",
  "Europe",
  "United Kingdom",
  "Middle East",
  "Africa",
  "India",
  "Asia-Pacific",
  "Latin America",
  "Japan",
  "China",
  "Australia & New Zealand",
] as const;

const timezoneOptions = [
  "EST (Eastern Time)",
  "CST (Central Time)",
  "MST (Mountain Time)",
  "PST (Pacific Time)",
  "AKST (Alaska Time)",
  "HST (Hawaii Time)",
] as const;

const CompanyDirectoryBasicInfoPage: React.FC = () => {
  const [isRegionOpen, setIsRegionOpen] = React.useState(true);
  const [selectedRegion, setSelectedRegion] = React.useState<(typeof regionOptions)[number]>(
    regionOptions[0]
  );
  const [isIndustryOpen, setIsIndustryOpen] = React.useState(false);
  const [selectedIndustry, setSelectedIndustry] = React.useState<(typeof industryOptions)[number]>(
    industryOptions[0]
  );
  const [isTimezoneOpen, setIsTimezoneOpen] = React.useState(true);
  const [selectedTimezone, setSelectedTimezone] = React.useState<(typeof timezoneOptions)[number]>(
    timezoneOptions[0]
  );

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
                        step.number === 1
                          ? "border-primary text-primary"
                          : "border-border text-muted-foreground"
                      )}
                    >
                      {step.number}
                    </span>
                    {index < setupSteps.length - 1 ? (
                      <span className="mt-sm h-10 w-px bg-border" aria-hidden />
                    ) : null}
                  </div>
                  <div className="pt-xs">
                    <p className="text-body-md font-semibold text-info-foreground">{step.title}</p>
                    <p className="text-body-md text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="col-span-12 overflow-hidden lg:col-span-8">
            <div className="border-b border-border px-lg py-md">
              <p className="text-body-sm text-muted-foreground">0% Complete</p>
              <div className="mt-sm h-1 rounded-full bg-muted" aria-hidden />
            </div>

            <div className="space-y-lg p-lg">
              <div className="space-y-xs">
                <h2 className="text-heading-xl font-semibold text-foreground">Basic Info.</h2>
                <p className="text-body-md text-muted-foreground">
                  Enter the core details for the new corporation.
                </p>
              </div>

              <section className="overflow-hidden rounded-xl border border-border">
                <div className="border-b border-border px-lg py-sm text-heading-lg font-medium text-info-foreground">
                  Corporation Basics
                </div>
                <div className="grid grid-cols-2 gap-md p-lg">
                  <div className="col-span-2 space-y-sm">
                    <Label htmlFor="corporation-legal-name" requiredIndicator>
                      Corporation Legal Name
                    </Label>
                    <Input id="corporation-legal-name" placeholder="e.g., Acme Corporation" />
                  </div>
                  <div className="col-span-2 space-y-sm">
                    <Label htmlFor="dba-name">DBA Name</Label>
                    <Input id="dba-name" placeholder="e.g., Acme Inc." />
                  </div>
                  <div className="col-span-2 space-y-sm">
                    <Label htmlFor="website-url" requiredIndicator>
                      Website URL
                    </Label>
                    <Input id="website-url" placeholder="e.g., https://www.acme.com" />
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="region" requiredIndicator>
                      Region (Data Residency)
                    </Label>
                    <div className="relative">
                      <button
                        id="region"
                        type="button"
                        className="flex h-10 w-full items-center justify-between rounded-lg border border-input bg-card px-md py-sm text-left text-body-md text-muted-foreground shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        onClick={() => setIsRegionOpen((prev) => !prev)}
                        aria-haspopup="listbox"
                        aria-expanded={isRegionOpen}
                      >
                        <span>{selectedRegion || "Select operating region"}</span>
                        <img src={chevronDownUrl} alt="" className="h-4 w-4" aria-hidden />
                      </button>

                      {isRegionOpen ? (
                        <div className="absolute left-0 top-full z-20 mt-sm w-full overflow-hidden rounded-xl border border-border bg-card shadow-card">
                          <ul role="listbox" aria-label="Region options" className="overflow-y-auto p-sm">
                            {regionOptions.map((option) => (
                              <li key={option}>
                                <button
                                  type="button"
                                  className={cn(
                                    "w-full rounded-lg px-md py-md text-left text-heading-xl font-normal text-foreground transition-colors",
                                    selectedRegion === option ? "bg-muted" : "hover:bg-accent"
                                  )}
                                  onClick={() => {
                                    setSelectedRegion(option);
                                    setIsRegionOpen(false);
                                  }}
                                  role="option"
                                  aria-selected={selectedRegion === option}
                                >
                                  {option}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="industry" requiredIndicator>
                      Industry
                    </Label>
                    <div className="relative">
                      <button
                        id="industry"
                        type="button"
                        className="flex h-10 w-full items-center justify-between rounded-lg border border-input bg-card px-md py-sm text-left text-body-md text-muted-foreground shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        onClick={() => setIsIndustryOpen((prev) => !prev)}
                        aria-haspopup="listbox"
                        aria-expanded={isIndustryOpen}
                      >
                        <span>{selectedIndustry || "Select industry"}</span>
                        <img src={chevronDownUrl} alt="" className="h-4 w-4" aria-hidden />
                      </button>

                      {isIndustryOpen ? (
                        <div className="absolute left-0 top-full z-20 mt-sm w-full overflow-hidden rounded-xl border border-border bg-card shadow-card">
                          <ul
                            role="listbox"
                            aria-label="Industry options"
                            className="overflow-y-auto p-sm"
                          >
                            {industryOptions.map((option) => (
                              <li key={option}>
                                <button
                                  type="button"
                                  className={cn(
                                    "w-full rounded-lg px-md py-md text-left text-heading-xl font-normal text-foreground transition-colors",
                                    selectedIndustry === option ? "bg-muted" : "hover:bg-accent"
                                  )}
                                  onClick={() => {
                                    setSelectedIndustry(option);
                                    setIsIndustryOpen(false);
                                  }}
                                  role="option"
                                  aria-selected={selectedIndustry === option}
                                >
                                  {option}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="corporate-phone" requiredIndicator>
                      Corporate Phone No.
                    </Label>
                    <Input id="corporate-phone" placeholder="e.g., +1 555 123 4567" />
                  </div>
                </div>
              </section>

              <section className="overflow-hidden rounded-xl border border-border">
                <div className="border-b border-border px-lg py-sm text-heading-lg font-medium text-info-foreground">
                  Corporation Address
                </div>
                <div className="grid grid-cols-2 gap-md p-lg">
                  <div className="col-span-2 space-y-sm">
                    <Label htmlFor="address-line" requiredIndicator>
                      Address Line
                    </Label>
                    <Input id="address-line" placeholder="Address line" />
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="state-province" requiredIndicator>
                      State/ Province
                    </Label>
                    <Select id="state-province" defaultValue="">
                      <option value="" disabled>
                        Select state/ province
                      </option>
                      <option value="ny">New York</option>
                    </Select>
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="city" requiredIndicator>
                      City
                    </Label>
                    <Select id="city" defaultValue="">
                      <option value="" disabled>
                        Select city
                      </option>
                      <option value="new-york">New York</option>
                    </Select>
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="country" requiredIndicator>
                      Country
                    </Label>
                    <Select id="country" defaultValue="">
                      <option value="" disabled>
                        Select country
                      </option>
                      <option value="usa">United States</option>
                    </Select>
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="postal-code">ZIP/ Postal Code</Label>
                    <Input id="postal-code" placeholder="Enter zip/ postal code" />
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="timezone" requiredIndicator>
                      Time Zone
                    </Label>
                    <div className="relative">
                      <button
                        id="timezone"
                        type="button"
                        className="flex h-10 w-full items-center justify-between rounded-lg border border-input bg-card px-md py-sm text-left text-body-md text-muted-foreground shadow-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                        onClick={() => setIsTimezoneOpen((prev) => !prev)}
                        aria-haspopup="listbox"
                        aria-expanded={isTimezoneOpen}
                      >
                        <span>{selectedTimezone}</span>
                        <img src={chevronDownUrl} alt="" className="h-4 w-4" aria-hidden />
                      </button>

                      {isTimezoneOpen ? (
                        <div className="absolute left-0 top-full z-20 mt-sm w-full overflow-hidden rounded-xl border border-border bg-card shadow-card">
                          <ul role="listbox" aria-label="Time zone options" className="overflow-y-auto p-sm">
                            {timezoneOptions.map((option) => (
                              <li key={option}>
                                <button
                                  type="button"
                                  className={cn(
                                    "w-full rounded-lg px-md py-md text-left text-heading-xl font-normal text-foreground transition-colors",
                                    selectedTimezone === option ? "bg-muted" : "hover:bg-accent"
                                  )}
                                  onClick={() => {
                                    setSelectedTimezone(option);
                                    setIsTimezoneOpen(false);
                                  }}
                                  role="option"
                                  aria-selected={selectedTimezone === option}
                                >
                                  {option}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </section>

              <section className="overflow-hidden rounded-xl border border-border">
                <div className="border-b border-border px-lg py-sm text-heading-lg font-medium text-info-foreground">
                  Executive Sponsor
                </div>
                <div className="grid grid-cols-2 gap-md p-lg">
                  <div className="space-y-sm">
                    <Label htmlFor="sponsor-name" requiredIndicator>
                      Name
                    </Label>
                    <Input id="sponsor-name" placeholder="e.g., Mike Davis" />
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="sponsor-role" requiredIndicator>
                      Role
                    </Label>
                    <Input id="sponsor-role" placeholder="e.g., CEO, Corporate Admin" />
                  </div>
                  <div className="col-span-2 space-y-sm">
                    <Label htmlFor="sponsor-email" requiredIndicator>
                      Email
                    </Label>
                    <Input id="sponsor-email" placeholder="e.g., mike_davis@email.com" />
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="work-phone" requiredIndicator>
                      Work Phone No.
                    </Label>
                    <Input id="work-phone" placeholder="e.g., +1 555 123 4567" />
                  </div>
                  <div className="space-y-sm">
                    <Label htmlFor="cell-phone">Cell Phone No.</Label>
                    <Input id="cell-phone" placeholder="e.g., +1 555 123 4567" />
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

export default CompanyDirectoryBasicInfoPage;
