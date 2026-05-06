import { Component, ErrorInfo, ReactNode } from 'react'

import { Footer } from 'src/components/organisms/footer'
import { Header } from 'src/components/organisms/header'

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
          <div
            className={
              'mx-auto tablet:max-w-180 phone:max-w-140 max-w-80 h-[calc(100vh-50px-60px)] pt-16 text-lg flex justify-center items-center'
            }
          >
            Sorry...Something error happened!
          </div>
          <Footer />
        </>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
