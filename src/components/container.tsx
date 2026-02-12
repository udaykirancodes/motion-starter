import { cn } from "@/lib/utils";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section className={cn("container mx-auto max-w-5xl px-4", className)}>
      {children}
    </section>
  );
};

export default Container;
