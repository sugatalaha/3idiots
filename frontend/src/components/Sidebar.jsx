// import React, { useEffect, useState } from "react";
// import { useChatStore } from "../store/useChatStore.js";
// import SidebarSkeleton from "./skeletons/SidebarSkeleton";
// import { Users } from "lucide-react";
// import { useAuthStore } from "../store/useAuthStore.js";

// const Sidebar = () => {
//   const { users, selectedUser, getUsers, setSelectedUser, isUserLoading } = useChatStore();
//   const [showOnlineOnly, setShowOnlineOnly] = useState(false);
//   const { authUser, onlineUsers } = useAuthStore();

//   useEffect(() => {
//     getUsers();
//   }, [getUsers]);

//   // Determine filtered users based on role
//   /*const filteredUsers = users.filter((user) => 
//     authUser.role === "patient" ? user.role === "doctor" : user.role === "patient"
//   );*/
//   console.log(users);
//   //console.log(filteredUsers);

//   // Apply online-only filter if checked
//   const displayedUsers = showOnlineOnly ? users.filter(user => onlineUsers.includes(user._id)) : users;
//   //console.log(displayedUsers);

//   if (isUserLoading) return <SidebarSkeleton />;

//   return (
//     <aside className="h-full w-72 border-r border-base-300 flex flex-col transition-all duration-200">
//       <div className="border-b border-base-300 w-full p-5">
//         <div className="flex items-center gap-2 justify-between">
//           <div className="flex items-center gap-2">
//             <Users className="size-6" />
//             <span className="font-medium block">{authUser.role === "patient" ? "Doctors" : "Patients"}</span>
//           </div>
//         </div>
//         <div className="mt-3 flex items-center gap-2">
//           <label className="cursor-pointer flex items-center gap-2">
//             <input
//               type="checkbox"
//               checked={showOnlineOnly}
//               onChange={(e) => setShowOnlineOnly(e.target.checked)}
//               className="checkbox checkbox-sm"
//             />
//             <span className="text-sm">Show online only</span>
//           </label>
//           <span className="text-xs text-zinc-500">({onlineUsers.length - 1} online)</span>
//         </div>
//       </div>

//       {/* Users List */}
//       <div className="overflow-y-auto w-full py-3">
//         {displayedUsers.map((user) => (
//           <button
//             key={user._id}
//             onClick={() => setSelectedUser(user)}
//             className={`w-full p-3 flex items-center gap-3 
//               hover:bg-base-300 transition-colors
//               ${selectedUser?._id === user._id ? "bg-base-300 ring-1 ring-base-300" : ""}`}
//           >
//             <div className="relative">
//               <img
//                 src={user.profilePic || "/avatar.png"}
//                 alt={user.name}
//                 className="size-12 object-cover rounded-full"
//               />
//               {onlineUsers.includes(user._id) && (
//                 <span className="absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900" />
//               )}
//             </div>

//             <div className="block text-left min-w-0">
//               <div className="font-medium truncate">{user.fullName}</div>
//               <div className="text-sm text-zinc-400">
//                 {onlineUsers.includes(user._id) ? "Online" : "Offline"}
//               </div>
//             </div>
//           </button>
//         ))}

//         {displayedUsers.length === 0 && (
//           <div className="text-center text-zinc-500 py-4">No users found</div>
//         )}
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

// import React, { useEffect, useState } from "react";
// import { useChatStore } from "../store/useChatStore.js";
// import SidebarSkeleton from "./skeletons/SidebarSkeleton";
// import { Users } from "lucide-react";
// import { useAuthStore } from "../store/useAuthStore.js";
// import Searchbar from "../components/SearchBar.jsx";

// const Sidebar = () => {
//   const { users, selectedUser, getUsers, setSelectedUser, isUserLoading } = useChatStore();
//   const [showOnlineOnly, setShowOnlineOnly] = useState(false);
//   const { authUser, onlineUsers } = useAuthStore();

//   useEffect(() => {
//     getUsers();
//   }, [getUsers]);

  

//   const displayedUsers = showOnlineOnly ? users.filter(user => onlineUsers.includes(user._id)) : users;

//   if (isUserLoading) return <SidebarSkeleton />;

//   return (
//     <aside className="p-3 h-100 bg-white d-flex flex-column border-end">
//       <div className="d-flex align-items-center justify-between mb-3">
//         <Users size={24} className="me-2" />
//         <span className="fw-bold">{authUser.role === "Patient" ? "Doctors" : "Patients"}</span>
//       </div>

//       <div className="form-check mb-3">
//         <input
//           type="checkbox"
//           className="form-check-input"
//           checked={showOnlineOnly}
//           onChange={(e) => setShowOnlineOnly(e.target.checked)}
//         />
//         <label className="form-check-label">Show online only</label>
//       </div>

//       {/* User List */}
//       <div className="overflow-auto flex-grow-1">
//         {displayedUsers.map((user) => (
//           <button
//             key={user._id}
//             onClick={() => setSelectedUser(user)}
//             className={`d-flex align-items-center p-2 rounded border-0 w-100 text-start ${
//               selectedUser?._id === user._id ? "bg-primary text-black" : "bg-white"
//             }`}
//           >
//             <img src={user.profilePic || "/avatar.png"} alt={user.name} className="rounded-circle me-2" style={{ width: "40px", height: "40px" }} />
//             <div>
//               <div className="fw-medium">{user.name}</div>
//               <div className="small text-muted">{onlineUsers.includes(user._id) ? "Online" : "Offline"}</div>
//             </div>
//           </button>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

// import React, { useEffect, useState } from "react";
// import { useChatStore } from "../store/useChatStore.js";
// import SidebarSkeleton from "./skeletons/SidebarSkeleton";
// import { Users } from "lucide-react";
// import { useAuthStore } from "../store/useAuthStore.js";
// import Searchbar from "../components/SearchBar.jsx";

// const Sidebar = () => {
//   const { users, selectedUser, getUsers, setSelectedUser, isUserLoading } = useChatStore();
//   const [showOnlineOnly, setShowOnlineOnly] = useState(false);
//   const { authUser, onlineUsers } = useAuthStore();
//   const [isPatient, setIsPatient] = useState(false);

//   useEffect(() => {
//     getUsers();

//     // Check if the user is a patient
//     const user = authUser;
//     console.log(user);
//     if (user && user.role === "Patient") {
//       setIsPatient(true);
//     }
//   }, [getUsers]);

//   const displayedUsers = showOnlineOnly ? users.filter(user => onlineUsers.includes(user._id)) : users;

//   if (isUserLoading) return <SidebarSkeleton />;

//   return (
//     <aside className="p-3 h-100 bg-white d-flex flex-column border-end">
//       <div className="d-flex align-items-center justify-between mb-3">
//         <Users size={24} className="me-2" />
//         <span className="fw-bold">{authUser.role === "Patient" ? "Doctors" : "Patients"}</span>
//       </div>

//       {/* Show Search Bar for Patients */}
//       {isPatient && <Searchbar />}

//       <div className="form-check mb-3">
//         <input
//           type="checkbox"
//           className="form-check-input"
//           checked={showOnlineOnly}
//           onChange={(e) => setShowOnlineOnly(e.target.checked)}
//         />
//         <label className="form-check-label">Show online only</label>
//       </div>

//       {/* User List */}
//       <div className="overflow-auto flex-grow-1">
//         {displayedUsers.map((user) => (
//           <button
//             key={user._id}
//             onClick={() => setSelectedUser(user)}
//             className={`d-flex align-items-center p-2 rounded border-0 w-100 text-start ${
//               selectedUser?._id === user._id ? "bg-primary text-black" : "bg-white"
//             }`}
//           >
//             <img
//               src={user.profilePic || "/avatar.png"}
//               alt={user.name}
//               className="rounded-circle me-2"
//               style={{ width: "40px", height: "40px" }}
//             />
//             <div>
//               <div className="fw-medium">{user.name}</div>
//               <div className="small text-muted">{onlineUsers.includes(user._id) ? "Online" : "Offline"}</div>
//             </div>
//           </button>
//         ))}
//       </div>
//     </aside>
//   );
// };

// export default Sidebar;

import React, { useEffect, useState } from "react";
import { useChatStore } from "../store/useChatStore.js";
import SidebarSkeleton from "./skeletons/SidebarSkeleton";
import { Users } from "lucide-react";
import { useAuthStore } from "../store/useAuthStore.js";
import Searchbar from "../components/SearchBar.jsx";

const Sidebar = () => {
  const { users, selectedUser, getUsers, setSelectedUser, isUserLoading } = useChatStore();
  const [showOnlineOnly, setShowOnlineOnly] = useState(false);
  const { authUser, onlineUsers } = useAuthStore();
  const [isPatient, setIsPatient] = useState(false);

  useEffect(() => {
    getUsers();

    // Check if the user is a patient
    const user = authUser;
    if (user && user.role === "Patient") {
      setIsPatient(true);
    }
  }, [getUsers]);

  const displayedUsers = showOnlineOnly ? users.filter(user => onlineUsers.includes(user._id)) : users;

  if (isUserLoading) return <SidebarSkeleton />;

  return (
    <aside className="p-3 h-100 bg-white d-flex flex-column border-end">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <Users size={24} className="me-2" />
        <span className="fw-bold">{authUser.role === "Patient" ? "Doctors" : "Patients"}</span>
      </div>

      {/* Show Search Bar for Patients */}
      {isPatient && <Searchbar />}

      <div className="form-check mb-3">
        <input
          type="checkbox"
          className="form-check-input"
          checked={showOnlineOnly}
          onChange={(e) => setShowOnlineOnly(e.target.checked)}
        />
        <label className="form-check-label">Show online only</label>
      </div>

      {/* User List */}
      <div className="overflow-auto flex-grow-1">
        {displayedUsers.map((user) => (
          <button
            key={user._id}
            onClick={() => setSelectedUser(user)}
            className={`d-flex align-items-center p-2 rounded border-0 w-100 text-start ${
              selectedUser?._id === user._id ? "bg-primary" : "bg-white"
            }`}
            style={{ color: "black" }} // Ensure text remains black
          >
            <img
              src={user.profilePic || "/avatar.png"}
              alt={user.name}
              className="rounded-circle me-2"
              style={{ width: "40px", height: "40px" }}
            />
            <div>
              <div className="fw-medium" style={{ color: "black" }}>{user.name}</div>
              <div className="small text-muted" style={{ color: "black" }}>
                {onlineUsers.includes(user._id) ? "Online" : "Offline"}
              </div>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;

