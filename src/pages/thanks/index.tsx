import { Button } from 'src/components/atoms/button'
import { ThanksLayout } from 'src/components/templates/thanksLayout'
import { useTransitionPage } from 'src/hooks/router/useTransitionPage'

export default function Thanks() {
  const { transitionToTop } = useTransitionPage()

  return (
    <ThanksLayout>
      <section>
        <div
          className={'m-auto tablet:max-w-180 phone:max-w-140 max-w-80 my-20'}
        >
          <div className={'w-full flex justify-center text-5xl my-20'}>
            <div>Thank you!🥳</div>
          </div>
          <div className={'min-w-full flex justify-center items-center'}>
            <Button onClick={transitionToTop}>Back To Top</Button>
          </div>
        </div>
      </section>
    </ThanksLayout>
  )
}
