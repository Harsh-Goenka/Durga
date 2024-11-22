import React from 'react';

export function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-indigo-600">Durga Communications</span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600">Home</a>
              <a href="#products" className="text-gray-700 hover:text-indigo-600">Products</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}