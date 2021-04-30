import styled from 'styled-components'

import Description from 'src/components/atoms/paragraphContent'
import { COLOR } from 'src/theme/constants'

export default function Footer() {
  return (
    <FooterContainer>
      <Description>
        © {new Date().getFullYear().toString()} k-puppeteer.com
      </Description>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  width: 100%;
  height: 60px;
  align-items: center;
  background-color: ${COLOR.WHITE};
  border-top: 1px solid ${COLOR.BLACK};
  text-align: center;
`
