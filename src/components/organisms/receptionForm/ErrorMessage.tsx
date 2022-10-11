import styled from 'styled-components'

import { color } from 'src/theme/constants'

interface Props {
  errorMessage: string
}

export function ErrorMessage({ errorMessage }: Props) {
  return <ErrorContent>{errorMessage}</ErrorContent>
}

const ErrorContent = styled.p`
  margin-top: 10px;
  color: ${color.WARNING};
`
