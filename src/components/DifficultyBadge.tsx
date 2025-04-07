
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { cn } from '@/lib/utils';
import { Difficulty } from '@/lib/project-data';

interface DifficultyBadgeProps {
  difficulty: Difficulty;
  className?: string;
}

const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ difficulty, className }) => {
  const badgeStyles = {
    beginner: "bg-green-100 text-green-800 border-green-200 hover:bg-green-100",
    intermediate: "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-100",
    advanced: "bg-red-100 text-red-800 border-red-200 hover:bg-red-100"
  };

  const labels = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced"
  };

  return (
    <Badge 
      variant="outline" 
      className={cn(badgeStyles[difficulty], className)}
    >
      {labels[difficulty]}
    </Badge>
  );
};

export default DifficultyBadge;
