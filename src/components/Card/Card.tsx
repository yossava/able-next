interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={`${className} rounded-lg bg-white text-gray-800 shadow-md p-3 lg:p-5 w-full hover:shadow-xl transition`}
    >
      {children}
    </div>
  );
}
