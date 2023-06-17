import { useQuery } from "@tanstack/react-query";
import axios from "../api/apiPrivateInstance";


  interface ChatListResponse {
    chatId: string
    title: string
    createdAt: string
  }


  
  
  export const useChatList = () => {
    return useQuery({
      queryKey: [
        "chat-list",
      ],
      queryFn: async () =>
        await axios.post<ChatListResponse[]>("/api/chat/list"),
    });
  };