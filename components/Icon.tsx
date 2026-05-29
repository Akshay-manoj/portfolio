// Material Symbols Outlined icon. Browse names at https://fonts.google.com/icons
export function Icon({
  name,
  className = "",
  filled = false,
}: {
  name: string;
  className?: string;
  filled?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={`material-symbols-outlined${filled ? " filled" : ""} ${className}`}
    >
      {name}
    </span>
  );
}
