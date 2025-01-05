import React from 'react';
import { ChevronRight } from 'lucide-react';
import Container from './layout/Container';
import Button from './ui/Button';

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <Container>
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent pb-2">
            Your Premier Sports Betting Platform
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the thrill of sports betting with competitive odds, live betting, and secure transactions. Join thousands of satisfied users today.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button variant="primary" className="px-8 py-3 text-lg flex items-center">
              Get Started <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="secondary" className="px-8 py-3 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;