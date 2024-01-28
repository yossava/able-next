interface TitleProps {
  title: string;
  className?: string;
  color?: string;
  borderColor?: string;
}
export default function SectionTitle({
  title,
  className,
  color,
  borderColor
}: TitleProps) {
  return (
    <div
      className={`${className} ${color ?? 'text-primary'} mb-10 w-full flex flex-col items-center`}
    >
      <h2 className="text-2xl lg:text-3xl text-center font-semibold">
        {title}
      </h2>
      <div
        className={`border border-b-2 ${borderColor ?? 'border-primary'} w-[60px] mt-3 rounded`}
      />
    </div>
  );
}
