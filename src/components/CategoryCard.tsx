
import React from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import * as Icons from 'lucide-react';

interface CategoryCardProps {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ id, name, description, icon }) => {
  // Get the icon component dynamically
  const IconComponent = (Icons as any)[icon.charAt(0).toUpperCase() + icon.slice(1)];
  
  return (
    <Card className="hover:border-wood transition-colors overflow-hidden group">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="h-16 w-16 rounded-full bg-wood-light/30 flex items-center justify-center mb-4 group-hover:bg-wood-light transition-colors">
          {IconComponent && <IconComponent className="h-8 w-8 text-wood-dark" />}
        </div>
        <h3 className="text-xl font-bold mb-2 text-wood-dark">{name}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="bg-wood-light/10 p-4 text-center">
        <a 
          href={`/category/${id}`} 
          className="w-full text-accent2 font-medium hover:underline"
        >
          Explore projects
        </a>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
