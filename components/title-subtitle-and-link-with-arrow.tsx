import { LinkAndArrow } from "@/components/link-with-arrow";

export function TitleSubTitleAndLinkWithArrow({
  title,
  subtitle,
  link,
  className,
}: {
  title: string;
  subtitle: string;
  link: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h3 className="text-[56px] font-medium mb-4">{title}</h3>
      <p className="text-2xl font-light mb-4">{subtitle}</p>
      <LinkAndArrow link={link} arrowFillColor="#000" />
    </div>
  );
}
