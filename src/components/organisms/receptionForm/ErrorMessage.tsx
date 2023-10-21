import styled from 'styled-components'

import { color } from 'src/theme/constants'

interface Props {
  errorMessage: string
  id: string
}

export function ErrorMessage({ errorMessage, id }: Props) {
  return <ErrorContent id={id}>{errorMessage}</ErrorContent>
}

const ErrorContent = styled.p`
  margin-top: 10px;
  color: ${color.WARNING};
`
