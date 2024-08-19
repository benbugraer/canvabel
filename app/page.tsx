import PageWrapper from "@/components/container/page-wrapper";
import HeroSection from "@/components/homepage/hero";
import GridPattern from "@/components/magicui/grid-pattern";
import { cn } from "@/lib/utils";
export default function Home() {
  return (
    <PageWrapper>
      <GridPattern
        width={85}
        height={85}
        x={-1}
        y={-1}
        strokeDasharray={"4 2"}
        className={cn(
          "[mask-image:radial-gradient(1000px_circle_at_top,white,transparent)] fixed"
        )}
      />
      <div className="flex flex-col max-w-[70rem]">
        <HeroSection />
      </div>
    </PageWrapper>
  );
}
