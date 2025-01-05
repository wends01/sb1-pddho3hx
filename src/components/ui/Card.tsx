import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800/80 transition-colors ${className}`}>
      {children}
    </div>
  );
};

export default Card;