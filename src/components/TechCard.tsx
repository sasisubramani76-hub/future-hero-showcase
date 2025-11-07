import { cn } from "@/lib/utils";

interface TechCardProps {
  title: string;
  description: string;
  icon: string;
  colorClass: string;
}

export const TechCard = ({ title, description, icon, colorClass }: TechCardProps) => {
  return (
    <div className={cn(
      "group relative overflow-hidden rounded-2xl bg-card p-6 shadow-card",
      "hover:scale-105 transition-all duration-300 cursor-pointer",
      "border border-border/50 hover:border-primary/50"
    )}>
      <div className="absolute inset-0 bg-gradient-glow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className={cn(
          "w-20 h-20 mb-4 rounded-xl flex items-center justify-center overflow-hidden",
          "shadow-lg group-hover:scale-110 transition-transform duration-300",
          colorClass
        )}>
          <img src={icon} alt={title} className="w-full h-full object-cover" />
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};
