type Props = React.InputHTMLAttributes<HTMLInputElement> & { label?: string };

export default function Input({ label, className, ...props }: Props) {
  return (
    <label className="block">
      {label && <span className="text-sm font-medium text-[var(--neutral-600)]">{label}</span>}
      <input
        {...props}
        className={`mt-1.5 w-full rounded-xl border border-[var(--neutral-200)] bg-[var(--surface-warm)] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] focus:border-transparent transition-all duration-300 placeholder:text-[var(--neutral-400)] ${className ?? ""}`}
      />
    </label>
  );
}