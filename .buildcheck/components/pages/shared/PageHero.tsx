import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import React from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

const PageHero = ({
  eyebrow,
  title,
  description,
  children,
  className,
}: PageHeroProps) => {
  return (
    <section
      className={cn(
        "rounded-3xl border border-tech_bg_green/20 bg-gradient-to-br from-tech_bg_white via-neutral-100 to-tech_bg_color p-6 shadow-sm md:p-8",
        className
      )}
    >
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-3xl space-y-3">
          {eyebrow ? (
            <Badge className="bg-tech_bg_green text-tech_bg_white hover:bg-tech_bg_green">
              {eyebrow}
            </Badge>
          ) : null}
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-tech_bg_dark md:text-4xl">
              {title}
            </h1>
            <p className="max-w-2xl text-sm leading-6 text-tech_bg_light_color md:text-base">
              {description}
            </p>
          </div>
        </div>
        {children ? <div className="flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
};

export default PageHero;
