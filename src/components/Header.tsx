
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header: React.FC = () => {
  return (
    <header className="border-b bg-wood-light/30">
      <div className="container mx-auto py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold tracking-tight text-wood-dark">
              <span className="text-accent1">Handy</span>
              <span>Helper</span>
            </h1>
          </div>
          
          <div className="w-full sm:w-auto flex items-center space-x-2">
            <div className="relative w-full sm:w-[260px]">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search projects..." className="pl-8" />
            </div>
            <Button variant="default" className="bg-accent1 hover:bg-accent1/90">Ask HandyHelper</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
