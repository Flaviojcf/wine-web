import { IButton } from '@/app/interfaces/IButton'

export function Button({ children, className, ...props }: IButton) {
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
