// import React, { useEffect, useRef } from "react";
// import { useChatStore } from "../store/useChatStore";
// import ChatHeader from "./ChatHeader";
// import MessageInput from "./MessageInput";
// import MessageSkeleton from "./skeletons/MessageSkeleton";
// import { useAuthStore } from "../store/useAuthStore";
// import { formatMessageTime } from "../lib/utils";

// const ChatContainer = () => {
//   const { selectedUser, messages, getMessages, isMessageLoading } = useChatStore();
//   const { authUser } = useAuthStore();
//   const messageEndRef = useRef(null);

//   useEffect(() => {
//     if (selectedUser?._id) {
//       getMessages(selectedUser._id); // Fetch user-specific messages
//     }

//     //subscribeToMessages();

//     //return () => unsubscribeFromMessages();
//   }, [selectedUser?._id]);

//   useEffect(() => {
//     if (messageEndRef.current && messages) {
//       messageEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   if (isMessageLoading)
//     return (
//       <div className="d-flex flex-column h-100 overflow-auto">
//         <ChatHeader />
//         <MessageSkeleton />
//         <MessageInput />
//       </div>
//     );

//   return (
//     <div className="d-flex flex-column h-100 overflow-auto">
//       <ChatHeader />
      
//       {/* Messages Section */}
//       <div className="flex-grow-1 overflow-auto p-3">
//         {messages.map((message) => (
//           <div key={message._id} ref={messageEndRef} className={`d-flex mb-3 ${message.senderId === authUser._id ? "justify-content-end" : "justify-content-start"}`}>
            
//             {/* User Avatar */}
//             <div className="me-2">
//               <img
//                 src={message.senderId === authUser._id ? authUser.profilePic || "/avatar.png" : selectedUser?.profilePic || "/avatar.png"}
//                 alt="Profile"
//                 className="rounded-circle border"
//                 style={{ width: "40px", height: "40px" }}
//               />
//             </div>

//             {/* Message Bubble */}
//             <div className={`p-3 rounded ${message.senderId === authUser._id ? "bg-primary text-white" : "bg-light border"}`} style={{ maxWidth: "75%" }}>
//               <p className="mb-1">{message.text}</p>
//               {message.image && <img src={message.image} alt="Attachment" className="img-fluid rounded mt-2" />}
//               <small className="text-muted">{formatMessageTime(message.createdAt)}</small>
//             </div>
//           </div>
//         ))}
//       </div>

//       <MessageInput />
//     </div>
//   );
// };

// export default ChatContainer;

// import React, { useEffect, useRef } from "react";
// import { useChatStore } from "../store/useChatStore";
// import ChatHeader from "./ChatHeader";
// import MessageInput from "./MessageInput";
// import MessageSkeleton from "./skeletons/MessageSkeleton";
// import { useAuthStore } from "../store/useAuthStore";
// import { formatMessageTime } from "../lib/utils";

// const ChatContainer = () => {
//   const { selectedUser, messages, getMessages, isMessageLoading } = useChatStore();
//   const { authUser } = useAuthStore();
//   const messageEndRef = useRef(null);

//   useEffect(() => {
//     if (selectedUser?._id) {
//       getMessages(selectedUser._id);
//     }
//   }, [selectedUser?._id]);

//   useEffect(() => {
//     if (messageEndRef.current) {
//       messageEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   if (isMessageLoading)
//     return (
//       <div className="d-flex flex-column h-100 overflow-auto">
//         <ChatHeader />
//         <MessageSkeleton />
//         <MessageInput />
//       </div>
//     );

//   return (
//     <div className="d-flex flex-column h-100 overflow-auto">
//       <ChatHeader />
      
//       {/* Messages Section */}
//       <div className="flex-grow-1 overflow-auto p-3">
//         {messages.map((message) => (
//           <div key={message._id} ref={messageEndRef} className={`d-flex mb-3 ${message.senderId === authUser._id ? "justify-content-end" : "justify-content-start"}`}>
            
//             {/* User Avatar */}
//             <div className="me-2">
//               <img
//                 src={message.senderId === authUser._id ? authUser.profilePic || "/avatar.png" : selectedUser?.profilePic || "/avatar.png"}
//                 alt="Profile"
//                 className="rounded-circle border"
//                 style={{ width: "40px", height: "40px" }}
//               />
//             </div>

//             {/* Message Bubble */}
//             <div className={`p-3 rounded ${message.senderId === authUser._id ? "bg-primary text-white" : "bg-light border"}`} style={{ maxWidth: "75%" }}>
//               <p className="mb-1">{message.text}</p>
//               {message.image && <img src={message.image} alt="Attachment" className="img-fluid rounded mt-2" />}
//               <small className="text-muted">{formatMessageTime(message.createdAt)}</small>
//             </div>
//           </div>
//         ))}
//       </div>

//       <MessageInput />
//     </div>
//   );
// };

// export default ChatContainer;

// import React, { useEffect, useRef } from "react";
// import { useChatStore } from "../store/useChatStore";
// import ChatHeader from "./ChatHeader";
// import MessageInput from "./MessageInput";
// import { useAuthStore } from "../store/useAuthStore";
// import { formatMessageTime } from "../lib/utils";

// const ChatContainer = () => {
//   const { selectedUser, messages, getMessages, isMessageLoading,subscribeToMessages,unsubscribeFromMessages } = useChatStore();
//   const { authUser } = useAuthStore();
//   const messageEndRef = useRef(null);

//   useEffect(() => {
//     if (selectedUser?._id) {
//       getMessages(selectedUser._id);
//     }
//   }, [selectedUser?._id]);

// //   useEffect(() => {
// //     if (messageEndRef.current) {
// //       messageEndRef.current.scrollIntoView({ behavior: "smooth" });
// //     }
// //   }, [messages]);
// useEffect(() => {
    
//     if (selectedUser?._id) {
//       getMessages(selectedUser._id); // Fetch user-specific messages
   
  
//     subscribeToMessages();
    
//     return () => unsubscribeFromMessages();
//     }
//   }, [selectedUser?._id, subscribeToMessages, unsubscribeFromMessages]);

//   return (
//     <div className="d-flex flex-column h-100 w-100">
//       <ChatHeader />

//       {/* Messages Section */}
//       <div className="flex-grow-1 overflow-auto p-3 d-flex flex-column">
//         {messages.map((message) => (
//           <div key={message._id} ref={messageEndRef} 
//                className={`d-flex mb-3 ${message.senderId === authUser._id ? "justify-content-end" : "justify-content-start"}`}>
            
//             {/* User Avatar */}
//             <div className="me-2">
//               <img
//                 src={message.senderId === authUser._id ? authUser.profilePic || "/avatar.png" : selectedUser?.profilePic || "/avatar.png"}
//                 alt="Profile"
//                 className="rounded-circle border"
//                 style={{ width: "40px", height: "40px" }}
//               />
//             </div>

//             {/* Message Bubble */}
//             <div className={`p-2 rounded-3 ${message.senderId === authUser._id ? "bg-primary text-white" : "bg-light border"} shadow-sm`} 
//                  style={{ maxWidth: "75%", wordBreak: "break-word" }}>
//               {message.image && (
//                 <img src={message.image} alt="Attachment" className="img-fluid rounded mb-2" style={{ maxWidth: "250px" }} />
//               )}
//               <p className="mb-1">{message.text}</p>
//               <small className="text-muted d-block text-end">{formatMessageTime(message.createdAt)}</small>
//             </div>
//           </div>
//         ))}
//       </div>

//       <MessageInput />
//     </div>
//   );
// };

// export default ChatContainer;

// import React, { useEffect, useRef } from "react";
// import { useChatStore } from "../store/useChatStore";
// import ChatHeader from "./ChatHeader";
// import MessageInput from "./MessageInput";
// import { useAuthStore } from "../store/useAuthStore";
// import { formatMessageTime } from "../lib/utils";

// const ChatContainer = () => {
//   const { selectedUser, messages, getMessages, isMessageLoading, subscribeToMessages, unsubscribeFromMessages } = useChatStore();
//   const { authUser } = useAuthStore();
//   const messageEndRef = useRef(null);

  

//   useEffect(() => {
//     if (selectedUser?._id) {
//       getMessages(selectedUser._id);
//       //console.log(messages.senderId._id,authUser._id);
//       subscribeToMessages();
//       return () => unsubscribeFromMessages();
//     }
//   }, [selectedUser?._id, subscribeToMessages, unsubscribeFromMessages]);

//   useEffect(() => {
//     if (messageEndRef.current) {
//       messageEndRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [messages]);

//   return (
//     <div className="d-flex flex-column min-vh-100 w-100 bg-white">
//       {/* Chat Header */}
//       <ChatHeader />

//       {/* Messages Section */}
//       <div className="flex-grow-1 overflow-auto p-3 d-flex flex-column">
//         {messages.map((message,index) => (
//           <div key={index} ref={messageEndRef} 
//                className={`d-flex mb-3 ${message.senderId._id === authUser._id ? "justify-content-end" : "justify-content-start"}`}>
            
//             {/* User Avatar */}
//             <div className="me-2">
//               <img
//                 src={message.senderId._id === authUser._id ? authUser.profilePic || "/avatar.png" : selectedUser?.profilePic || "/avatar.png"}
//                 alt="Profile"
//                 className="rounded-circle border"
//                 style={{ width: "40px", height: "40px" }}
//               />
//             </div>

//             {/* Message Bubble */}
//             <div className={`p-2 rounded-3 ${message.senderId._id === authUser._id ? "bg-primary text-white" : "bg-light border"} shadow-sm`} 
//                  style={{ maxWidth: "75%", overflowWrap: "break-word", wordBreak: "break-word" }}>
//               {message.image && (
//                 <img src={message.image} alt="Attachment" className="img-fluid rounded mb-2" style={{ maxWidth: "250px", height: "auto" }} />
//               )}
//               <p className="mb-1">{message.text}</p>
//               <small className="text-muted d-block text-end">{formatMessageTime(message.createdAt)}</small>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Message Input */}
//       <MessageInput messages={messages}/>
//     </div>
//   );
// };

// export default ChatContainer;

import React, { useEffect, useRef } from "react";
import { useChatStore } from "../store/useChatStore";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";
import { useAuthStore } from "../store/useAuthStore";
import { formatMessageTime } from "../lib/utils";

const ChatContainer = () => {
  const { selectedUser, messages, getMessages, isMessageLoading, subscribeToMessages, unsubscribeFromMessages } = useChatStore();
  const { authUser } = useAuthStore();
  const messageEndRef = useRef(null);

  useEffect(() => {
    if (selectedUser?._id) {
      getMessages(selectedUser._id);
      subscribeToMessages();
      return () => unsubscribeFromMessages();
    }
  }, [selectedUser?._id, subscribeToMessages, unsubscribeFromMessages,messages]);

  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="d-flex flex-column min-vh-100 w-100 bg-white">
      {/* Chat Header */}
      <ChatHeader />

      {/* Messages Section */}
      <div className="flex-grow-1 overflow-auto p-3 d-flex flex-column">
        {messages.map((message, index) => {
          const isSentByUser = message.senderId._id === authUser._id;

          return (
            <div
              key={index}
              ref={messageEndRef}
              className={`d-flex mb-3 ${isSentByUser ? "justify-content-end" : "justify-content-start"}`}
            >
              {/* Avatar for received messages */}
              {!isSentByUser && (
                <div className="me-2">
                  <img
                    src={selectedUser?.profilePic || "/avatar.png"}
                    alt="Profile"
                    className="rounded-circle border"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`p-2 rounded-3 shadow-sm ${isSentByUser ? "justify-content-end" : "justify-content-start"}`}
                style={{ maxWidth: "75%", overflowWrap: "break-word", wordBreak: "break-word" }}
              >
                {message.image && (
                  <img
                    src={message.image}
                    alt="Attachment"
                    className="img-fluid rounded mb-2"
                    style={{ maxWidth: "250px", height: "auto" }}
                  />
                )}
                <p className="mb-1">{message.text}</p>
                <small className="text-muted d-block text-end">{formatMessageTime(message.createdAt)}</small>
              </div>

              {/* Avatar for sent messages */}
              {isSentByUser && (
                <div className="ms-2">
                  <img
                    src={authUser.profilePic || "/avatar.png"}
                    alt="Profile"
                    className="rounded-circle border"
                    style={{ width: "40px", height: "40px" }}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Message Input */}
      <MessageInput messages={messages} />
    </div>
  );
};

export default ChatContainer;
