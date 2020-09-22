import { useState } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

import Picture from '../atoms/Picture'
import Button from '../atoms/Button'
import 'locale/I18n'

export default function Header() {
  const [t, i18n] = useTranslation()
  const [lang, setLang] = useState<string>('ja')

  const handleClick = () => {
    const targetedLang = lang === 'en' ? 'ja' : 'en'
    i18n.changeLanguage(targetedLang)
    setLang(targetedLang)
  }

  return (
    <HeaderContainer>
      <p>
        <Link href="/">Kengo Okamoto</Link>
      </p>
      <MailLink href="mailto:odonel51486666@gmail.com">
        <Picture src={'/assets/mail.png'} alt={'mail'} width={25} height={25} />
      </MailLink>
      <ButtonContainer>
        <Button onClick={handleClick}>{t('change')}</Button>
      </ButtonContainer>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e5e5;
  z-index: 1000;
  width: 100%;
  flex: 1;
  p {
    font-size: 16px;
    color: #303030;
  }
`

const Link = styled.a`
  width: 25px;
  margin: 0 20px;
`

const MailLink = styled.a`
  margin-right: 20px;
`

const ButtonContainer = styled.div`
  margin-bottom: 5px;
  button {
    font-size: 12px;
    padding: 0 10px;
  }
`
