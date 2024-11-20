interface DashboardShellProps {
    children: React.ReactNode;
  }
  
  export function DashboardContainer({ children }: DashboardShellProps) {
    return (
      <div className="grid min-h-screen w-full ">
        <main className="flex w-full flex-col overflow-hidden">{children}</main>
      </div>
    );
  }