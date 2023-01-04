import styled, { keyframes } from 'styled-components'

import { ThanksLayout } from 'src/components/templates/thanksLayout'
import { useTransitionPage } from 'src/hooks/router/useTransitionPage'
import { color, deviceWidth, fontSize } from 'src/theme/constants'

export default function Thanks() {
  const { transitionToTop } = useTransitionPage()

  return (
    <ThanksLayout>
      <Section>
        <Container>
          <Description>Thank you!🥳</Description>
          <LinkWrapper onClick={transitionToTop}>
            <StyledLink>Back To Top</StyledLink>
          </LinkWrapper>
        </Container>
      </Section>
    </ThanksLayout>
  )
}
const Container = styled.div`
  padding: 50% 0;
`

const Section = styled.section`
  max-width: 600px;
  min-height: calc(100vh - 110px);
  margin: 0 auto;
  @media (max-width: ${deviceWidth.TABLET}) {
    padding: 0 2rem;
  }
`

const DescriptionAnimation = keyframes`
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`

const LinkAnimation = keyframes`
  0% {
    transform: translateY(200%);
    opacity: 0;
  }
  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`

const Description = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  font-size: ${fontSize.LL};
  animation: ${DescriptionAnimation} 1s linear;
`

const LinkWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 1rem;
  animation: ${LinkAnimation} 1s linear;
`

const StyledLink = styled.span`
  display: block;
  cursor: pointer;
  width: 100%;
  font-size: ${fontSize.S};
  font-weight: bold;
  color: ${color.BLUE};
  @media (max-width: ${deviceWidth.TABLET}) {
    font-size: ${fontSize.XS};
  }
`
