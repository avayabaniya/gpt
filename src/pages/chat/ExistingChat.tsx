import { useEffect, useRef, useState } from "react";
import { ChatBlock, ChatInput } from "../../components";
import { useParams } from "react-router-dom";
import { useChatHistory, useSendMessage } from "./queries";

export const ExistingChat = () => {
  const { chatId } = useParams();
  const [input, setInput] = useState("");

  const inputRef = useRef<HTMLTextAreaElement>(null);
  const bottomDivRef = useRef<HTMLDivElement>(null);

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

  const {
    data,
    isSuccess,
    hasNextPage,
    refetch
  } = useChatHistory(chatId || "");
  const { mutateAsync, isLoading } = useSendMessage();

  const scrollToBottom = () => {
    console.log("test");
    bottomDivRef.current?.scrollIntoView();
  };

  useEffect(() => {
    const timer = setTimeout(() => scrollToBottom(), 100);
    return () => {
      clearTimeout(timer);
    };
  }, [chatId]);

  const handleSubmit = async () => {
    await mutateAsync({ chatId: chatId || "", chatMessage: input });

    setInput("");

    await refetch();

    setTimeout(() => scrollToBottom(), 100);
  };

  console.log(hasNextPage);

  return (
    <div className="container flex flex-col relative h-full">
      {/* <PullToRefresh
        onRefresh={async () => {
          await fetchNextPage();
        }}
        loading={isFetchingNextPage}
        // disabled={!hasNextPage}
      > */}
        <div className="chat-history-panel overflow-y-auto">
          {isSuccess &&
            data.pages.map((page) =>
              page.data
                .slice()
                .reverse()
                .map((chatBlock) => (
                  <ChatBlock {...chatBlock} key={chatBlock.createdAt} />
                ))
            )}

          <div ref={bottomDivRef} />
        </div>
      {/* </PullToRefresh> */}

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
