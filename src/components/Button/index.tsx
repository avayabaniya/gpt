import styles from './index.module.css';
import clsx from "clsx";
import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

interface Props {
  maxWidth?: boolean;
  social?: boolean;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: string;
  className?: string;
  }


export const Button = ({children, buttonProps, maxWidth, social, variant, className, onClick} : Props) => {
  return (
    <button {...buttonProps} onClick={onClick} className={
      clsx(styles.btn, 
        variant === 'outline' && styles.btnOutline,
        maxWidth && styles.btnMaxWidth, 
        social && styles.bthSocial,
        className
        )

    
    }>
      {children}
    </button>
  )
}
