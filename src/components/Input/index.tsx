import clsx from 'clsx'
import styles from './index.module.css'

interface Props {
    name: string,
    placeholder: string, 
    value: string|number, 
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>,
    className?: string
}

export const Input = ({name, placeholder, value, inputProps, className} : Props) => {
    return (
        <input {...inputProps} name={name} placeholder={placeholder} value={value} className={clsx(styles.input, className)} />
    )
}