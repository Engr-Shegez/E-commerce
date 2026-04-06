import {
  Github,
  Instagram,
  Linkedin,
  Twitch,
  Twitter,
  Youtube,
} from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    icon: <Youtube className="w-5 h-5" />,
  },
  {
    title: "Github",
    href: "https://www.youtube.com",
    icon: <Github className="w-5 h-5" />,
  },
  {
    title: "Linkedin",
    href: "https://www.youtube.com",
    icon: <Linkedin className="w-5 h-5" />,
  },
  {
    title: "Twitter",
    href: "https://www.youtube.com",
    icon: <Twitter className="w-5 h-5" />,
  },
  {
    title: "Tiktok",
    href: "https://www.youtube.com",
    icon: <Instagram className="w-5 h-5" />,
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div
        className={cn(
          "flex items-center gap-3.5 text-shadow-tech_bg_white/60",
          className
        )}
      >
        {socialLink.map((item) => (
          <Tooltip key={item.title}>
            <TooltipTrigger asChild>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "p-2 border rounded-full hover:text-tech_bg_white hover:border-tech_bg_green hoverEffect",
                  iconClassName
                )}
              >
                {item.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-tech_bg_white text-tech_bg_black font-semibold",
                tooltipClassName
              )}
            >
              {item.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;

// const Products = ({ products }: ProductsProps) => {
//   return (
//     <div className="products-container">
//       {products?.map((product) => (
//         <div key={product._id} className="product-item">
//           <h3>{product.name}</h3>
//           <p>${product.price}</p>
//           {product.discount > 0 && (
//             <p className="discount">-${product.discount} off</p>
//           )}
//           {product.images && product.images.length > 0 && (
//             <img src={product.images[0]} alt={product.name} />
//           )}
//           {product.status && (
//             <span className={`status ${product.status}`}>{product.status}</span>
//           )}
//           {product.isFeatured && <span className="featured">Featured</span>}
//         </div>
//       ))}
//     </div>
//   );
// };
