"use client";

import React, { useRef, useState, useEffect, CSSProperties } from "react";
import { DashSidebarNav } from "./DashSidebarNav";
import CanvasPage from "../page";

const CanvasParentComponent: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = 800;
      canvas.height = 600;
      const context = canvas.getContext("2d");
      setCtx(context);
    }
  }, []);

  const handleImageUpload = (file: File) => {
    if (!ctx) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const scale = Math.min(
          ctx.canvas.width / img.width,
          ctx.canvas.height / img.height
        );
        const x = ctx.canvas.width / 2 - (img.width / 2) * scale;
        const y = ctx.canvas.height / 2 - (img.height / 2) * scale;
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col h-screen">
      <DashSidebarNav handleImageUpload={handleImageUpload} />
      <CanvasPage canvasRef={canvasRef} />
    </div>
  );
};

export default CanvasParentComponent;
