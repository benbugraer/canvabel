"use client";

import { CSSProperties, useRef, useState, useEffect, RefObject } from "react";
import ImageUpload from "./_components/ImageUpload";

interface CanvasPageProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const CanvasPage: React.FC<CanvasPageProps> = ({ canvasRef }) => {
  // const handleImageUpload = (file: File) => {
  //   const reader = new FileReader();
  //   reader.onload = (e) => {
  //     const img = new Image();
  //     img.onload = () => {
  //       // ctx.drawImage(img, 0, 0)
  //     };
  //     img.src = e.target?.result as string;
  //   };
  //   reader.readAsDataURL(file);
  // };
  // const canvasRef = useRef<HTMLCanvasElement>(null);
  // const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);

  // useEffect(() => {
  //   if (canvasRef.current) {
  //     const canvas = canvasRef.current;
  //     canvas.width = 800; // Canvas genişliğini ayarlayın
  //     canvas.height = 600; // Canvas yüksekliğini ayarlayın
  //     const context = canvas.getContext("2d");
  //     setCtx(context);
  //   }
  // }, []);

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
    <div
      className="flex min-w-screen p-4 flex-col items-center justify-between w-full animate-in"
      style={{ "--index": 1 } as CSSProperties}
    >
      <div className="flex flex-col gap-2 lg:gap-2 min-h-[87vh] w-full">
        <div className="flex flex-1 items-center justify-center rounded-md border border-primary shadow-sm">
          {/* <ImageUpload onImageUpload={handleImageUpload} /> */}
          <canvas ref={canvasRef} />
        </div>
      </div>
    </div>
  );
};

export default CanvasPage;
