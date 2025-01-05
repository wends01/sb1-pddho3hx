import React from 'react';
import { useAuth } from '../components/auth/AuthProvider';
import { User } from 'lucide-react';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="text-center py-12">
        <p>Please sign in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <User className="h-20 w-20 mx-auto text-blue-500 mb-4" />
        <h1 className="text-4xl font-bold">Your Profile</h1>
        <p className="mt-4 text-gray-400">{user.email}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 rounded-xl bg-gray-800/50">
          <h3 className="text-xl font-semibold mb-4">Account Details</h3>
          <p className="text-gray-400">Email: {user.email}</p>
          <p className="text-gray-400">Member since: {new Date(user.metadata.creationTime!).toLocaleDateString()}</p>
        </div>
        
        <div className="p-6 rounded-xl bg-gray-800/50">
          <h3 className="text-xl font-semibold mb-4">Betting History</h3>
          <p className="text-gray-400">No bets placed yet.</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;