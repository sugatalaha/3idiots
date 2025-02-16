// import React from "react";
// import { useChatStore } from "../store/useChatStore";
// import Sidebar from "../components/Sidebar";
// import NoChatSelected from "../components/NoChatSelected";
// import ChatContainer from "../components/ChatContainer";

// const HomePage = () => {
//   const { selectedUser } = useChatStore();

//   return (
//     <div className="vh-100 d-flex align-items-center justify-content-center bg-light">
//       <div className="container">
//         <div className="row justify-content-center">
//           <div className="col-md-10 col-lg-8">
//             <div className="card shadow-lg rounded-lg overflow-hidden">
//               <div className="row g-0">
//                 {/* Sidebar (Visible on Desktop) */}
//                 <div className="col-md-4 border-end d-none d-md-block">
//                   <Sidebar />
//                 </div>

//                 {/* ChatContainer or NoChatSelected */}
//                 <div className="col-md-8 d-flex flex-column">
//                   {selectedUser ? <ChatContainer /> : <NoChatSelected />}
//                 </div>
//               </div>

//               {/* Mobile View: Sidebar + Chat */}
//               <div className="d-md-none">
//                 {selectedUser ? <ChatContainer /> : <Sidebar />}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React from "react";
// import { useChatStore } from "../store/useChatStore";
// import Sidebar from "../components/Sidebar";
// import NoChatSelected from "../components/NoChatSelected";
// import ChatContainer from "../components/ChatContainer";

// const HomePage = () => {
//   const { selectedUser } = useChatStore();

//   return (
//     <div className="container-fluid vh-100 vw-100 bg-light pt-5">
//   <div className="row h-100 w-100 gx-0">
//     {/* Sidebar (40% width) */}
//     <div className="col-md-4 col-lg-4 border-end bg-white d-md-flex flex-column">
//       <Sidebar />
//     </div>

//     {/* Chat Section (60% width) */}
//     <div className="col-md-8 col-lg-8 d-flex flex-column">
//       {selectedUser ? <ChatContainer /> : <NoChatSelected />}
//     </div>
//   </div>

//   {/* Mobile View: Sidebar or Chat (Full width) */}
//   <div className="d-md-none w-100">
//     {selectedUser ? <ChatContainer /> : <Sidebar />}
//   </div>
// </div>

//   );
// };

// export default HomePage;


// import React from "react";
// import { useChatStore } from "../store/useChatStore";
// import Sidebar from "../components/Sidebar";
// import NoChatSelected from "../components/NoChatSelected";
// import ChatContainer from "../components/ChatContainer";
// import "./styles.css"; // Import styles

// const HomePage = () => {
//   const { selectedUser } = useChatStore();

//   return (
//     <div className="homepage-container vh-100 vw-100 bg-light pt-5">
//       <div className="row h-100 w-100 gx-0">
//         {/* Sidebar (40% width) */}
//         <div className="col-md-4 col-lg-4 border-end bg-white d-md-flex flex-column">
//           <Sidebar />
//         </div>

//         {/* Chat Section (60% width) */}
//         <div className="col-md-8 col-lg-8 d-flex flex-column">
//           {selectedUser ? <ChatContainer /> : <NoChatSelected />}
//         </div>
//       </div>

//       {/* Mobile View: Sidebar or Chat (Full width) */}
//       <div className="d-md-none w-100">
//         {selectedUser ? <ChatContainer /> : <Sidebar />}
//       </div>
//     </div>
//   );
// };

// export default HomePage;
import React, { useRef, useEffect } from "react";
import { useChatStore } from "../store/useChatStore";
import Sidebar from "../components/Sidebar";
import NoChatSelected from "../components/NoChatSelected";
import ChatContainer from "../components/ChatContainer";
//import "./styles.css"; // Import styles

const HomePage = () => {
  const { selectedUser } = useChatStore();
  const homeScrollRef = useRef(null);

  useEffect(() => {
    if (homeScrollRef.current) {
      homeScrollRef.current.scrollTop = 0; // Keep at the top when component mounts
    }
  }, []); // Runs only on mount

  return (
    <div className="container-fluid vh-100 vw-100 bg-light pt-5">
      <div ref={homeScrollRef} className="home-container row h-100 w-100 gx-0">
        {/* Sidebar (40% width) */}
        <div className="col-md-4 col-lg-4 border-end bg-white d-md-flex flex-column">
          <Sidebar />
        </div>

        {/* Chat Section (60% width) */}
        <div className="col-md-8 col-lg-8 d-flex flex-column">
          {selectedUser ? <ChatContainer /> : <NoChatSelected />}
        </div>
      </div>

      {/* Mobile View: Sidebar or Chat (Full width) */}
      <div className="d-md-none w-100">
        {selectedUser ? <ChatContainer /> : <Sidebar />}
      </div>
    </div>
  );
};

export default HomePage;
