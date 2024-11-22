// import React from 'react';

// export function ProductsSection() {
//   const products = [
//     {
//       title: "Single Sided PCBs",
//       capacity: "3000 SQMTR/month",
//       description: "High-quality single-sided PCBs for various applications"
//     },
//     {
//       title: "Double Sided PCBs",
//       capacity: "2000 SQMTR/month",
//       description: "Advanced double-sided PCBs with superior performance"
//     },
//     {
//       title: "Metal Core PCBs",
//       capacity: "2500 SQMTR/month",
//       description: "Specialized metal core PCBs for thermal management"
//     }
//   ];

//   return (
//     <section className="py-16 bg-gray-50" id="products">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {products.map((product, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
//               <h3 className="text-xl font-bold mb-2">{product.title}</h3>
//               <p className="text-gray-600 mb-4">{product.description}</p>
//               <p className="text-indigo-600 font-semibold">
//                 Production Capacity: {product.capacity}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import React from 'react';
import pcb1 from '../images/single side.png'; // Adjust the import path as needed
import pcb2 from '../images/double side.jpg';
import pcb3 from '../images/pvc.jpg';

export function ProductsSection() {
  const products = [
    {
      title: "Single Sided Ids",
      //capacity: "3000 SQMTR/month",
      description: "Durable and professional single-sided ID cards designed for schools, offices, and organizations.",
      image: pcb1
    },
    {
      title: "Double Sided Ids",
      //capacity: "2000 SQMTR/month",
      description: "Advanced double-sided ID cards with enhanced branding and information space.",
      image: pcb2
    },
    {
      title: "PVC Cards",
      //capacity: "2500 SQMTR/month",
      description: "Premium-quality PVC ID cards with vibrant colors and long-lasting durability.",
      image: pcb3
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Primary Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-64 object-cover rounded-t-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-indigo-600 font-semibold">
               
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}