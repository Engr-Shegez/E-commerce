import { cn } from "@/lib/utils";
import React from "react";

interface FeatureCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  value?: string;
  className?: string;
  children?: React.ReactNode;
}

const FeatureCard = ({
  icon,
  title,
  description,
  value,
  className,
  children,
}: FeatureCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl border border-tech_bg_dark/10 bg-tech_bg_white p-5 shadow-sm transition-colors hover:border-tech_bg_green/40",
        className
      )}
    >
      <div className="space-y-3">
        {icon ? (
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-tech_bg_green/10 text-tech_bg_green">
            {icon}
          </div>
        ) : null}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-lg font-semibold text-tech_bg_dark">{title}</h2>
            {value ? (
              <span className="text-sm font-semibold text-tech_bg_dark-red">
                {value}
              </span>
            ) : null}
          </div>
          <p className="text-sm leading-6 text-tech_bg_light_color">
            {description}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
};

export default FeatureCard;
