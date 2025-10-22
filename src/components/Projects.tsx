import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Tag } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "Multi-Agent Compliance Bot",
    description: "AI system reducing compliance false positives, saving $50K daily",
    longDescription: "Built during my AI Prompt Engineer internship at CloudWalk Inc. Developed a multi-agent system to reduce compliance and risk false positives, improving operational efficiency. Also implemented Python linear optimization for receivables allocation, reducing daily funding costs by ~$50,000.",
    date: "August 2025",
    type: "Internship",
    technologies: ["Python", "LLMs", "Multi-agent Systems", "Linear Optimization"],
    impact: "$50K daily savings",
  },
  {
    title: "GT Movies Store",
    description: "Full-stack Django e-commerce platform for movie purchasing and reviews",
    longDescription: "Full-stack Django e-commerce web application developed for CS 2340. Implemented complete user authentication, movie catalog browsing, shopping cart functionality, and review system. Features responsive design with comprehensive order management and administrative controls.",
    date: "September 2025",
    type: "Academic",
    technologies: ["Django 5.0", "Python", "SQLite", "HTML/CSS"],
    features: [
      "User registration/authentication with secure login",
      "Movie catalog with search and filtering",
      "Shopping cart and order processing",
      "Review system with CRUD operations",
      "Responsive GUI for all devices",
    ],
    videoLink: "https://www.youtube.com/watch?v=oCEPN5af3t8",
  },
  {
    title: "ProsperoJus App",
    description: "Automated legal-claim data collection and validation system",
    longDescription: "Automated legal-claim data collection and validation system with contract generation and portfolio analytics dashboards. Built during my internship to streamline legal claim processing and improve operational efficiency.",
    date: "June 2024",
    type: "Internship",
    technologies: ["Python", "ML", "Data Scraping"],
  },
  {
    title: "Transformation via Code",
    description: "Online educational platform delivering free Flutter course",
    longDescription: "Online educational platform delivering a free interactive Flutter course. Successfully guided 30 students through completion, with each shipping a mobile app capstone project. Focused on making mobile development accessible to underserved communities.",
    date: "March 2024",
    type: "Education",
    technologies: ["Flutter", "Educational Platform Development"],
    impact: "30 students completed",
  },
  {
    title: "Mãos na Massa NGO App",
    description: "Flutter mobile app for volunteer coordination and project tracking",
    longDescription: "Flutter mobile app used by 80+ volunteers to join builds and track construction progress for community projects. Features include volunteer coordination, progress tracking, and leadership dashboard for logistics management. Helped the NGO expand to additional schools.",
    date: "November 2023",
    type: "NGO",
    technologies: ["Flutter", "Firebase", "Project Management"],
    impact: "80+ volunteers",
  },
];

const typeColors: Record<string, string> = {
  Internship: "default",
  Academic: "secondary",
  Education: "outline",
  NGO: "outline",
};

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 px-4 bg-secondary/30">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Building solutions that make an impact, from AI systems to educational platforms
          </p>
        </div>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden hover:shadow-card-hover transition-smooth animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-3 items-start justify-between mb-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                  </div>
                  <div className="flex gap-2 items-center flex-shrink-0">
                    <Badge variant={typeColors[project.type] as any}>
                      <Tag className="w-3 h-3 mr-1" />
                      {project.type}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </span>
                  {project.impact && (
                    <Badge variant="outline" className="font-semibold">
                      {project.impact}
                    </Badge>
                  )}
                </div>

                {expandedProject === index && (
                  <div className="mb-4 space-y-4 animate-fade-in">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>
                    
                    {project.features && (
                      <div>
                        <h4 className="font-semibold mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature) => (
                            <li key={feature} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {project.videoLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.videoLink} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Watch Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                  className="text-primary hover:text-primary"
                >
                  {expandedProject === index ? "Show less" : "Read more"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
