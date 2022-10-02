import styled from 'styled-components'

import { ReceptionForm } from 'src/components/organisms/receptionForm'
import { ReceptionLayout } from 'src/components/templates/receptionLayout'
import { deviceWidth } from 'src/theme/constants'

export default function Reception() {
  return (
    <ReceptionLayout>
      <Section>
        <ReceptionForm />
      </Section>
    </ReceptionLayout>
  )
}

const Section = styled.section`
  max-width: 600px;
  padding: 2rem 0 0;
  margin: 0 auto;
  @media (max-width: ${deviceWidth.TABLET}) {
    padding: 2rem 2rem 0;
  }
`
