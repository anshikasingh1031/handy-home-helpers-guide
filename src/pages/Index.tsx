
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import FeaturedProjects from '@/components/FeaturedProjects';
import ToolFinder from '@/components/ToolFinder';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <CategorySection />
        <FeaturedProjects />
        <ToolFinder />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
