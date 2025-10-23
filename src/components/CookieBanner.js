import React from 'react';
import { X } from 'lucide-react';

const CookieBanner = ({ onClose }) => {
  return (
    <div className="fixed bottom-6 left-6 right-6 z-50 max-w-md mx-auto">
      <div className="cookie-banner rounded-xl p-6 shadow-lg border border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-semibold text-gray-900">
            This site uses cookies
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          We and selected third parties use cookies (or similar technologies) for technical purposes, to enhance and analyze site usage, to support our marketing efforts, and for other purposes described below.
        </p>
        
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          By clicking "Accept all", you agree to the storing of cookies on your device for these purposes.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3">
          <button 
            onClick={onClose}
            className="btn-outline flex-1"
          >
            Deny
          </button>
          <button 
            onClick={onClose}
            className="btn-secondary flex-1"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;