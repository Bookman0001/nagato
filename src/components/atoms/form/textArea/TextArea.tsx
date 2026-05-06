import React, { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLTextAreaElement> {
  rows?: number
  hasError?: boolean
}

export const TextArea = React.forwardRef<HTMLTextAreaElement, Props>(
  function Element({ rows = 6, hasError = false, ...props }: Props, ref) {
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
)
