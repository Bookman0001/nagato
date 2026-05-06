import { ReceptionForm } from 'src/components/organisms/receptionForm'
import { ReceptionLayout } from 'src/components/templates/receptionLayout'

export default function Reception() {
  return (
    <ReceptionLayout>
      <section
        className={'tablet:max-w-180 phone:max-w-140 max-w-100 pt-8 mx-auto'}
      >
        <ReceptionForm />
      </section>
    </ReceptionLayout>
  )
}
