import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { BiExport } from "react-icons/bi";
import React from "react";

export default function ExportButton() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="rounded-lg px-4 py-2 text-center flex items-center justify-center gap-2 border border-gray-300 hover:bg-gray-100 transition-colors duration-200"
        >
          <BiExport className="w-5 h-5" />
          <span className="text-sm font-medium">Export</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 bg-white p-6 rounded-md shadow-lg border border-gray-200">
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Export</h4>
            <p className="text-tertiary text-sm">
              Export your canvas as an image.
            </p>
          </div>
          <div className="flex justify-end">
            <Button className="flex items-center justify-center gap-2 w-full bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600 transition-colors duration-200">
              <BiExport className="w-5 h-5" />
              <span className="uppercase text-sm">Export</span>
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
