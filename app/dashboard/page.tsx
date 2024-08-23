import DashWrapper from "./_components/DashWrapper";
import { DashboardNavigation } from "./_components/DashboardNavigation";
import { CSSProperties } from "react";

export default async function Dashboard() {
  return (
    <DashWrapper>
      <main className="flex min-w-screen p-4 flex-col items-center justify-between w-full overflow-hidden">
        <main className="flex flex-col gap-2 lg:gap-2 min-h-[80vh] w-full">
          <div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
            <div className="flex flex-col items-center text-center">
              <h3 className="text-2xl font-bold tracking-tight">Hello World</h3>
            </div>
          </div>
        </main>
        <div
          className="mb-0 animate-in"
          style={{ "--index": 2 } as CSSProperties}
        >
          <DashboardNavigation />
        </div>
      </main>
    </DashWrapper>
  );
}
