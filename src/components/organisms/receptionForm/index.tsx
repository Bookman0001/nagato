import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useForm, useFormState } from 'react-hook-form'

import { useCreateMessage } from 'src/hooks/message'
import Label from 'src/components/atoms/form/label'
import Input from 'src/components/atoms/form/input'
import TextArea from 'src/components/atoms/form/textArea'
import Button from 'src/components/atoms/button'
import Circle from 'src/components/atoms/icon/circle'
import ErrorMessage from './ErrorMessage'
import { regExp } from 'src/util'
import { COLOR } from 'src/theme/constants'

type FormInput = {
  email: string
  name: string
  content: string
}

export default function ReceptionForm() {
  const router = useRouter()
  const { register, handleSubmit, control } = useForm<FormInput>()
  const { errors } = useFormState({ control })
  const { isLoading, error, createMessage } = useCreateMessage()
  const { email } = regExp

  const onSubmit = async (inputData: FormInput) => {
    const completed = await createMessage(inputData)
    if (completed) {
      router.push({ pathname: '/thanks' })
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
          rows={6}
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

const ErrorContent = styled.p`
  margin-top: 10px;
  color: ${COLOR.WARNING};
`

const ApiErrorContent = styled(ErrorContent)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 1rem;
`

const LabelContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-left: 5px;
  }
`
