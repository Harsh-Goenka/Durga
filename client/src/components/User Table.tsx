// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// interface User {
//     _id: string;
//     username: string;
//     // Add other user fields as necessary
// }

// export const UserTable: React.FC<{ token: string }> = ({ token }) => {
//     const [users, setUsers] = useState<User[]>([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const fetchUsers = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/admin/users', {
//                     headers: {
//                         Authorization: `Bearer ${token}`,
//                     },
//                 });
//                 setUsers(response.data);
//             } catch (error) {
//                 console.error('Error fetching users:', error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUsers();
//     }, [token]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="overflow-x-auto">
//             <table className="min-w-full border-collapse border border-gray-200">
//                 <thead>
//                     <tr>
//                         <th className="border border-gray-200 px-4 py-2">ID</th>
//                         <th className="border border-gray-200 px-4 py-2">Username</th>
//                         {/* Add other headers as necessary */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user._id}>
//                             <td className="border border-gray-200 px-4 py-2">{user._id}</td>
//                             <td className="border border-gray-200 px-4 py-2">{user.username}</td>
//                             {/* Add other user fields as necessary */}
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };