import { useEffect, useState, useRef } from "react";

interface StatItem {
  number: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0]);
  const sectionRef = useRef<HTMLElement>(null);

  const stats: StatItem[] = [
    { number: 20, label: "Anos de Experiência", prefix: "+", suffix: "" },
    { number: 99, label: "Pacientes Satisfeitos", prefix: "", suffix: "%" },
    { number: 2000, label: "Sorrisos Transformados", prefix: "+", suffix: "" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let currentCount = 0;
        const increment = stat.number / 100;
        
        const timer = setInterval(() => {
          currentCount += increment;
          if (currentCount >= stat.number) {
            currentCount = stat.number;
            clearInterval(timer);
          }
          
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.floor(currentCount);
            return newCounts;
          });
        }, 30);

        return () => clearInterval(timer);
      });
    }
  }, [isVisible]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-950/40 to-background"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-1/4 w-16 h-16 bg-secondary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Resultados que{" "}
            <span className="text-transparent bg-gradient-secondary bg-clip-text">
              Comprovam
            </span>{" "}
            nossa Excelência
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Números que refletem nosso comprometimento com a satisfação 
            e o bem-estar de cada paciente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`counter-item text-center p-8 bg-gradient-card rounded-2xl shadow-card border border-border/50 hover:shadow-glow transition-smooth`}
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-20 scale-150"></div>
                
                {/* Counter number */}
                <div className="relative text-5xl lg:text-6xl font-bold text-secondary mb-4">
                  {stat.prefix}
                  <span className="tabular-nums">
                    {counts[index].toLocaleString()}
                  </span>
                  {stat.suffix}
                </div>
              </div>
              
              {/* Label */}
              <p className="text-lg font-semibold text-foreground/90">
                {stat.label}
              </p>
              
              {/* Decorative line */}
              <div className="w-16 h-1 bg-gradient-secondary rounded-full mx-auto mt-4"></div>
            </div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <div className="flex justify-center mt-16">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full bg-secondary/50 animate-pulse`}
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;