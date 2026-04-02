import { useEffect, useState, type ReactNode } from "react";

type Props = {
  trigger: string | number | undefined | null;
  children: ReactNode;
  className?: string;
};

export default function ContentRefresh({ trigger, children, className }: Props) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    let stopTimer = 0;
    const startTimer = window.setTimeout(() => {
      setIsRefreshing(true);
      stopTimer = window.setTimeout(() => {
        setIsRefreshing(false);
      }, 220);
    }, 0);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(stopTimer);
    };
  }, [trigger]);

  return (
    <span
      className={className}
      style={{
        display: "inline-block",
        opacity: isRefreshing ? 0.72 : 1,
        transform: isRefreshing ? "translateY(2px)" : "translateY(0px)",
        transition:
          "opacity 220ms cubic-bezier(0.22, 1, 0.36, 1), transform 220ms cubic-bezier(0.22, 1, 0.36, 1)",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </span>
  );
}
