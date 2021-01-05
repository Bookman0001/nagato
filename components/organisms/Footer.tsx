import styled from 'styled-components'
import dynamic from 'next/dynamic'

const Description = dynamic(() => import('components/atoms/ParagraphContent'))

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
  background-color: #ffffff;
  border-top: 1px solid #303030;
  text-align: center;
`
