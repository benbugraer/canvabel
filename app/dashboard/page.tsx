import { CSSProperties } from "react";
import { DockDemo } from "./_components/StyleNavigation";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="border border-secondary w-11/12 h-4/6 rounded-lg animate-in-reverse"
        style={{ "--index": 0 } as CSSProperties}
      >
        Hello Dashboard
      </div>
      <div className="animate-in" style={{ "--index": 1 } as CSSProperties}>
        <DockDemo />
      </div>
    </div>
  );
}
