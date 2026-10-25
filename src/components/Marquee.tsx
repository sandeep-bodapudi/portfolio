export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-stone-200 dark:border-stone-800 py-5" aria-hidden="true">
      <div className="flex w-max animate-marquee gap-12">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-12 text-lg font-semibold text-stone-400 dark:text-stone-600 whitespace-nowrap">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}
