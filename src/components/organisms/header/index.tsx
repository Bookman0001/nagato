import { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

import Sharing from 'src/components/molecures/sharing'
import Button from 'src/components/atoms/button'
import Image from 'src/components/atoms/picture'
import { COLOR } from 'src/theme/constants'
import 'src/locale/I18n'

interface Props {
  hideLangSwitch?: boolean
}

export default function Header({ hideLangSwitch = false }: Props) {
  const [t, i18n] = useTranslation()
  const [lang, setLang] = useState<string>('ja')
  const [showSharing, setShowSharing] = useState<boolean>(false)

  const handleClick = () => {
    const targetedLang = lang === 'en' ? 'ja' : 'en'
    i18n.changeLanguage(targetedLang)
    setLang(targetedLang)
  }

  const handleSharingClick = () => {
    setShowSharing(!showSharing)
  }

  return (
    <HeaderContainer>
      <Container>
        {hideLangSwitch ? null : (
          <ButtonContainer>
            <Button onClick={handleClick} text={t('change')} />
          </ButtonContainer>
        )}
        <Link href="/">
          <StyledLink>
            <Image src={'/favicon.ico'} alt={'mail'} width={41} height={41} />
          </StyledLink>
        </Link>
        <SharingContainer onClick={handleSharingClick}>
          <Image
            src={'/assets/share.png'}
            alt={'share'}
            width={25}
            height={25}
          />
        </SharingContainer>
        {showSharing ? <Sharing /> : null}
      </Container>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${COLOR.WHITE};
  border-bottom: 1px solid ${COLOR.BLACK};
  z-index: 1000;
  color: ${COLOR.BLACK};
  font-size: 12px;
`

const Container = styled.div`
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  @media (min-width: 1170px) {
    max-width: 768px;
    margin: 0 auto;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 15px;
  @media (min-width: 1170px) {
    margin-left: 0;
  }
  button {
    width: 45px;
    line-height: 1.5;
    padding: 0 10px;
    font-size: 1rem;
  }
`

const StyledLink = styled.span`
  display: block;
  cursor: pointer;
  position: absolute;
  left: calc(50% - 20px);
  height: 40px;
`

const SharingContainer = styled.div`
  display: block;
  position: absolute;
  right: 0;
  margin-right: 15px;
  cursor: pointer;
  @media (min-width: 1170px) {
    margin-right: 0;
  }
`
