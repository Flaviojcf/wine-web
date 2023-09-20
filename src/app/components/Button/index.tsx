import { ButtonHTMLAttributes } from 'react'

interface IButton {
  label: string
}
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={
        className ||
        'flex items-center justify-center w-64 h-10 rounded bg-buttonColor hover:opacity-80 transition-all text-white'
      }
    >
      {children}
    </button>
  )
}
