import { CSSProperties } from "react";

export default async function CanvasPage() {
  return (
    <div
      className="flex min-w-screen p-4 flex-col items-center justify-between w-full animate-in"
      style={{ "--index": 1 } as CSSProperties}
    >
      <div className="flex flex-col gap-2 lg:gap-2 min-h-[87vh] w-full">
        <div className="flex flex-1 items-center justify-center rounded-md border border-primary shadow-sm">
          <h1>Canvas Here</h1>
        </div>
      </div>
    </div>
  );
}
