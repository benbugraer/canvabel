import { DashboardBottomNav } from "@/app/dashboard/_components/DashboardBottomNav";
import { CSSProperties } from "react";

export default async function Dashboard() {
  return (
    <div className="flex min-w-screen p-4 flex-col items-center justify-between w-full">
      <div
        className="flex flex-col gap-2 lg:gap-2 min-h-[88vh] w-full animate-in"
        style={{ "--index": 5 } as CSSProperties}
      >
        <div className="flex flex-1 items-center justify-center rounded-lg border border-primary shadow-sm">
          <div className="flex flex-col items-center text-center"></div>
        </div>
        <div className="animate-in" style={{ "--index": 6 } as CSSProperties}>
          <DashboardBottomNav />
        </div>
      </div>
    </div>
  );
}
