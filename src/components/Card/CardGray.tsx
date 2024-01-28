interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardGray({ children, className }: CardProps) {
  return (
    <div
      className={`${className} rounded-lg bg-gray-100 text-gray-800 p-0 w-full hover:shadow-xl transition overflow-hidden`}
    >
      {children}
    </div>
  );
}
