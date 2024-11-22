// import React, { useState } from 'react';
// import { ProcessModal } from './ProcessModal';
// export function Header() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   return (
//     <header 
//       id="home" // Add this line
//       className="relative h-screen flex items-center justify-center"
//     >
//       <div 
//         className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//         style={{
//           backgroundImage: 'url("https://www.raypcb.com/wp-content/uploads/2021/03/a63ca0232bb6e9d-2.jpg")',
//           filter: 'brightness(0.7)'
//         }}
//       ></div>
//      <div className="relative text-center text-white z-10 max-w-4xl mx-auto px-4">
//         <h1 className="text-5xl font-bold mb-4">Quick Circuit India Pvt. Ltd.</h1>
//         <p className="text-xl mb-8">
//           A leading manufacturer and designer of printed circuit boards (PCBs) located in IMT Bawal, Rewari, Haryana, India
//         </p>
//         <button
//           onClick={() => setIsModalOpen(true)}
//           className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//         >
//           <span className="absolute inset-0 w-full h-full bg-white/30 group-hover:scale-x-150 group-hover:scale-y-150 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"></span>
//           <span className="relative">Explore Our Process</span>
//         </button>
//       </div>
//       <ProcessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

//     </header>
//   );
// }
import React, { useState } from 'react';
import { ProcessModal } from './ProcessModal';

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="relative h-screen grid grid-cols-3 items-center">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url("https://i.ibb.co/xGwMBjq/landing-page.jpg")',
        filter: 'brightness(1)'
      }}
    ></div>
  
    {/* Textual Content */}
    <div className="relative text-purple-800 z-10 col-span-1 px-8">
      <h1 className="text-5xl font-bold mb-4">Durga Communications</h1>
      <p className="text-xl mb-8 text-gray-700">
        Your trusted partner for high-quality ID card manufacturing and supplies.
        Serving educational institutions, offices, and organizations across Jharsuguda,
        Sambalpur, Belpahar, Brajrajnagar, and beyond.
      </p>
      <button
        onClick={() => setIsModalOpen(true)}
        className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full overflow-hidden transition-all duration-300 ease-in-out hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        <span className="absolute inset-0 w-full h-full bg-white/30 group-hover:scale-x-150 group-hover:scale-y-150 transition-all duration-500 ease-out opacity-0 group-hover:opacity-100"></span>
        <span className="relative">About Us</span>
      </button>
    </div>
  
    {/* Placeholder for Empty Columns */}
    <div className="col-span-2"></div>
  
    {/* Modal Component */}
    <ProcessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
  </header>
  
  

  );
}