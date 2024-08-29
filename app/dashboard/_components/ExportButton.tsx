import { DockIcon } from "@/components/magicui/dock";
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
    <DockIcon>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="rounded-md  px-2.5 text-center flex items-center justify-center gap-1"
          >
            <BiExport className="w-5 h-5" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-70 bg-tertiary p-5 rounded-md my-3 border border-primary">
          <div className="grid gap-4">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Export</h4>
              <p className="text-tertiary text-sm">
                Export your canvas as an image.
              </p>
            </div>
            <div className="flex justify-end">
              <Button className="flex items-center justify-center gap-3 w-full">
                <BiExport className="w-5 h-5" />
                <h1 className="uppercase text-sm">Export</h1>
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </DockIcon>
  );
}
