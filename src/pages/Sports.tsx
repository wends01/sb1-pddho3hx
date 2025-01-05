import React from 'react';
import { Trophy } from 'lucide-react';

const Sports = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Sports Betting</h1>
        <p className="mt-4 text-gray-400">Place your bets on your favorite sports events</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Placeholder for sports betting content */}
        <div className="p-6 rounded-xl bg-gray-800/50">
          <Trophy className="h-12 w-12 text-blue-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Coming Soon</h3>
          <p className="text-gray-400">Sports betting features are under development.</p>
        </div>
      </div>
    </div>
  );
};

export default Sports;