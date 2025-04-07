
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { TOOLS, CATEGORIES, ProjectCategory } from '@/lib/project-data';
import { Tool } from '@/components/ui/tool';
import { Hammer } from 'lucide-react';

const ToolFinder: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | ''>('');
  const [beginnerOnly, setBeginnerOnly] = useState(false);
  const [toolResults, setToolResults] = useState<typeof TOOLS>([]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let filtered = [...TOOLS];
    
    if (beginnerOnly) {
      filtered = filtered.filter(tool => tool.forBeginners);
    }
    
    // In a real application, we would filter by category as well
    // This is simplified for the demo
    
    setToolResults(filtered);
  };
  
  return (
    <div className="my-10">
      <div className="container mx-auto px-4">
        <Card className="bg-white shadow-lg border-wood/20">
          <CardHeader className="bg-wood-light/20">
            <CardTitle className="text-2xl text-center flex items-center justify-center gap-2">
              <Hammer className="h-6 w-6 text-accent1" />
              Tool Finder
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Category</label>
                  <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value as ProjectCategory)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      {CATEGORIES.map((category) => (
                        <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-end pb-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="beginner" 
                      checked={beginnerOnly} 
                      onCheckedChange={() => setBeginnerOnly(!beginnerOnly)} 
                    />
                    <label htmlFor="beginner" className="text-sm font-medium">
                      Beginner-friendly tools only
                    </label>
                  </div>
                </div>
              </div>
              <Button type="submit" className="w-full bg-accent2 hover:bg-accent2/90">Find Tools</Button>
            </form>
            
            {toolResults.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-bold mb-4">Recommended Tools:</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {toolResults.map(tool => (
                    <div key={tool.id} className="border p-4 rounded-md bg-muted/50">
                      <h4 className="font-bold">{tool.name}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{tool.purpose}</p>
                      {tool.forBeginners && (
                        <span className="inline-block mt-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                          Beginner-friendly
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ToolFinder;
