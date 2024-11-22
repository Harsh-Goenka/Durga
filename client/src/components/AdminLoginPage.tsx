// import React, { useState } from 'react';
// import { AdminLogin } from './AdminLogin';
// import { UserTable } from './User Table';

// export const AdminLoginPage: React.FC = () => {
//     const [token, setToken] = useState<string | null>(null);

//     return (
//         <div>
//             {!token ? (
//                 <AdminLogin setToken={setToken} />
//             ) : (
//                 <div>
//                     <h2>Welcome, Admin!</h2>
//                     <User Table token={token} />
//                 </div>
//             )}
//         </div>
//     );
// };