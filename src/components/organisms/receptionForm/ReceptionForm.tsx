import { zodResolver } from '@hookform/resolvers/zod'
import { useId } from 'react'
import { useForm, useFormState } from 'react-hook-form'
import styled from 'styled-components'

import { Button } from 'src/components/atoms/button'
import { Input, Label, TextArea } from 'src/components/atoms/form'
import { Circle, Spinner } from 'src/components/atoms/icon'
import { ErrorMessage } from 'src/components/organisms/receptionForm/ErrorMessage'
import { useCreateMessage } from 'src/hooks/message/useCreateMessage'
import { useTransitionPage } from 'src/hooks/router/useTransitionPage'
import { color } from 'src/theme/constants'
import { schema, FormInput } from 'src/utils/zod/receptionForm'

export function ReceptionForm() {
  const { register, handleSubmit, control } = useForm<FormInput>({
    resolver: zodResolver(schema),
  })
  const { errors, isSubmitting } = useFormState({ control })
  const { isLoading, error, createMessage } = useCreateMessage()
  const { transitionToThanks } = useTransitionPage()
  const accessibleId = useId()
  const submitDisabled = isLoading || isSubmitting

  const onSubmit = async (formInput: FormInput) => {
    const completed = await createMessage(formInput)
    if (completed) {
      transitionToThanks()
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Label>
          <LabelContent>
            メールアドレス
            <Circle size={6} />
          </LabelContent>
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
      </Container>
      <Container>
        <Label>
          <LabelContent>
            名前
            <Circle size={6} />
          </LabelContent>
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
      </Container>
      <Container>
        <Label>
          <LabelContent>
            メッセージ内容
            <Circle size={6} />
          </LabelContent>
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
      </Container>
      <ButtonContainer>
        <Button disabled={submitDisabled}>
          {submitDisabled ? (
            <LoadingContainer>
              <Spinner />
            </LoadingContainer>
          ) : (
            <>送信</>
          )}
        </Button>
      </ButtonContainer>
      {error && (
        <ApiErrorContent>サーバーでエラーが発生しました</ApiErrorContent>
      )}
    </form>
  )
}

const Container = styled.div`
  padding-bottom: 2rem;
`

const ButtonContainer = styled(Container)`
  display: flex;
  justify-content: center;
  button {
    min-width: 7rem;
  }
`

const ApiErrorContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 1rem;
  color: ${color.WARNING};
`

const LabelContent = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding-bottom: 0.75rem;
  svg {
    margin-left: 5px;
  }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
