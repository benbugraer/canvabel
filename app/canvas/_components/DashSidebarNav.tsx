"use client";

import React, { useState } from "react";
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
import ImageUpload from "./ImageUpload";

const navigationItems = [
  { label: "Cursor", icon: GiArrowCursor },
  { label: "Move", icon: RiDragMove2Fill },
  // { label: "Image", icon: FaImage },
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

interface DashSidebarNavProps {
  handleImageUpload: (file: File) => void;
}

export function DashSidebarNav({ handleImageUpload }: DashSidebarNavProps) {
  // const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  // const handleImageUpload = (file: File) => {
  //   if (!ctx) return;

  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const img = new Image();
  //     img.onload = () => {
  //       // Resmi canvas'ın merkezine çiz
  //       const scale = Math.min(
  //         ctx.canvas.width / img.width,
  //         ctx.canvas.height / img.height
  //       );
  //       const x = ctx.canvas.width / 2 - (img.width / 2) * scale;
  //       const y = ctx.canvas.height / 2 - (img.height / 2) * scale;
  //       ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
  //     };
  //     img.src = e.target?.result as string;
  //   };
  //   reader.readAsDataURL(file);
  // };
  return (
    <TooltipProvider>
      <Dock direction="middle">
        {navigationItems.map((item) => (
          <NavigationItem key={item.label} {...item} />
        ))}
        <DockIcon>
          <ImageUpload onImageUpload={handleImageUpload} />
        </DockIcon>
      </Dock>
    </TooltipProvider>
  );
}
