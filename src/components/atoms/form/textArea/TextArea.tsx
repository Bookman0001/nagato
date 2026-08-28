import { InputHTMLAttributes, Ref } from 'react'

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  rows?: number
  hasError?: boolean
  ref?: Ref<HTMLTextAreaElement>
}

export function TextArea({ rows = 6, hasError = false, ref, ...props }: Props) {
  return (
    <textarea
      {...props}
      ref={ref}
      rows={rows}
      className={`flex-1 w-full text-base p-2.5 rounded-lg
        ${
          hasError
            ? 'border-2 border-solid border-warning'
            : 'border border-solid border-white'
        }
        
        `}
    />
  )
}
