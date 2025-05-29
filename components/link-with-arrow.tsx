import { cn } from "@/lib/utils";

export function LinkAndArrow({
  className,
  link,
  iconSize = "36px",
  linkFontSize = "text-[36px]",
  linkClassName,
  arrowFillColor = "#fff",
}: {
  className?: string;
  link: string;
  iconSize?: string;
  linkFontSize?: string;
  linkClassName?: string;
  arrowFillColor?: string;
}) {
  return (
    <div className={cn("w-full flex items-center gap-[16px] group overflow-hidden", className)}>
      <span className={cn(`${linkFontSize} cursor-pointer`, linkClassName)}>{link}</span>
      <span className="overflow-hidden">
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 96 90"
          fill={arrowFillColor}
          xmlns="http://www.w3.org/2000/svg"
          className="group-hover:animate-horizontal"
        >
          <path
            d="M60.6161 83.6194V72.8606C60.6161 67.7976 61.7763 63.473 64.0969 59.8867C66.5229 56.195 69.9509 53.7163 74.381 52.4505L0.968012 52.4505L0.968012 39.7931L74.381 39.7931C69.9509 38.5274 66.5229 36.1014 64.0969 32.5151C61.7763 28.8233 60.6161 24.446 60.6161 19.383L60.6161 8.62422H74.2228L74.2228 17.9591C74.2228 24.4987 75.9632 29.8254 79.444 33.939C82.9248 38.0527 87.7768 40.1095 94 40.1095H95.8986V52.1341H94C87.7768 52.1341 82.9248 54.1909 79.444 58.3046C75.9632 62.4182 74.2228 67.7449 74.2228 74.2846V83.6194H60.6161Z"
            fill={arrowFillColor}
          ></path>
        </svg>
      </span>
    </div>
  );
}
