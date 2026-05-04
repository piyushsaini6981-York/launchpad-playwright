import React from "react";
import { CompanyDirectoryLayout } from "../components/common/CompanyDirectoryLayout";
import { CompanyDirectoryEditFrame } from "../components/common/CompanyDirectoryEditFrame";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Select } from "../components/ui/select";
import { Input } from "../components/ui/input";
import { Switch } from "../components/ui/switch";

import { ReactComponent as CalendarIcon } from "../assets/calendar.svg";

type PlanMode = "trial" | "pilot";

const CompanyDirectoryPlanSeatsPage: React.FC = () => {
  const [planMode, setPlanMode] = React.useState<PlanMode>("trial");
  const [autoExpireTrial, setAutoExpireTrial] = React.useState(true);
  const [paymentType, setPaymentType] = React.useState("ACH (Bank Transfer)");

  return (
    <CompanyDirectoryLayout breadcrumbCurrent="New York HQ">
      <div className="mx-auto box-border flex w-full max-w-content flex-col gap-lg">
        <CompanyDirectoryEditFrame />

        <Card className="overflow-hidden">
          <CardHeader className="gap-sm pb-lg">
            <CardTitle className="text-heading-xl font-semibold">Plan &amp; Seats</CardTitle>
            <CardDescription className="text-body-md">
              Manage your plan allocations and seats assignments.
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-xl pb-lg">
            <section className="flex flex-col gap-lg rounded-xl border border-border bg-card p-lg shadow-card">
              <h2 className="text-heading-lg font-semibold text-foreground">
                Plan Allocation &amp; Seats Management
              </h2>

              <div className="flex flex-wrap gap-xl">
                <label className="flex cursor-pointer items-center gap-sm text-body-md text-foreground">
                  <input
                    type="radio"
                    name="plan-allocation-mode"
                    checked={planMode === "trial"}
                    onChange={() => setPlanMode("trial")}
                    className="h-4 w-4 border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  />
                  Trial
                </label>
                <label className="flex cursor-pointer items-center gap-sm text-body-md text-foreground">
                  <input
                    type="radio"
                    name="plan-allocation-mode"
                    checked={planMode === "pilot"}
                    onChange={() => setPlanMode("pilot")}
                    className="h-4 w-4 border-input text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
                  />
                  Pilot
                </label>
              </div>

              {planMode === "trial" ? (
                <div className="rounded-xl border border-border bg-accent/60 p-lg">
                  <div className="grid grid-cols-1 gap-x-lg gap-y-lg md:grid-cols-2">
                    <div className="flex flex-col gap-sm">
                      <Label htmlFor="trial-length" requiredIndicator>
                        Trial Length
                      </Label>
                      <Select id="trial-length" defaultValue="14 days">
                        <option value="7 days">7 days</option>
                        <option value="14 days">14 days</option>
                        <option value="30 days">30 days</option>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-sm">
                      <Label htmlFor="trial-end">Trial End Date</Label>
                      <div className="relative w-full">
                        <Input
                          id="trial-end"
                          value="01-20-2026"
                          disabled
                          readOnly
                          className="pr-2xl"
                          aria-describedby="trial-end-hint"
                        />
                        <CalendarIcon
                          className="pointer-events-none absolute right-md top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
                          aria-hidden
                        />
                      </div>
                      <span id="trial-end-hint" className="sr-only">
                        Trial end date is set automatically based on trial length.
                      </span>
                    </div>
                    <div className="flex flex-col gap-sm">
                      <Label htmlFor="trial-seats" requiredIndicator>
                        Trial Seats
                      </Label>
                      <Select id="trial-seats" defaultValue="25">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                      </Select>
                    </div>
                    <div className="flex flex-col gap-sm">
                      <div className="flex items-center gap-md">
                        <Switch
                          id="auto-expire-trial"
                          checked={autoExpireTrial}
                          onCheckedChange={setAutoExpireTrial}
                        />
                        <Label htmlFor="auto-expire-trial" className="cursor-pointer font-medium">
                          Auto-expire Trial
                        </Label>
                      </div>
                      <p className="max-w-md text-body-sm text-muted-foreground">
                        Automatically suspend access when trial period ends.
                      </p>
                    </div>
                  </div>
                </div>
              ) : null}

              <div className="grid grid-cols-1 gap-x-lg gap-y-lg md:grid-cols-2">
                <div className="flex flex-col gap-sm">
                  <Label htmlFor="plan-tier" requiredIndicator>
                    Plan
                  </Label>
                  <Select id="plan-tier" defaultValue="50-100 employees">
                    <option value="1-50 employees">1-50 employees</option>
                    <option value="50-100 employees">50-100 employees</option>
                    <option value="100-250 employees">100-250 employees</option>
                  </Select>
                </div>
                <div className="flex flex-col gap-sm">
                  <Label htmlFor="total-seats">Total Seats</Label>
                  <Input id="total-seats" value="100" readOnly disabled />
                </div>
                <div className="flex flex-col gap-sm">
                  <Label htmlFor="billing-cycle" requiredIndicator>
                    Billing Cycle
                  </Label>
                  <Select id="billing-cycle" defaultValue="Monthly">
                    <option value="Monthly">Monthly</option>
                    <option value="Annual">Annual</option>
                  </Select>
                </div>
                <div className="flex flex-col gap-sm">
                  <Label htmlFor="payment-type" requiredIndicator>
                    Payment Type
                  </Label>
                  <Select
                    id="payment-type"
                    value={paymentType}
                    onChange={(e) => setPaymentType(e.target.value)}
                  >
                    <option value="ACH (Bank Transfer)">ACH (Bank Transfer)</option>
                    <option value="Credit Card">Credit Card</option>
                  </Select>
                </div>
                <div className="flex flex-col gap-sm md:col-span-2">
                  <Label htmlFor="billing-currency" requiredIndicator>
                    Billing Currency
                  </Label>
                  <Select id="billing-currency" defaultValue="USD ($)">
                    <option value="USD ($)">USD ($)</option>
                    <option value="EUR (€)">EUR (€)</option>
                  </Select>
                </div>
              </div>
            </section>

            {paymentType === "ACH (Bank Transfer)" ? (
              <section className="flex flex-col gap-lg rounded-xl border border-border bg-card p-lg shadow-card">
                <h2 className="text-heading-lg font-semibold text-foreground">
                  ACH (Bank Transfer) Details
                </h2>
                <div className="grid grid-cols-1 gap-x-lg gap-y-lg md:grid-cols-2">
                  <div className="flex flex-col gap-sm">
                    <Label htmlFor="ach-account-holder" requiredIndicator>
                      Account Holder Name
                    </Label>
                    <Input id="ach-account-holder" defaultValue="Jacob Samuel Teach" />
                  </div>
                  <div className="flex flex-col gap-sm">
                    <Label htmlFor="ach-bank-name" requiredIndicator>
                      Bank Name
                    </Label>
                    <Input id="ach-bank-name" defaultValue="U.S. BANK N.A." />
                  </div>
                  <div className="flex flex-col gap-sm">
                    <Label htmlFor="ach-account-no" requiredIndicator>
                      Account No.
                    </Label>
                    <Input id="ach-account-no" defaultValue="987654321" />
                  </div>
                  <div className="flex flex-col gap-sm">
                    <Label htmlFor="ach-account-type" requiredIndicator>
                      Account Type
                    </Label>
                    <Select id="ach-account-type" defaultValue="Saving Account">
                      <option value="Saving Account">Saving Account</option>
                      <option value="Checking Account">Checking Account</option>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-sm">
                    <Label htmlFor="ach-payment-direction" requiredIndicator>
                      Payment Direction
                    </Label>
                    <Select id="ach-payment-direction" defaultValue="ACH Credit (CCD/ PPD)">
                      <option value="ACH Credit (CCD/ PPD)">ACH Credit (CCD/ PPD)</option>
                      <option value="ACH Debit">ACH Debit</option>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-sm">
                    <Label htmlFor="ach-routing-no" requiredIndicator>
                      Routing No.
                    </Label>
                    <Input id="ach-routing-no" defaultValue="021000322" />
                  </div>
                </div>
              </section>
            ) : null}
          </CardContent>

          <CardFooter className="gap-md">
            <Button variant="outline" type="button" className="min-w-28 px-xl">
              Cancel
            </Button>
            <Button type="button" className="min-w-36 px-xl">
              Save &amp; Update
            </Button>
          </CardFooter>
        </Card>
      </div>
    </CompanyDirectoryLayout>
  );
};

export default CompanyDirectoryPlanSeatsPage;
