// // // src/components/AdminLogin.tsx
// // import React, { useState } from 'react';
// // import axios from 'axios';

// // interface AdminLoginProps {
// //   setToken: (token: string) => void;
// // }

// // export const AdminLogin: React.FC<AdminLoginProps> = ({ setToken }) => {
// //   const [adminData, setAdminData] = useState({
// //     username: '',
// //     password: '',
// //   });

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
// //     const { name, value } = e.target;
// //     setAdminData((prev) => ({
// //       ...prev,
// //       [name]: value,
// //     }));
// //   };

// //   const handleAdminLogin = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     try {
// //       const response = await axios.post('http://localhost:3000/admin/login', adminData);
// //       setToken(response.data.token);
// //       alert('Admin logged in successfully');
// //     } catch (error) {
// //       console.error('Error logging in:', error);
// //       alert('Failed to log in');
// //     }
// //   };

// //   return (
// //     <div>
// //       <h2>Admin Login</h2>
// //       <form onSubmit={handleAdminLogin}>
// //         <input
// //           type="text"
// //           name="username"
// //           placeholder="Username"
// //           value={adminData.username}
// //           onChange={handleChange}
// //           required
// //         />
// //         <input
// //           type="password"
// //           name="password"
// //           placeholder="Password"
// //           value={adminData.password}
// //           onChange={handleChange}
// //           required
// //         />
// //         <button type="submit">Login</button>
// //       </form>
// //     </div>
// //   );
// // };
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// interface AdminLoginProps {
//   setToken: (token: string) => void;
// }

// export const AdminLogin: React.FC<AdminLoginProps> = ({ setToken }) => {
//   const [adminData, setAdminData] = useState({
//     username: '',
//     password: '',
//   });
//   const navigate = useNavigate();

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setAdminData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleAdminLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/admin/login', adminData);
//       setToken(response.data.token);
//       alert('Admin logged in successfully');
//       navigate('/admin/dashboard'); // Redirect to the dashboard after login
//     } catch (error) {
//       console.error('Error logging in:', error);
//       alert('Failed to log in');
//     }
//   };

//   return (
//     <div>
//       <h2>Admin Login</h2>
//       <form onSubmit={handleAdminLogin}>
//         <input
//           type="text"
//           name="username"
//           placeholder="Username"
//           value={adminData.username}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password"
//           value={adminData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };