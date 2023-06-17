import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import axios from "../../api/apiPrivateInstance";

interface ChatHistory {
  data: Array<{
    chatId: string;
    title: string;
    sentMessage: string;
    receivedMessage?: string;
    createdAt: string;
  }>;
  count: number;
}

export const useChatHistory = (chatId: string) => {
  return useInfiniteQuery<ChatHistory, Error>({
    queryKey: ["chat-history", chatId],
    queryFn: async ({ pageParam = 0 }) => {
      const { data } = await axios.post<ChatHistory>("/api/chat/list/history", {
        chatId: chatId,
        skip: pageParam,
      });

      return data;
    },
    select: (data) => ({
      pages: [...data.pages].reverse(),
      pageParams: [...data.pageParams].reverse(),
    }),
    getNextPageParam: (lastChatHistory, allPages) =>
      allPages.length * 5 + 5 >= lastChatHistory.count
        ? undefined
        : allPages.length * 5,
  });
};

interface MessagePayload {
  chatId: string|null;
  chatMessage: string;
}

interface MessageResponse {
  sentMessage: string;
  receivedMessage: string;
  chatId: string;
}

export const useSendMessage = () => {
  return useMutation({
    mutationFn: (payload: MessagePayload) => {
      return axios.post<MessageResponse>("/api/chat/message", payload);
    },
  });
};
