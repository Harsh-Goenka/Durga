// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { ProductsSection } from './components/ProductsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
// import { AdminLoginPage } from './components/AdminLoginPage'; // Import the AdminLoginPage

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <ProductsSection />
                <ContactSection />
                {/* <Link to="/admin-login">
                  <button className="mt-4 p-2 bg-indigo-600 text-white rounded">Admin Login</button>
                </Link> */}
              </>
            } />
            {/* <Route path="/admin-login" element={<AdminLoginPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
// src/App.tsx
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
// import { Navbar } from './components/Navbar';
// import { Header } from './components/Header';
// import { ProductsSection } from './components/ProductsSection';
// import { ContactSection } from './components/ContactSection';
// import { Footer } from './components/Footer';
// import { AdminLoginPage } from './components/AdminLoginPage';

// function App() {
//   const [isFading, setIsFading] = useState(false);
//   const navigate = useNavigate();

//   const handleAdminLoginClick = () => {
//     setIsFading(true);
//     setTimeout(() => {
//       navigate('/admin-login');
//     }, 300); // Match this duration to the CSS transition duration
//   };

//   return (
//     <div className={`min-h-screen ${isFading ? 'fade-out' : ''}`}>
//       <Navbar />
//       <main>
//         <Routes>
//           <Route path="/" element={
//             <div className={`transition-opacity duration-300 ${isFading ? 'opacity-0' : 'opacity-100'}`}>
//               <Header />
//               <ProductsSection />
//               <ContactSection />
//               <button onClick={handleAdminLoginClick} className="mt-4 p-2 bg-indigo-600 text-white rounded">Admin Login</button>
//             </div>
//           } />
//           <Route path="/admin-login" element={<AdminLoginPage />} />
//         </Routes>
//       </main>
//       <Footer />
//     </div>
//   );
// }

// // export default App;
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import { Navbar } from './components/Navbar';
// import { Header } from './components/Header';
// import { ProductsSection } from './components/ProductsSection';
// import { ContactSection } from './components/ContactSection';
// import { Footer } from './components/Footer';
// import { AdminLoginPage } from './components/AdminLoginPage';
// import { UserTable } from './components/UserTable'; // Import the UserTable component

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen">
//         <Navbar />
//         <Header />
//         <main>
//           <Routes>
//             <Route path="/" element={
//               <>
//                 <ProductsSection />
//                 <ContactSection />
//                 <Link to="/admin-login">
//                   <button className="mt-4 p-2 bg-indigo-600 text-white rounded">Admin Login</button>
//                 </Link>
//               </>
//             } />
//             <Route path="/admin-login" element={<AdminLoginPage />} />
//             <Route path="/admin/dashboard" element={<User Table token={/* pass the token here */} />} /> {/* Add the dashboard route */}
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;