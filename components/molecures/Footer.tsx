import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <FooterContainer>
      <p>This page contains of Next.js</p>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  width: 100%;
  height: 60px;
  align-items: center;
  background-color: #ffffff;
  border-top: 1px solid #e5e5e5;
  text-align: center;
  p {
    font-size: 16px;
    margin: 20px;
    color: #303030;
  }
`
