import React from 'react';
import { Trophy } from 'lucide-react';
import Container from './layout/Container';
import Button from './ui/Button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
      <Container>
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Trophy className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold">BLACKPRO</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Sports</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Live Betting</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Promotions</a>
              <Button variant="primary">Sign Up</Button>
              <Button variant="secondary">Login</Button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;