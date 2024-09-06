import React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "@/components/magicui/dock";
import { GiArrowCursor } from "react-icons/gi";
import { RiDragMove2Fill } from "react-icons/ri";
import { FaImage } from "react-icons/fa6";
import { PiTextTFill } from "react-icons/pi";
import { TbSettings } from "react-icons/tb";
import { IoColorPalette } from "react-icons/io5";

const navigationItems = [
  { label: "Cursor", icon: GiArrowCursor },
  { label: "Move", icon: RiDragMove2Fill },
  { label: "Image", icon: FaImage },
  { label: "Text", icon: PiTextTFill },
  { label: "Color", icon: IoColorPalette },
  // { label: "Redo", icon: LiaRedoAltSolid },
  { label: "Settings", icon: TbSettings },
];

const NavigationItem = ({
  label,
  icon: Icon,
}: {
  label: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) => (
  <DockIcon key={label}>
    <Tooltip>
      <TooltipTrigger asChild>
        <div
          className={cn(
            buttonVariants({ variant: "ghost", size: "icon" }),
            "size-12 rounded-full"
          )}
        >
          <Icon className="size-4" />
        </div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  </DockIcon>
);

export function DashSidebarNav() {
  return (
    <TooltipProvider>
      <Dock direction="middle">
        {navigationItems.map((item) => (
          <NavigationItem key={item.label} {...item} />
        ))}
      </Dock>
    </TooltipProvider>
  );
}
