import styled, { keyframes } from 'styled-components'
import Link from 'next/link'
import { FacebookShareButton, TwitterShareButton } from 'react-share'

import Icon from 'src/components/atoms/picture'
import { COLOR } from 'src/theme/constants'

export default function Sharing() {
  return (
    <Section>
      <Container>
        <FacebookShareButton url={window.location.href}>
          <StyledLink>
            <Icon
              src="/assets/facebook.png"
              alt="facebook"
              width={40}
              height={40}
            />
          </StyledLink>
        </FacebookShareButton>
        <TwitterShareButton url={window.location.href}>
          <StyledLink>
            <Icon
              src="/assets/twitter.png"
              alt="twitter"
              width={40}
              height={40}
            />
          </StyledLink>
        </TwitterShareButton>
        <Link href="mailto:odonel51486666@gmail.com">
          <StyledLink>
            <Icon
              src={'/assets/mail.png'}
              alt={'mail'}
              width={40}
              height={40}
            />
          </StyledLink>
        </Link>
      </Container>
    </Section>
  )
}

const Animation = keyframes`
  0% {
    margin-top: 0;
  }
  100% {
    margin-top: 20px;
  }
`

const Section = styled.section``

const Container = styled.div`
  animation: ${Animation} 0.2s linear;
  animation-direction: alternate;
  animation-duration: 0.4s;
  animation-iteration-count: 2;
  animation-timing-function: ease-in;
  position: absolute;
  align-items: center;
  top: 60px;
  right: 10px;
  background-color: ${COLOR.GRAY};
  padding: 20px;
  display: flex;
  border-radius: 20px;
  img {
    margin: 0 10px;
  }
  ::before {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    right: 19px;
    top: -19px;
    border-right: 20px solid transparen;
    border-bottom: 20px solid ${COLOR.GRAY};
    border-left: 20px solid transparent;
  }
  @media (max-width: 768px) {
    right: 5px;
  }
`

const StyledLink = styled.span`
  cursor: pointer;
`
