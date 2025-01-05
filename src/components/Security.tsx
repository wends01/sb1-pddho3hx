import React from 'react';
import { Shield, Lock, UserCheck } from 'lucide-react';

const Security = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Secure & Trusted Platform</h2>
          <p className="mt-4 text-gray-400">Your security is our top priority</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50">
            <Shield className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Licensed & Regulated</h3>
            <p className="text-gray-400">Fully compliant with international gambling regulations and standards.</p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50">
            <Lock className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
            <p className="text-gray-400">Advanced encryption for all financial transactions and personal data.</p>
          </div>
          <div className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50">
            <UserCheck className="h-12 w-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Responsible Gaming</h3>
            <p className="text-gray-400">Tools and support for maintaining healthy betting habits.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;