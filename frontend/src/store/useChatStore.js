import { create } from 'zustand';
import { axiosInstance } from '../lib/axios';
import toast from 'react-hot-toast';
import { useAuthStore } from './useAuthStore';

export const useChatStore = create((set, get) => ({
    messages: [],
    users: [],
    userIdToUserMap: {},
    selectedUser: null,
    isUsersLoading: false,
    isMessageLoading: false,

    getUsers: async () => {
        const { userIdToUserMap } = get();
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get("/messages/user");
            //console.log(res.data);
            set({ users: res.data });
            res.data.forEach(user => {
                userIdToUserMap[user._id] = {
                    fullName: user.fullName,
                    profilePic: user.profilePic
                };
            });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isUsersLoading: false });
        }
    },

    getMessages: async (userId) => {
        set({ isMessageLoading: true });
        try {
            const res = await axiosInstance.get(`/messages/${userId}`);
            set({ messages: res.data });
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isMessageLoading: false });
        }
    },

    sendMessage: async (messageData) => {
        const { selectedUser, messages } = get();
        try {
            const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`, messageData);
            set({ messages: [...messages, res.data] });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },

    /*subscribeToMessages: () => {
        const { selectedUser } = get();
        if (!selectedUser) return;
        const socket = useAuthStore.getState().socket;
        socket.off("newMessage");
        socket.on("newMessage", (newMessage) => {
            if (newMessage.senderId === selectedUser._id) {
                set({ messages: [...get().messages, newMessage] });
            }
        });
    },

    unsubscribeFromMessages: () => {
        const socket = useAuthStore.getState().socket;
        socket.off("newMessage");
    },*/

    setSelectedUser: (selectedUser) => {
        set({ selectedUser });
    },
}));
