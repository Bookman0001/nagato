import { zodResolver } from '@hookform/resolvers/zod'
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
        <Label htmlFor={'email'}>
          <LabelContent>
            メールアドレス
            <Circle size={6} />
          </LabelContent>
        </Label>
        <Input
          id={'email'}
          type={'email'}
          placeholder={'sample@example.com'}
          hasError={!!errors.email}
          {...register('email')}
        />
        {errors.email?.message && (
          <ErrorMessage errorMessage={errors.email.message} />
        )}
      </Container>
      <Container>
        <Label htmlFor={'name'}>
          <LabelContent>
            名前
            <Circle size={6} />
          </LabelContent>
        </Label>
        <Input
          id={'name'}
          placeholder={'John Doe'}
          hasError={!!errors.name}
          {...register('name')}
        />
        {errors.name?.message && (
          <ErrorMessage errorMessage={errors.name.message} />
        )}
      </Container>
      <Container>
        <Label htmlFor={'content'}>
          <LabelContent>
            メッセージ内容
            <Circle size={6} />
          </LabelContent>
        </Label>
        <TextArea
          id={'content'}
          placeholder={'Hello.'}
          hasError={!!errors.content}
          {...register('content')}
        />
        {errors.content?.message && (
          <ErrorMessage errorMessage={errors.content.message} />
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
  justify-content: center;
  align-items: center;
  svg {
    margin-left: 5px;
  }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
