import React from "react";
import { CompanyDirectoryLayout } from "../components/common/CompanyDirectoryLayout";
import { CompanyDirectoryEditFrame } from "../components/common/CompanyDirectoryEditFrame";
import { Card, CardContent } from "../components/ui/card";

const CompanyDirectoryBasicInfoPage: React.FC = () => {
  return (
    <CompanyDirectoryLayout breadcrumbCurrent="New York HQ">
      <div className="mx-auto box-border flex w-full max-w-content flex-col gap-lg">
        <CompanyDirectoryEditFrame />
        <Card>
          <CardContent className="p-xl text-body-md text-muted-foreground">
            Basic Info. content is not implemented in this preview.
          </CardContent>
        </Card>
      </div>
    </CompanyDirectoryLayout>
  );
};

export default CompanyDirectoryBasicInfoPage;
