import styles from './index.module.css'

interface Props {
    name: string,
    placeholder: string, 
    value: string|number, 
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export const Input = ({name, placeholder, value, inputProps} : Props) => {
    return (
        <input {...inputProps} name={name} placeholder={placeholder} value={value} className={styles.input} />
    )
}