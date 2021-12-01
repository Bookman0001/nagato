import styled from 'styled-components'

import ReceptionLayout from 'src/components/templates/receptionLayout'
import Form from 'src/components/organisms/receptionForm'
import { DEVICE_WIDTH } from 'src/theme/constants'

export default function Reception() {
  return (
    <ReceptionLayout>
      <Section>
        <Form />
      </Section>
    </ReceptionLayout>
  )
}

const Section = styled.section`
  max-width: 600px;
  padding: 2rem 0 0 0;
  margin: 0 auto;
  @media (max-width: ${DEVICE_WIDTH.TABLET}) {
    padding: 2rem 2rem 0;
  }
`
