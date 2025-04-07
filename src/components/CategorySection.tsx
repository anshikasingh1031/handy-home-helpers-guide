
import React from 'react';
import { CATEGORIES } from '@/lib/project-data';
import CategoryCard from './CategoryCard';

const CategorySection: React.FC = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-wood-dark">Explore By Category</h2>
          <p className="text-muted-foreground mt-2">Find the perfect project for your needs</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {CATEGORIES.map((category) => (
            <CategoryCard 
              key={category.id}
              id={category.id}
              name={category.name}
              description={category.description}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
