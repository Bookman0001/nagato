import React, { Component, ErrorInfo, ReactNode } from 'react'
import styled from 'styled-components'

import { Footer } from 'src/components/organisms/footer'
import { Header } from 'src/components/organisms/header'
import { fontSize } from 'src/theme/constants'

interface Props {
  children?: ReactNode
}

interface State {
  hasError: boolean
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <>
          <Header />
          <ErrorContainer>Sorry...Something error happened!</ErrorContainer>
          <Footer />
        </>
      )
    }

    return this.props.children
  }
}

const ErrorContainer = styled.div`
  max-width: 600px;
  height: calc(100vh - 50px - 60px);
  padding-top: 4rem;
  margin: 0 auto;
  font-size: ${fontSize.S};
  display: flex;
  justify-content: center;
  align-items: center;
`

export default ErrorBoundary
