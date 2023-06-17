import styles from "./index.module.css";
import { FaReact } from "react-icons/fa";
import { RxPerson } from "react-icons/rx";
import ReactMarkdown from "react-markdown";

interface Props {
  chatId: string;
  sentMessage: string;
  receivedMessage?: string;
  createdAt: string;
}

export const ChatBlock = (props: Props) => {
  return (
    <>
      <div className={styles.sentMessage}>
        <div className="w-[36rem] flex gap-4 overflow-hidden flex-wrap whitespace-normal">
          <div className="relative p-1 rounded-sm h-[30px] w-[30px] flex items-center justify-center">
            <RxPerson />
          </div>
          <div className={styles.content}>
            <ReactMarkdown>{props.sentMessage}</ReactMarkdown>
          </div>
        </div>
      </div>

      {props.receivedMessage && (
        <div className={styles.receivedMessage}>
          <div className="w-[36rem] flex gap-4 overflow-hidden flex-wrap whitespace-normal">
            <div className="relative p-1 rounded-sm h-[30px] w-[30px] flex items-center justify-center">
              <FaReact />
            </div>
            <div className={styles.content}>
              <ReactMarkdown>{props.receivedMessage}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
