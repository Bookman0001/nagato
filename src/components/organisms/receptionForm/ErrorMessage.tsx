import styled from 'styled-components'
import { FieldError } from 'react-hook-form'

import { COLOR } from 'src/theme/constants'

interface Props {
  name: 'email' | 'name' | 'content'
  error: FieldError
}

export default function ErrorMessage({ name, error }: Props) {
  return (
    <ErrorContent>
      {name === 'email' && (
        <>
          {error.type === 'required'
            ? '必須です'
            : error.type === 'pattern'
            ? 'メールアドレスの形式が不正です'
            : ''}{' '}
        </>
      )}
      {name === 'name' && <>{error.type === 'required' ? '必須です' : ''}</>}
      {name === 'content' && <>{error.type === 'required' ? '必須です' : ''}</>}
    </ErrorContent>
  )
}

const ErrorContent = styled.p`
  margin-top: 10px;
  color: ${COLOR.WARNING};
`
