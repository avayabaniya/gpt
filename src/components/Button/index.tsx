import styles from './index.module.css';
import clsx from "clsx";
import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

interface Props {
  maxWidth?: boolean;
  social?: boolean;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  }


export const Button = ({children, buttonProps, maxWidth, social, onClick} : Props) => {
  return (
    <button {...buttonProps} onClick={onClick} className={
      clsx(styles.btn, 
        maxWidth && styles.btnMaxWidth,
        social && styles.bthSocial
        )

    
    }>
      {children}
    </button>
  )
}
