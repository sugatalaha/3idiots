// import React from 'react'
// import { Link } from 'react-router-dom'
// import { MessageSquare,Settings,LogOut,User } from 'lucide-react'
// import { useAuthStore } from '../store/useAuthStore'

// const Navbar = () => {
//   const {authUser,logout} = useAuthStore()
//   return (
//     <header className='bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 backdrop-blur-lg bg-base-100/80'>
//       <div className='container mx-auth px-4 h-16'>
//         <div className='flex items-center justify-between h-full'>

//         <div className="flex items-center gap-8">
//             <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
//               <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
//                 <MessageSquare className="w-5 h-5 text-primary" />
//               </div>
//               <h1 className="text-lg font-bold">Be Healthy</h1>
//             </Link>
//         </div>

//         <div className='flex items-center gap-2'>

//             {authUser && (
//               <>
//                 <Link to={"/profile"} className={`btn btn-sm gap-2`}>
//                   <User className="size-5" />
//                   <span className="hidden sm:inline">Profile</span>
//                 </Link>

//                 <button className="flex gap-2 items-center" onClick={logout}>
//                   <LogOut className="size-5" />
//                   <span className="hidden sm:inline">Logout</span>
//                 </button>
//               </>
//             )}
//         </div>

//         </div>
//       </div>
//     </header>
//   )
// }

// export default Navbar

// import React from "react";
// import { Link } from "react-router-dom";
// import { MessageSquare, LogOut, User } from "lucide-react";
// import { useAuthStore } from "../store/useAuthStore";

// const Navbar = () => {
//   const { authUser, logout } = useAuthStore();

//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
//       <div className="container-fluid">
//         {/* Logo and Brand */}
//         <Link to="/" className="navbar-brand d-flex align-items-center">
//           <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle p-2 me-2">
//             <MessageSquare className="text-primary" size={20} />
//           </div>
//           <h1 className="h5 mb-0 fw-bold">Be Healthy</h1>
//         </Link>

//         {/* Navbar Toggler for Mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Navigation Items */}
//         <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//           <ul className="navbar-nav">
//             {authUser && (
//               <>
//                 {/* Profile Link */}
//                 <li className="nav-item">
//                   <Link to="/profile" className="btn btn-outline-primary btn-sm me-2">
//                     <User size={18} className="me-1" />
//                     <span className="d-none d-sm-inline">Profile</span>
//                   </Link>
//                 </li>

//                 {/* Logout Button */}
//                 <li className="nav-item">
//                   <button className="btn btn-danger btn-sm" onClick={logout}>
//                     <LogOut size={18} className="me-1" />
//                     <span className="d-none d-sm-inline">Logout</span>
//                   </button>
//                 </li>
//               </>
//             )}
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import { HeartPulse, LogOut, User } from "lucide-react"; // Changed icon to Heartbeat
import { useAuthStore } from "../store/useAuthStore";



const Navbar = () => {
  const { authUser, logout } = useAuthStore();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">
      <div className="container-fluid">
        {/* Logo and Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <div className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded-circle p-2 me-2">
            <HeartPulse className="text-primary" size={20} /> {/* Updated icon */}
          </div>
          <h1 className="h5 mb-0 fw-bold">Be Healthy</h1>
        </Link>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            {authUser && (
              <>
                {/* Profile Link */}
                <li className="nav-item">
                  <Link to="/profile" className="btn btn-outline-primary btn-sm me-2">
                    <User size={18} className="me-1" />
                    <span className="d-none d-sm-inline">Profile</span>
                  </Link>
                </li>

                {/* Logout Button */}
                <li className="nav-item">
                  <button className="btn btn-danger btn-sm" onClick={logout}>
                    <LogOut size={18} className="me-1" />
                    <span className="d-none d-sm-inline">Logout</span>
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
