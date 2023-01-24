import styles from './styles.module.css'
interface IButton {
  text: string
  type?: 'button' | 'submit' | 'reset' | undefined
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ text, onClick }: IButton) => {
  return (
    <>
      <button
        aria-label={text}
        className={styles.primaryButton}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  )
}

export default Button
