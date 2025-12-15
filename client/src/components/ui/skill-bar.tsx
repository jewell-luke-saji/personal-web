import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
}

export function SkillBar({ name, percentage, delay = 0 }: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-foreground/80">{name}</span>
        <span className="text-sm font-mono text-primary">{percentage}%</span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: "easeOut" }}
          className="h-full bg-primary/80 shadow-[0_0_10px_var(--color-primary)] rounded-full"
        />
      </div>
    </div>
  );
}
