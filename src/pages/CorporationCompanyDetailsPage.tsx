import React from "react";
import {
  Bell,
  ChevronDown,
  CircleUserRound,
  LayoutDashboard,
  Moon,
  Building2,
  Users,
  FolderKanban,
  Headphones,
  HelpCircle,
  Settings,
  Sparkles,
} from "lucide-react";
import { EditCompanyDialog } from "../components/common/EditCompanyDialog";

function SidebarNavItem({
  icon: Icon,
  label,
  active,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) {
  return (
    <button
      type="button"
      className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors ${
        active
          ? "bg-sidebar-accent font-medium text-sidebar-foreground"
          : "text-sidebar-muted hover:bg-sidebar-accent hover:text-sidebar-foreground"
      }`}
    >
      <Icon className="h-[18px] w-[18px] shrink-0 opacity-90" strokeWidth={1.75} />
      <span className="truncate">{label}</span>
    </button>
  );
}

const CorporationCompanyDetailsPage: React.FC = () => {
  const [editOpen, setEditOpen] = React.useState(true);

  return (
    <div className="relative mx-auto flex min-h-frame w-full max-w-frame overflow-hidden bg-muted">
      <aside className="flex w-sidebar shrink-0 flex-col border-r border-sidebar-border bg-sidebar py-6">
        <div className="px-6 pb-8">
          <div className="flex items-center gap-2 text-sidebar-foreground">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand text-brand-foreground">
              <Sparkles className="h-5 w-5" strokeWidth={2} />
            </span>
            <span className="text-lg font-semibold tracking-tight">Acme</span>
          </div>
        </div>
        <nav className="flex flex-1 flex-col gap-1 px-4">
          <SidebarNavItem icon={LayoutDashboard} label="Dashboard" />
          <SidebarNavItem icon={Building2} label="Corporation Directory" active />
          <SidebarNavItem icon={Users} label="User Directory" />
          <SidebarNavItem icon={FolderKanban} label="Projects" />
          <SidebarNavItem icon={Headphones} label="Support" />
          <SidebarNavItem icon={HelpCircle} label="Help Center" />
          <SidebarNavItem icon={Settings} label="Settings" />
        </nav>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col bg-muted">
        <header className="flex h-header shrink-0 items-center justify-between border-b border-border bg-background px-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="font-medium text-foreground">Corporation</span>
            <span aria-hidden>/</span>
            <span className="truncate">Tech Venture Digital</span>
            <ChevronDown className="h-4 w-4 shrink-0 opacity-70" strokeWidth={2} />
          </div>
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Toggle theme"
            >
              <Moon className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Notifications"
            >
              <Bell className="h-[18px] w-[18px]" strokeWidth={1.75} />
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-full border border-border bg-muted px-2 py-1 pr-3 text-sm font-medium text-foreground"
              aria-label="Account menu"
            >
              <CircleUserRound className="h-8 w-8 text-muted-foreground" strokeWidth={1.5} />
              <ChevronDown className="h-4 w-4 text-muted-foreground" strokeWidth={2} />
            </button>
          </div>
        </header>

        <main className="relative flex-1 overflow-auto p-6 blur-sm">
          <div className="pointer-events-none mx-auto max-w-5xl space-y-6 opacity-90">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="h-9 w-28 rounded-md bg-background shadow-sm ring-1 ring-border" />
              <div className="flex gap-2">
                <div className="h-9 w-28 rounded-md bg-background shadow-sm ring-1 ring-border" />
                <div className="h-9 w-36 rounded-md bg-destructive/15 shadow-sm ring-1 ring-destructive/25" />
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="min-h-[180px] rounded-lg border border-border bg-background shadow-sm" />
              <div className="min-h-[180px] rounded-lg border border-border bg-background shadow-sm" />
            </div>
            <div className="min-h-[240px] rounded-lg border border-border bg-background shadow-sm" />
          </div>
        </main>
      </div>

      <EditCompanyDialog open={editOpen} onOpenChange={setEditOpen} />
    </div>
  );
};

export default CorporationCompanyDetailsPage;
