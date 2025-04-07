
import React from 'react';
import { FEATURED_PROJECTS } from '@/lib/project-data';
import ProjectCard from './ProjectCard';

const FeaturedProjects: React.FC = () => {
  return (
    <section className="py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-wood-dark">Featured Projects</h2>
          <p className="text-muted-foreground mt-2">Popular home improvement projects to get you started</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
