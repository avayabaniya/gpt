import { forwardRef } from "react";
import styles from "./index.module.css";
import { RxPaperPlane } from "react-icons/rx";
import { SyncLoader } from "react-spinners";

interface Props {
  value: string | number;
  inputProps?: React.InputHTMLAttributes<HTMLTextAreaElement>;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit?: () => void;
  isLoading?: boolean;
}

export const ChatInput = forwardRef<HTMLTextAreaElement, Props>(
  ({ value, inputProps, onChange, onSubmit, isLoading }, ref) => {
    return (
      <div className={styles.container}>
        <textarea
          {...inputProps}
          placeholder="Send a message"
          value={value}
          className={styles.input}
          onChange={(e) => !isLoading && onChange(e)}
          ref={ref}
        />
        {isLoading ? (
          <div className="w-fit mr-3 whitespace-nowrap">
            <SyncLoader
              loading={true}
              size={4}
              aria-label="Loading Spinner"
              data-testid="loader"
              color="white"
            />
          </div>
        ) : (
          <div onClick={onSubmit}>
            <RxPaperPlane size={16} className="mr-3" />
          </div>
        )}
      </div>
    );
  }
);
