import React from 'react';
import { Globe, Clock, Trophy, Users } from 'lucide-react';
import Container from './layout/Container';
import FeatureCard from './features/FeatureCard';

const features = [
  {
    icon: Globe,
    title: 'Global Coverage',
    description: 'Access sports events and betting markets from around the world, 24/7.'
  },
  {
    icon: Clock,
    title: 'Live Betting',
    description: 'Place bets in real-time with competitive odds and instant updates.'
  },
  {
    icon: Trophy,
    title: 'Competitive Odds',
    description: 'Get the best odds in the market for maximum potential returns.'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join a growing community of sports betting enthusiasts.'
  }
];

const Features = () => {
  return (
    <div className="py-20 bg-black/50">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold">Why Choose BLACKPRO</h2>
          <p className="mt-4 text-gray-400">Experience the best in online sports betting</p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Features;