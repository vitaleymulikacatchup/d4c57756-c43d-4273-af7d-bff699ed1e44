import React from 'react';
import { X, ChevronRight, MessageCircle } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-25" onClick={onClose} />
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-sm mobile-menu shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Menu</h2>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        
        <div className="p-6">
          <nav className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Menu</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 flex items-center justify-between">Case Studies <ChevronRight className="w-4 h-4" /></a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 flex items-center justify-between">Blog <ChevronRight className="w-4 h-4" /></a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 flex items-center justify-between">Contacts <ChevronRight className="w-4 h-4" /></a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 flex items-center justify-between">About Us <ChevronRight className="w-4 h-4" /></a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 flex items-center justify-between">FAQ <ChevronRight className="w-4 h-4" /></a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-gray-900 flex items-center justify-between">Web Development <ChevronRight className="w-4 h-4" /></a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 flex items-center justify-between">Mobile Development <ChevronRight className="w-4 h-4" /></a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900 flex items-center justify-between">Support and Maintenance <ChevronRight className="w-4 h-4" /></a></li>
              </ul>
            </div>
          </nav>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-3 mb-4">
              <MessageCircle className="w-5 h-5 text-gray-600" />
              <div>
                <p className="text-sm text-gray-600">Feel free to drop us a note:</p>
                <a href="mailto:contact@sargas.io" className="text-primary-600 hover:text-primary-700 font-medium text-sm">
                  contact@sargas.io
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900">Terms of Use</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;