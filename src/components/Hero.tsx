import { Button } from "@/components/ui/button";
import { TechCard } from "@/components/TechCard";
import techBg from "@/assets/tech-bg.jpg";
import aiMlIcon from "@/assets/ai-ml-icon.png";
import dataScienceIcon from "@/assets/data-science-icon.png";
import itIcon from "@/assets/it-icon.png";
import roboticsIcon from "@/assets/robotics-icon.png";
import cybersecurityIcon from "@/assets/cybersecurity-icon.png";

const techFields = [
  {
    title: "AI & Machine Learning",
    description: "Explore intelligent systems and neural networks shaping the future",
    icon: aiMlIcon,
    colorClass: "bg-gradient-to-br from-tech-ai/20 to-tech-ai/40",
  },
  {
    title: "Data Science",
    description: "Unlock insights from data with advanced analytics and visualization",
    icon: dataScienceIcon,
    colorClass: "bg-gradient-to-br from-tech-data/20 to-tech-data/40",
  },
  {
    title: "Information Technology",
    description: "Build robust infrastructure and cloud computing solutions",
    icon: itIcon,
    colorClass: "bg-gradient-to-br from-tech-it/20 to-tech-it/40",
  },
  {
    title: "Robotics",
    description: "Design autonomous systems and intelligent automation",
    icon: roboticsIcon,
    colorClass: "bg-gradient-to-br from-tech-robotics/20 to-tech-robotics/40",
  },
  {
    title: "Cybersecurity",
    description: "Protect digital assets with cutting-edge security protocols",
    icon: cybersecurityIcon,
    colorClass: "bg-gradient-to-br from-tech-cyber/20 to-tech-cyber/40",
  },
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-royal">
        <img 
          src={techBg} 
          alt="Tech Background" 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-20 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            Shape the Future with Technology
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover cutting-edge fields that are revolutionizing industries and creating tomorrow's innovations
          </p>
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            Explore Now
          </Button>
        </div>

        {/* Tech Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {techFields.map((field, index) => (
            <div key={field.title} className="animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
              <TechCard {...field} />
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
    </section>
  );
};
