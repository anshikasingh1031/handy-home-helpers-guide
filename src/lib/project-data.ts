
export type Difficulty = 'beginner' | 'intermediate' | 'advanced';

export type ProjectCategory = 
  | 'interior_design' 
  | 'plumbing' 
  | 'electrical' 
  | 'painting' 
  | 'furniture' 
  | 'garden' 
  | 'smart_home' 
  | 'repairs';

export interface Tool {
  id: string;
  name: string;
  imageUrl?: string;
  purpose: string;
  forBeginners: boolean;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  difficulty: Difficulty;
  estimatedTime: string;
  estimatedCost: string;
  tools: string[];
  materials: string[];
  imageUrl?: string;
}

export const CATEGORIES = [
  { 
    id: 'interior_design',
    name: 'Interior Design', 
    description: 'Transform your living spaces',
    icon: 'home'
  },
  { 
    id: 'plumbing', 
    name: 'Plumbing', 
    description: 'Fix leaks and install fixtures',
    icon: 'droplet' 
  },
  { 
    id: 'electrical', 
    name: 'Electrical', 
    description: 'Wire, install, and repair',
    icon: 'zap' 
  },
  { 
    id: 'painting', 
    name: 'Painting', 
    description: 'Color your world',
    icon: 'palette' 
  },
  { 
    id: 'furniture', 
    name: 'Furniture', 
    description: 'Build and assemble',
    icon: 'sofa' 
  },
  { 
    id: 'garden', 
    name: 'Garden & Outdoor', 
    description: 'Create your outdoor oasis',
    icon: 'flower' 
  },
  { 
    id: 'smart_home', 
    name: 'Smart Home', 
    description: 'Automate your living space',
    icon: 'wifi' 
  },
  { 
    id: 'repairs', 
    name: 'DIY Repairs', 
    description: 'Fix everyday issues',
    icon: 'hammer' 
  },
];

export const TOOLS: Tool[] = [
  {
    id: 'hammer',
    name: 'Claw Hammer',
    purpose: 'For driving and removing nails',
    forBeginners: true
  },
  {
    id: 'screwdriver_set',
    name: 'Screwdriver Set',
    purpose: 'For installing and removing screws',
    forBeginners: true
  },
  {
    id: 'tape_measure',
    name: 'Tape Measure',
    purpose: 'For taking accurate measurements',
    forBeginners: true
  },
  {
    id: 'level',
    name: 'Level',
    purpose: 'For ensuring things are straight',
    forBeginners: true
  },
  {
    id: 'wrench_set',
    name: 'Wrench Set',
    purpose: 'For tightening and loosening fasteners',
    forBeginners: true
  },
  {
    id: 'drill',
    name: 'Power Drill',
    purpose: 'For making holes and driving screws',
    forBeginners: true
  },
  {
    id: 'pliers',
    name: 'Pliers',
    purpose: 'For gripping and bending materials',
    forBeginners: true
  },
  {
    id: 'utility_knife',
    name: 'Utility Knife',
    purpose: 'For cutting various materials',
    forBeginners: true
  },
  {
    id: 'circular_saw',
    name: 'Circular Saw',
    purpose: 'For making straight cuts in wood',
    forBeginners: false
  },
  {
    id: 'jigsaw',
    name: 'Jigsaw',
    purpose: 'For cutting curves and patterns',
    forBeginners: false
  }
];

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'bathroom_remodel',
    title: 'Bathroom Sink Installation',
    description: 'Replace your old bathroom sink with a new one for a fresh look.',
    category: 'plumbing',
    difficulty: 'intermediate',
    estimatedTime: '3-4 hours',
    estimatedCost: '$150-300',
    tools: ['wrench_set', 'pliers', 'utility_knife'],
    materials: ['New sink', 'Plumber\'s putty', 'Silicone sealant', 'Supply lines'],
  },
  {
    id: 'wall_paint',
    title: 'Living Room Accent Wall',
    description: 'Create a beautiful accent wall to add character to your living room.',
    category: 'painting',
    difficulty: 'beginner',
    estimatedTime: '4-6 hours',
    estimatedCost: '$50-100',
    tools: ['tape_measure', 'level'],
    materials: ['Paint', 'Painter\'s tape', 'Roller', 'Brushes', 'Drop cloths'],
  },
  {
    id: 'smart_thermostat',
    title: 'Smart Thermostat Installation',
    description: 'Upgrade to a smart thermostat to save energy and control remotely.',
    category: 'smart_home',
    difficulty: 'beginner',
    estimatedTime: '1-2 hours',
    estimatedCost: '$150-250',
    tools: ['screwdriver_set'],
    materials: ['Smart thermostat', 'Mounting hardware'],
  },
  {
    id: 'bookshelf',
    title: 'Built-in Bookshelf',
    description: 'Create custom built-in bookshelves for your living room or office.',
    category: 'furniture',
    difficulty: 'advanced',
    estimatedTime: '2-3 days',
    estimatedCost: '$200-500',
    tools: ['drill', 'level', 'circular_saw', 'tape_measure'],
    materials: ['Wood boards', 'Wood screws', 'Wood glue', 'Finish nails', 'Paint or stain'],
  }
];
