import styled from 'styled-components'
import { useForm, useFormState } from 'react-hook-form'

import { useCreateMessage } from 'src/hooks/message'
import { useTransitionPage } from 'src/hooks/router/transitionPage'
import { Label } from 'src/components/atoms/form/label'
import { Input } from 'src/components/atoms/form/input'
import { TextArea } from 'src/components/atoms/form/textArea'
import { Button } from 'src/components/atoms/button'
import { Circle } from 'src/components/atoms/icon/circle'
import { ErrorMessage } from './ErrorMessage'
import { regExp } from 'src/utils'
import { COLOR } from 'src/theme/constants'

type FormInput = {
  email: string
  name: string
  content: string
}

export function ReceptionForm() {
  const { register, handleSubmit, control } = useForm<FormInput>()
  const { errors } = useFormState({ control })
  const { isLoading, error, createMessage } = useCreateMessage()
  const { transitionToThanks } = useTransitionPage()
  const { email } = regExp

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
        </Label>
        <Input
          type={'email'}
          placeholder={'sample@example.com'}
          hasError={!!errors.email}
          {...register('email', { required: true, pattern: email })}
        />
        {errors.email && <ErrorMessage name={'email'} error={errors.email} />}
      </Container>
      <Container>
        <Label>
          <LabelContent>
            名前
            <Circle size={6} />
          </LabelContent>
        </Label>
        <Input
          placeholder={'John Doe'}
          hasError={!!errors.name}
          {...register('name', { required: true })}
        />
        {errors.name && <ErrorMessage name={'name'} error={errors.name} />}
      </Container>
      <Container>
        <Label>
          <LabelContent>
            メッセージ内容
            <Circle size={6} />
          </LabelContent>
        </Label>
        <TextArea
          placeholder={'Hello.'}
          hasError={!!errors.content}
          {...register('content', { required: true })}
        />
        {errors.content && (
          <ErrorMessage name={'content'} error={errors.content} />
        )}
      </Container>
      <ButtonContainer>
        <Button disabled={isLoading}>{isLoading ? '送信中' : '送信'}</Button>
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
`

const ApiErrorContent = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0 1rem;
  color: ${COLOR.WARNING};
`

const LabelContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-left: 5px;
  }
`
