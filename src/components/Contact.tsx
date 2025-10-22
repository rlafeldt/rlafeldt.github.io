import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Connect</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Interested in collaborating on projects, internships, or just want to chat about tech and social impact?
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-8 hover:shadow-card-hover transition-smooth animate-fade-in-up">
            <Mail className="w-8 h-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground mb-4">
              Drop me a line anytime
            </p>
            <Button asChild variant="outline" className="w-full">
              <a href="mailto:rlafeldt3@gatech.edu">
                rlafeldt3@gatech.edu
              </a>
            </Button>
          </Card>

          <Card className="p-8 hover:shadow-card-hover transition-smooth animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <MapPin className="w-8 h-8 mb-4 text-primary" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-muted-foreground mb-4">
              Currently based in
            </p>
            <p className="font-medium">Atlanta, GA</p>
            <p className="text-sm text-muted-foreground">Roots in São Paulo, Brazil</p>
          </Card>
        </div>

        <Card className="p-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h3 className="text-xl font-semibold mb-6 text-center">Connect on Social</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild size="lg" className="gap-2">
              <a href="https://github.com/rlafeldt" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="https://www.linkedin.com/in/raphael-lafeldt/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
