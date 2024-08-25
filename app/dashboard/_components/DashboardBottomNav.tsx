import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { GiArrowCursor } from "react-icons/gi";
import { LiaRedoAltSolid } from "react-icons/lia";
import { RiDragMove2Fill } from "react-icons/ri";
import { PiTextTFill } from "react-icons/pi";
import { FaImage } from "react-icons/fa6";
import { TbSettings } from "react-icons/tb";
import { BiExport } from "react-icons/bi";

const navigationItems = [
  { label: "Cursor", icon: GiArrowCursor },
  { label: "Move", icon: RiDragMove2Fill },
  { label: "Image", icon: FaImage },
  { label: "Text", icon: PiTextTFill },
  { label: "Redo", icon: LiaRedoAltSolid },
  { label: "Settings", icon: TbSettings },
];

export function DashboardBottomNav() {
  return (
    <div>
      <TooltipProvider>
        <Dock direction="middle">
          {navigationItems.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-4" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full" />
          <DockIcon className="mr-3">
            <Tooltip>
              <TooltipTrigger asChild>
                <ThemeSwitcher />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
          <DockIcon>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="rounded-md mr-3 px-3 text-center flex items-center justify-center gap-1"
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
        </Dock>
      </TooltipProvider>
    </div>
  );
}
