
import React from 'react';
import { Hammer, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-wood-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center mb-4">
              <Hammer className="h-6 w-6 mr-2" />
              <h2 className="text-xl font-bold">HandyHelper</h2>
            </div>
            <p className="text-wood-light mb-4">
              Your friendly AI guide for all home improvement projects. From simple repairs to complex renovations - we're here to help!
            </p>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-wood-light transition-colors">Home</a></li>
              <li><a href="/projects" className="hover:text-wood-light transition-colors">Projects</a></li>
              <li><a href="/tools" className="hover:text-wood-light transition-colors">Tool Guide</a></li>
              <li><a href="/about" className="hover:text-wood-light transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-wood-light transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-4 text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-2 shrink-0" />
                <span>123 Home St, DIY City, HD 12345</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-2 shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-2 shrink-0" />
                <span>help@handyhelper.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} HandyHelper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
