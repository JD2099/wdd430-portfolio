interface SkillCardProps {
  title: string;
  description: string;
  category: string;
}

export default function SkillCard({ title, description, category }: SkillCardProps) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 shadow-sm transition-all hover:shadow-md">
      <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-emerald-700 bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300 rounded-full">
        {category}
      </span>
      <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">{title}</h3>
      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}