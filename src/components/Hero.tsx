
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-wood-light/20 to-transparent">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-wood-dark mb-6">
            Make Your Home <span className="text-accent1">Better</span> Today
          </h1>
          <p className="text-lg md:text-xl text-tool-dark mb-8">
            Your friendly AI guide for all home improvement projects. From simple repairs to complex renovations - we're here to help!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-accent1 hover:bg-accent1/90">
              Find a Project <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-wood">
              Get Tool Recommendations
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
