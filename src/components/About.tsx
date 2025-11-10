import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2, Brain, Rocket, Globe2 } from "lucide-react";

const skills = {
  languages: ["Python", "Java", "SQL", "C"],
  technical: ["PyTorch", "AI/ML", "Neural Networks", "Data Analysis", "Excel", "PowerPoint"],
  languages_spoken: ["English (fluent)", "Portuguese (fluent)", "German (fluent)", "French (basic)"],
};

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Experience building complete applications from frontend to backend",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Specialized in LLMs, multi-agent systems, and ML applications",
  },
  {
    icon: Rocket,
    title: "Entrepreneurship",
    description: "Passionate about building products that solve real problems",
  },
  {
    icon: Globe2,
    title: "Global Perspective",
    description: "Bridging technology across Atlanta and São Paulo",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <p className="text-lg leading-relaxed text-muted-foreground">
              CS undergrad at <span className="font-semibold text-foreground">Georgia Institute of Technology</span> passionate
              about AI, solving problems with technology, and sustainable impact.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Experience shipping LLM tooling, building multi-agent systems, and creating apps for startups and NGOs.
              Currently based in Atlanta, GA with roots in São Paulo, Brazil.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Interested in using technology for <span className="font-semibold text-foreground">financial inclusion</span> and
              <span className="font-semibold text-foreground"> scalable social impact</span>.
            </p>
          </div>

          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.technical.map((skill) => (
                  <Badge key={skill} variant="secondary" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Languages Spoken
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages_spoken.map((lang) => (
                  <Badge key={lang} variant="secondary" className="px-4 py-2 text-sm">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <Card
              key={highlight.title}
              className="p-6 hover:shadow-card-hover transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center mb-4">
                <highlight.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
