import React from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'

import Select from 'src/components/atoms/select'
import Image from 'src/components/atoms/picture'
import { COLOR, DEVICE_WIDTH } from 'src/theme/constants'
import { langs } from 'src/locale/langs'
import 'src/locale/I18n'

interface Props {
  hideLangSwitch?: boolean
}

export default function Header({ hideLangSwitch = false }: Props) {
  const { i18n } = useTranslation()

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <HeaderContainer>
      <Container>
        <Link href="/">
          <StyledLink>
            <Image src={'/favicon.ico'} alt={'mail'} width={30} height={30} />
          </StyledLink>
        </Link>
        {hideLangSwitch ? null : (
          <SelectContainer>
            <Select defaultValue={i18n.language} onChange={handleChange}>
              <>
                {langs.map((lang) => {
                  return (
                    <option value={lang.value} key={lang.value}>
                      {lang.label}
                    </option>
                  )
                })}
              </>
            </Select>
          </SelectContainer>
        )}
      </Container>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${COLOR.WHITE};
  border-bottom: 1px solid ${COLOR.GRAY};
  z-index: 1000;
  color: ${COLOR.BLACK};
  font-size: 0.75rem;
`

const Container = styled.div`
  height: 50px;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (min-width: ${DEVICE_WIDTH.PC}) {
    max-width: 768px;
    margin: 0 auto;
  }
`

const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 15px;
  @media (min-width: ${DEVICE_WIDTH.PC}) {
    margin-right: 0;
  }
  select {
    width: 55px;
  }
`

const StyledLink = styled.span`
  display: block;
  cursor: pointer;
  position: absolute;
  left: calc(50% - 20px);
  height: 30px;
`
