import React from "react";
import { CompanyDirectoryLayout } from "../components/common/CompanyDirectoryLayout";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "../components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "../components/ui/alert";
import { Label } from "../components/ui/label";
import { TabsList, TabsTrigger } from "../components/ui/tabs";
import { Select } from "../components/ui/select";

import { ReactComponent as ArrowLeftIcon } from "../assets/arrow-left.svg";
import { ReactComponent as UploadCloudIcon } from "../assets/upload-cloud.svg";
import { ReactComponent as InfoCircleIcon } from "../assets/info-circle.svg";
import { ReactComponent as TrashIcon } from "../assets/trash.svg";
import { ReactComponent as FileTextIcon } from "../assets/file-text.svg";

type TabId = "basic" | "key-contacts" | "plan" | "configuration";

const ROSTER_CONTACT_OPTIONS = [
  "Ethan Carter",
  "Sophia Martinez",
  "James Anderson",
  "Lara Croft",
  "David Smith",
] as const;

const CompanyDirectoryKeyContactsPage: React.FC = () => {
  const [tab, setTab] = React.useState<TabId>("key-contacts");
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <CompanyDirectoryLayout breadcrumbCurrent="New York HQ">
      <div className="mx-auto box-border flex w-full max-w-content flex-col gap-lg">
        <div className="flex flex-wrap items-start justify-between gap-md">
          <div className="flex min-w-0 flex-1 flex-wrap items-center gap-md">
            <Button variant="outline" className="h-9 shrink-0 px-md py-sm text-body-md font-normal">
              <ArrowLeftIcon className="mr-sm h-5 w-5 shrink-0 text-foreground" aria-hidden />
              Back
            </Button>
            <h1 className="text-heading-xl font-semibold text-foreground">New York HQ</h1>
            <div className="flex flex-wrap items-center gap-sm">
              <Badge variant="success">Assigned</Badge>
              <Badge variant="brand">Enterprise</Badge>
            </div>
          </div>
          <Button variant="destructive" className="h-9 shrink-0 px-md py-sm text-body-md font-medium">
            <TrashIcon className="mr-sm h-[18px] w-[18px] shrink-0 text-destructive" aria-hidden />
            Delete
          </Button>
        </div>

        <TabsList className="gap-xl">
          <TabsTrigger selected={tab === "basic"} onClick={() => setTab("basic")}>
            Basic Info.
          </TabsTrigger>
          <TabsTrigger selected={tab === "key-contacts"} onClick={() => setTab("key-contacts")}>
            Key Contacts
          </TabsTrigger>
          <TabsTrigger selected={tab === "plan"} onClick={() => setTab("plan")}>
            Plan &amp; Seats
          </TabsTrigger>
          <TabsTrigger selected={tab === "configuration"} onClick={() => setTab("configuration")}>
            Configuration
          </TabsTrigger>
        </TabsList>

        {tab === "key-contacts" ? (
          <Card className="overflow-hidden">
            <CardHeader className="gap-sm pb-lg">
              <CardTitle className="text-heading-xl font-semibold">Key Contacts</CardTitle>
              <CardDescription className="text-body-md">
                Setup the operating unit for the company.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-lg pb-lg">
              <Alert className="items-start border-primary/20 bg-info">
                <InfoCircleIcon className="h-5 w-5 shrink-0 text-primary" aria-hidden />
                <div className="flex flex-col gap-sm pt-xs">
                  <AlertTitle>Roster Note</AlertTitle>
                  <AlertDescription className="text-body-md">
                    Upload the rosters via CSV or XLS files &amp; later on select them for specific roles.
                  </AlertDescription>
                </div>
              </Alert>

              <Card className="shadow-none">
                <CardHeader className="pb-md pt-lg">
                  <CardTitle>Rosters</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-lg pb-lg">
                  <div className="flex flex-col gap-sm">
                    <Label htmlFor="roster-file" requiredIndicator>
                      Upload Roster
                    </Label>
                    <input
                      ref={fileInputRef}
                      id="roster-file"
                      type="file"
                      accept=".csv,.xls,.xlsx"
                      className="sr-only"
                    />
                    <button
                      type="button"
                      className="flex min-h-key-contacts-upload cursor-pointer flex-col items-center justify-center gap-md rounded-xl border-2 border-dashed border-input bg-card px-xl py-xl text-center shadow-card transition-colors hover:bg-accent/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      onClick={() => fileInputRef.current?.click()}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          fileInputRef.current?.click();
                        }
                      }}
                      aria-label="Upload roster file"
                    >
                      <UploadCloudIcon className="h-10 w-10 shrink-0 text-primary" aria-hidden />
                      <div className="flex flex-col gap-xs">
                        <span className="text-body-md font-medium text-primary">
                          Click to upload or drag-&amp;-drop file
                        </span>
                        <span className="text-body-sm text-muted-foreground">
                          Supported file formats are CSV &amp; XLS up to 20MB
                        </span>
                      </div>
                    </button>
                  </div>

                  <div className="flex items-center gap-md rounded-lg border border-border bg-accent px-md py-sm">
                    <FileTextIcon className="h-[18px] w-[18px] shrink-0 text-muted-foreground" aria-hidden />
                    <span className="truncate text-body-md font-medium text-foreground">rosters_final_file.csv</span>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-1 gap-x-lg gap-y-lg md:grid-cols-2">
                <div className="flex flex-col gap-sm">
                  <Label htmlFor="primary-admin" requiredIndicator>
                    Primary Company Admin
                  </Label>
                  <Select id="primary-admin" defaultValue="Ethan Carter">
                    {ROSTER_CONTACT_OPTIONS.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="flex flex-col gap-sm">
                  <Label htmlFor="secondary-admin" requiredIndicator>
                    Secondary Company Admin
                  </Label>
                  <Select id="secondary-admin" defaultValue="Sophia Martinez">
                    {ROSTER_CONTACT_OPTIONS.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="flex flex-col gap-sm">
                  <Label htmlFor="exec-sponsor" requiredIndicator>
                    Executive Sponsor
                  </Label>
                  <Select id="exec-sponsor" defaultValue="James Anderson">
                    {ROSTER_CONTACT_OPTIONS.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="flex flex-col gap-sm">
                  <Label htmlFor="hr-contact" requiredIndicator>
                    HR/ People Ops Contact
                  </Label>
                  <Select id="hr-contact" defaultValue="Lara Croft">
                    {ROSTER_CONTACT_OPTIONS.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </Select>
                </div>
                <div className="flex flex-col gap-sm md:col-span-1">
                  <Label htmlFor="it-contact" requiredIndicator>
                    IT/ Security Contact
                  </Label>
                  <Select id="it-contact" defaultValue="David Smith">
                    {ROSTER_CONTACT_OPTIONS.map((name) => (
                      <option key={name} value={name}>
                        {name}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>
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
        ) : (
          <Card className="items-center justify-center p-xl text-body-md text-muted-foreground">
            This tab is not implemented in this preview.
          </Card>
        )}
      </div>
    </CompanyDirectoryLayout>
  );
};

export default CompanyDirectoryKeyContactsPage;
