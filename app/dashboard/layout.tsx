import {ReactNode} from "react";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "CanvasBel | Dashboard",
    description: "Welcome to CanvasBel",
};

export default function DashboardLayout({children}: { children: ReactNode }) {
    return (
        <div className="grid min-h-screen min-w-full lg:grid-cols-[280px_1fr] ">
            {children}
        </div>
    );
}
