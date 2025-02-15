// import React, { useRef, useState } from 'react'
// import { useChatStore } from '../store/useChatStore'
// import {Image, Send, X} from 'lucide-react';
// const MessageInput = () => {
//     const [text,setText] = useState("")
//     const [imagePreview,setImagePreview] = useState(null)
//     const fileInputRef = useRef(null)
//     const {sendMessage,broadcastMessage,isBroadcastSelected,selectedUser,sendGroupMessage} = useChatStore()

//     const handleImageChange = (e) =>{
//       const file = e.target.files[0];
//       if (!file.type.startsWith("image/")) {
//         toast.error("Please select an image file");
//         return;
//       }
  
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }

//     const removeImage = () =>{
//       setImagePreview(null);
//       if (fileInputRef.current) fileInputRef.current.value = "";
//     }

//     const handleSendMessage = async(e) =>{
//       e.preventDefault();
//       if (!text.trim() && !imagePreview) return;
  
//       try {
//         if(isBroadcastSelected){
//           await broadcastMessage({
//             text: text.trim(),
//             image: imagePreview,
//           });
//         }else if(selectedUser){
//           await sendMessage({
//             text: text.trim(),
//             image: imagePreview,
//           });
//         }else{
//           await sendGroupMessage({
//             text: text.trim(),
//             image: imagePreview,
//           })        
//         }

//         setText("");
//         setImagePreview(null);
//         if (fileInputRef.current) fileInputRef.current.value = "";
//       } catch (error) {
//         console.error("Failed to send message:", error);
//       }
//     }

//   return (
//     <div className='p-4 w-full'>
//       {imagePreview && (
//         <div className="mb-3 flex items-center gap-2">
//           <div className="relative">
//             <img
//               src={imagePreview}
//               alt="Preview"
//               className="w-20 h-20 object-cover rounded-lg border border-zinc-700"
//             />
//             <button
//               onClick={removeImage}
//               className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-base-300
//               flex items-center justify-center"
//               type="button"
//             >
//               <X className="size-3" />
//             </button>
//           </div>
//         </div>
//       )}
//       <form onSubmit={handleSendMessage} className='flex items-center gap-2'>
//         <div className='flex-1 flex gap-2'>
//         <input
//             type="text"
//             className="w-full input input-bordered rounded-lg input-sm sm:input-md"
//             placeholder="Type a message..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             className="hidden"
//             ref={fileInputRef}
//             onChange={handleImageChange}
//           />
//            <button
//             type="button"
//             className={`hidden sm:flex btn btn-circle
//                      ${imagePreview ? "text-emerald-500" : "text-zinc-400"}`}
//             onClick={() => fileInputRef.current?.click()}
//           >
//             <Image size={20} />
//           </button>
//         </div>
//         <button
//           type="submit"
//           className="btn btn-sm btn-circle"
//           disabled={!text.trim() && !imagePreview}
//         >
//           <Send size={22} />
//         </button>
//       </form>
//     </div>
//   )
// }

// export default MessageInput

// import React, { useRef, useState } from "react";
// import { useChatStore } from "../store/useChatStore";
// import { Image, Send, X } from "lucide-react";
// import summary from "./summary.jsx";

// const MessageInput = (props) => {
//   const [text, setText] = useState("");
//   const [imagePreview, setImagePreview] = useState(null);
//   const fileInputRef = useRef(null);
//   const { sendMessage, selectedUser } = useChatStore();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file.type.startsWith("image/")) {
//       alert("Please select an image file");
//       return;
//     }

//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setImagePreview(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   const removeImage = () => {
//     setImagePreview(null);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     if (!text.trim() && !imagePreview) return;

//     try {
//       if (selectedUser) {
//         await sendMessage({
//           text: text.trim(),
//           image: imagePreview,
//         });
//       }

//       setText("");
//       setImagePreview(null);
//       if (fileInputRef.current) fileInputRef.current.value = "";
//     } catch (error) {
//       console.error("Failed to send message:", error);
//     }
//   };

//   return (
//     <div className="p-3 border-top bg-light">
//       {/* Image Preview */}
//       {imagePreview && (
//         <div className="mb-3 d-flex align-items-center gap-2">
//           <div className="position-relative">
//             <img
//               src={imagePreview}
//               alt="Preview"
//               className="border rounded"
//               style={{ maxWidth: "80px", maxHeight: "80px", objectFit: "cover" }}
//             />
//             <button
//               onClick={removeImage}
//               className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
//               type="button"
//             >
//               <X size={14} />
//             </button>
//           </div>
//         </div>
//       )}

//       {/* Message Input */}
//       <form onSubmit={handleSendMessage} className="d-flex align-items-center gap-2">
//         <div className="input-group">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Type a message..."
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//           />
//           <input
//             type="file"
//             accept="image/*"
//             className="d-none"
//             ref={fileInputRef}
//             onChange={handleImageChange}
//           />
//           <button
//             type="button"
//             className="btn btn-outline-secondary"
//             onClick={() => fileInputRef.current?.click()}
//           >
//             <Image size={20} />
//           </button>
//           <button
//             type="button"
//             className="btn btn-outline-secondary"
//             onClick={(e) =>
//             {
                
//             }
//              }
//           >
//           </button>
//         </div>
//         <button type="submit" className="btn btn-primary" disabled={!text.trim() && !imagePreview}>
//           <Send size={20} />
//         </button>
//       </form>
//     </div>
//   );
// };

// export default MessageInput;

import React, { useEffect, useRef, useState } from "react";
import { useChatStore } from "../store/useChatStore";
import { Image, Send, X } from "lucide-react";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "../store/useAuthStore.js";

const MessageInput = ({ messages }) => {
  const [text, setText] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [summary, setSummary] = useState(null);
  const fileInputRef = useRef(null);
  const { sendMessage, selectedUser } = useChatStore();

  useEffect(()=>
{
    setSummary("");
},[selectedUser._id]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file.type.startsWith("image/")) {
      alert("Please select an image file");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const removeImage = () => {
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() && !imagePreview) return;

    try {
      if (selectedUser) {
        await sendMessage({
          text: text.trim(),
          image: imagePreview,
        });
      }

      setText("");
      setImagePreview(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (error) {
      console.error("Failed to send message:", error);
    }
  };

  // Function to get messages from the last 12 hours
  const getLast12HoursMessages = () => {
    const twelveHoursAgo = new Date(Date.now() - 12 * 60 * 60 * 1000);
    
    return messages
      .filter((msg) => new Date(msg.createdAt) >= twelveHoursAgo)
      .map((msg) => `${msg.senderId.role}: ${msg.text}`)
      .join(" ");
  };

  // Function to fetch summary
  const handleSummarize = async () => {
    const chatHistory = getLast12HoursMessages();
    if (!chatHistory) return alert("No messages in the last 12 hours to summarize.");

    try {
      const { data } = await axiosInstance.post(
        "/summarize/",
        { chatHistory },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log(data);
      setSummary(data.summary);

      console.log(summary);
    } catch (error) {
      console.error("Error fetching summary:", error);
      alert("Failed to fetch summary.");
    }
  };

  return (
    <div className="p-3 border-top bg-light">
      {/* Image Preview */}
      {imagePreview && (
        <div className="mb-3 d-flex align-items-center gap-2">
          <div className="position-relative">
            <img
              src={imagePreview}
              alt="Preview"
              className="border rounded"
              style={{ maxWidth: "80px", maxHeight: "80px", objectFit: "cover" }}
            />
            <button
              onClick={removeImage}
              className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              type="button"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Message Input */}
      <form onSubmit={handleSendMessage} className="d-flex align-items-center gap-2">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type a message..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            className="d-none"
            ref={fileInputRef}
            onChange={handleImageChange}
          />
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => fileInputRef.current?.click()}
          >
            <Image size={20} />
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={handleSummarize}
          >
            📄 Summarize
          </button>
        </div>
        <button type="submit" className="btn btn-primary" disabled={!text.trim() && !imagePreview}>
          <Send size={20} />
        </button>
      </form>

      {/* Summary Display */}
      {summary && (
        <div className="alert alert-info mt-3">
          <strong>Summary:</strong> {summary}
        </div>
      )}
    </div>
  );
};

export default MessageInput;
