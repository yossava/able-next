interface TitleProps {
  title: string;
  className?: string;
  color?: string;
}
export default function Title({ title, className, color }: TitleProps) {
  return (
    <div className="mb-2 w-full">
      <p
        className={`text-2xl lg:text-3xl text-center font-semibold ${className} ${color ?? 'text-primary'}`}
      >
        {title}
      </p>
    </div>
  );
}
