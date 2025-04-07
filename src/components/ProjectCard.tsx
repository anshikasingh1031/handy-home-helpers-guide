
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import DifficultyBadge from './DifficultyBadge';
import { Project } from '@/lib/project-data';
import { Clock, DollarSign } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card className="overflow-hidden hover:border-accent1 transition-all duration-300">
      <div className="h-[180px] bg-muted flex items-center justify-center">
        <div className="text-2xl font-bold text-muted-foreground/60">
          {project.title.split(' ').map(word => word[0]).join('')}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold">{project.title}</h3>
          <DifficultyBadge difficulty={project.difficulty} />
        </div>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{project.estimatedTime}</span>
          </div>
          <div className="flex items-center">
            <DollarSign className="h-4 w-4 mr-1" />
            <span>{project.estimatedCost}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-secondary p-4">
        <a 
          href={`/project/${project.id}`}
          className="w-full text-center text-accent1 font-medium hover:underline"
        >
          View Details
        </a>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
