import { zodResolver } from '@hookform/resolvers/zod'
import { useId, useState } from 'react'
import { useForm, useFormState } from 'react-hook-form'

import { Button } from 'src/components/atoms/button'
import { Input, Label, TextArea } from 'src/components/atoms/form'
import { Circle, Spinner } from 'src/components/atoms/icon'
import { ErrorMessage } from 'src/components/organisms/receptionForm/ErrorMessage'
import { useCreateMessage } from 'src/hooks/message/useCreateMessage'
import { useTransitionPage } from 'src/hooks/router/useTransitionPage'
import { schema, FormInput } from 'src/utils/zod/receptionForm'

export function ReceptionForm() {
  const { register, handleSubmit, control } = useForm<FormInput>({
    resolver: zodResolver(schema),
  })
  const { errors, isSubmitting } = useFormState({ control })
  const { isLoading, createMessage } = useCreateMessage()
  const { transitionToThanks } = useTransitionPage()
  const accessibleId = useId()
  const [hasApiError, setHasApiError] = useState<boolean>(false)
  const submitDisabled = isLoading || isSubmitting

  const onSubmit = async (formInput: FormInput) => {
    const { success } = await createMessage(formInput)
    if (!success) {
      setHasApiError(true)
      return
    }
    transitionToThanks()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={'pb-8'}>
        <Label>
          <div className={'flex justify-start items-center pb-3'}>
            メールアドレス
            <div className={'mx-2'}>
              <Circle size={6} />
            </div>
          </div>
          <Input
            aria-describedby={`${accessibleId}-email-hint`}
            type={'email'}
            placeholder={'sample@example.com'}
            hasError={!!errors.email}
            {...register('email')}
          />
        </Label>
        {errors.email?.message && (
          <ErrorMessage
            errorMessage={errors.email.message}
            id={`${accessibleId}-email-hint`}
          />
        )}
      </div>
      <div className={'pb-8'}>
        <Label>
          <div className={'flex justify-start items-center pb-3'}>
            名前
            <div className={'mx-2'}>
              <Circle size={6} />
            </div>
          </div>
          <Input
            aria-describedby={`${accessibleId}-name-hint`}
            placeholder={'John Doe'}
            hasError={!!errors.name}
            {...register('name')}
          />
        </Label>
        {errors.name?.message && (
          <ErrorMessage
            errorMessage={errors.name.message}
            id={`${accessibleId}-name-hint`}
          />
        )}
      </div>
      <div className={'pb-8'}>
        <Label>
          <div className={'flex justify-start items-center pb-3'}>
            メッセージ内容
            <div className={'mx-2'}>
              <Circle size={6} />
            </div>
          </div>
          <TextArea
            aria-describedby={`${accessibleId}-content-hint`}
            placeholder={'Hello.'}
            hasError={!!errors.content}
            {...register('content')}
          />
        </Label>
        {errors.content?.message && (
          <ErrorMessage
            errorMessage={errors.content.message}
            id={`${accessibleId}-content-hint`}
          />
        )}
      </div>
      <div className={'flex justify-center pb-8'}>
        <Button disabled={submitDisabled}>
          <div className={'min-w-20 max-w-20'}>
            {isLoading ? (
              <div className={'flex justify-center items-center'}>
                <Spinner />
              </div>
            ) : (
              <>送信</>
            )}
          </div>
        </Button>
      </div>
      {hasApiError && (
        <p
          className={
            'flex justify-center items-center mt-2.5 mb-4 mx-0 text-warning'
          }
        >
          サーバーでエラーが発生しました
        </p>
      )}
    </form>
  )
}
