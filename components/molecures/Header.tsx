import { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Picture from '../atoms/Picture'
import Button from '../atoms/Button'
import 'locale/I18n'

interface Props {
  hideLangSwitch?: boolean
}

export default function Header({ hideLangSwitch = false }: Props) {
  const [t, i18n] = useTranslation()
  const [lang, setLang] = useState<string>('ja')

  const handleClick = () => {
    const targetedLang = lang === 'en' ? 'ja' : 'en'
    i18n.changeLanguage(targetedLang)
    setLang(targetedLang)
  }

  return (
    <HeaderContainer>
      <Container>
        {hideLangSwitch ? null : (
          <ButtonContainer>
            <Button onClick={handleClick}>{t('change')}</Button>
          </ButtonContainer>
        )}
        <Link href="/">
          <Picture src={'/favicon.ico'} alt={'mail'} width={40} height={40} />
        </Link>
        <MailLink href="mailto:odonel51486666@gmail.com">
          <Picture
            src={'/assets/mail.png'}
            alt={'mail'}
            width={25}
            height={25}
          />
        </MailLink>
      </Container>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  z-index: 1000;
  color: #303030;
  font-size: 12px;
`

const Container = styled.div`
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
`

const ButtonContainer = styled.div`
  margin-left: 20px;
  button {
    padding: 0 10px;
    font-size: 12px;
  }
`

const Link = styled.a`
  display: block;
  position: absolute;
  left: calc(50% - 25px);
  height: 40px;
`

const MailLink = styled.a`
  display: block;
  position: absolute;
  right: 0;
  margin-right: 20px;
`
