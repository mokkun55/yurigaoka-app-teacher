import classNames from 'classnames'
import styles from './styles.module.css'

type Props = {
  children: React.ReactNode
  onClick: () => void
  className?: string
  variant?: 'primary' | 'secondary' | 'danger' | 'green'
  idDisabled?: boolean
  width?: string
  height?: string
}

export default function BaseButton({
  children,
  onClick,
  className,
  variant = 'primary',
  idDisabled = false,
  width = '100%',
  height = '40px',
}: Props) {
  const buttonClass = classNames(styles.button, className, styles[`_${variant}`], {
    [styles.disabled]: idDisabled,
  })
  return (
    <button onClick={onClick} className={buttonClass} disabled={idDisabled} style={{ width, height }}>
      {children}
    </button>
  )
}
