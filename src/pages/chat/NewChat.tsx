import { useEffect, useRef, useState } from "react";
import { ChatInput } from "../../components";
import { useSendMessage } from "./queries";
import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

export const NewChat = () => {

  const navigate = useNavigate(); 
  const queryClient = useQueryClient()


  const [input, setInput] = useState("");

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const { mutateAsync, isLoading } = useSendMessage();

  const handleSubmit = async () => {
    const {data} = await mutateAsync({ chatId: null, chatMessage: input });
    queryClient.invalidateQueries({ queryKey: ['chat-list'] })
    setInput("");
    navigate(`/${data.chatId}`)
  };


  useEffect(() => {
    const textAreaRefCopy = inputRef.current;
    if (!textAreaRefCopy) return;

    const handleTextAreaHeight = () => {
      textAreaRefCopy!.style.height = "auto";
      textAreaRefCopy!.style.height = textAreaRefCopy!.scrollHeight + "px";
    };

    textAreaRefCopy.addEventListener("input", handleTextAreaHeight);

    return () => {
      textAreaRefCopy?.removeEventListener("input", handleTextAreaHeight);
    };
  }, []);

  return (
    <div className="container flex flex-col relative h-full">
      <div className="h-full"></div>
      <div className="p-2 absolute left-0 bottom-0 w-full">
        <ChatInput
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          inputProps={{
            onKeyDown: (e) => {
              if (e.code === "Enter") handleSubmit();
            },
          }}
          onSubmit={handleSubmit}
          isLoading={isLoading}
        />
        <p className="mt-2 text-sm text-center">
          Free Research Preview. ChatGPT may produce inaccurate information
          about people, places, or facts.
        </p>
      </div>
    </div>
  );
};
function mutateAsync(arg0: { chatId: any; chatMessage: string; }) {
  throw new Error("Function not implemented.");
}

