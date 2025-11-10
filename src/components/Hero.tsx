import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="mb-8 inline-block">
            <div className="relative w-40 h-40 mx-auto mb-6 transition-transform duration-300 hover:scale-110 cursor-pointer">
              <div className="absolute inset-0 gradient-primary rounded-full blur-xl opacity-50 animate-pulse" />
              <div className="relative w-full h-full rounded-full bg-card shadow-card overflow-hidden border-4 border-primary/20">
                <img
                  src={`${import.meta.env.BASE_URL}profile-photo.jpeg`}
                  alt="Raphael Lafeldt"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite]">
            Raphael Lafeldt
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-medium">
            Computer Science student at Georgia Tech focused on AI and FinTech
          </p>
          
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Builder of data-driven products with real-world impact
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button size="lg" asChild className="gap-2 shadow-lg hover:shadow-xl transition-shadow">
              <a href={`${import.meta.env.BASE_URL}resume.pdf`} download="Raphael_Lafeldt_Resume.pdf">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="gap-2">
              <a href="#contact">
                <Mail className="w-5 h-5" />
                Get in Touch
              </a>
            </Button>
          </div>

          <div className="flex gap-4 justify-center">
            <a 
              href="https://github.com/rlafeldt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card shadow-card hover:shadow-card-hover transition-smooth flex items-center justify-center hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/raphael-lafeldt/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-card shadow-card hover:shadow-card-hover transition-smooth flex items-center justify-center hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:rlafeldt3@gatech.edu"
              className="w-12 h-12 rounded-full bg-card shadow-card hover:shadow-card-hover transition-smooth flex items-center justify-center hover:scale-110"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <div className="mt-16 animate-float">
            <a href="#about" className="inline-block text-muted-foreground hover:text-primary transition-smooth">
              <ArrowDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shimmer {
          to {
            background-position: -200% center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
