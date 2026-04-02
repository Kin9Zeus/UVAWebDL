type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: "primary" | "outline" | "ghost";
};

export default function Button({ loading, variant = "primary", className, children, ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-all duration-300";
  const variants = {
    primary: "btn-primary text-white",
    outline: "btn-outline",
    ghost: "bg-transparent text-[var(--foreground)] hover:bg-[var(--neutral-100)]",
  };

  return (
    <button
      {...props}
      disabled={loading || props.disabled}
      className={`${base} ${variants[variant]} ${className ?? ""} ${loading ? "opacity-70 pointer-events-none" : ""} ${props.disabled ? "opacity-50 pointer-events-none" : ""}`}
    >
      {loading && (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      )}
      {children}
    </button>
  );
}