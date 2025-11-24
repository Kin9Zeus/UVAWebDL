type Props = React.InputHTMLAttributes<HTMLInputElement> & { label?: string };

export default function Input({ label, className, ...props }: Props) {
  return (
    <label className="block">
      {label && <span className="text-sm text-neutral-600">{label}</span>}
      <input
        {...props}
        className={`mt-1 w-full rounded border border-neutral-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--color-secondary)] ${className ?? ""}`}
      />
    </label>
  );
}