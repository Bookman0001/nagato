import { useRouter } from 'next/router'
import styled from 'styled-components'
import { useForm, useFormState } from 'react-hook-form'

import { useCreateMessage } from 'src/hooks/message'
import Input from 'src/components/atoms/form/input'
import TextArea from 'src/components/atoms/form/textArea'
import Button from 'src/components/atoms/button'
import Circle from 'src/components/atoms/icon/circle'
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
  const { emailExp } = regExp

  const onSubmit = async (inputData: FormInput) => {
    const completed = await createMessage(inputData)
    if (completed) {
      router.push({ pathname: '/thanks' })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container>
        <Input
          labelEl={
            <LabelContent>
              メールアドレス
              <Circle size={6} />
            </LabelContent>
          }
          type={'email'}
          placeholder={'sample@example.com'}
          hasError={!!errors.email}
          {...register('email', { required: true, pattern: emailExp })}
        />
        {errors.email && (
          <ErrorContent>
            {errors.email.type === 'required'
              ? '必須です'
              : errors.email.type === 'pattern'
              ? 'メールアドレスの形式が不正です'
              : ''}
          </ErrorContent>
        )}
      </Container>
      <Container>
        <Input
          labelEl={
            <LabelContent>
              名前
              <Circle size={6} />
            </LabelContent>
          }
          placeholder={'John Doe'}
          hasError={!!errors.name}
          {...register('name', { required: true })}
        />
        {errors.name && (
          <ErrorContent>
            {errors.name.type === 'required' ? '必須です' : ''}
          </ErrorContent>
        )}
      </Container>
      <Container>
        <TextArea
          labelEl={
            <LabelContent>
              メッセージ内容
              <Circle size={6} />
            </LabelContent>
          }
          placeholder={'Hello.'}
          rows={6}
          hasError={!!errors.content}
          {...register('content', { required: true })}
        />
        {errors.content && (
          <ErrorContent>
            {errors.content.type === 'required' ? '必須です' : ''}
          </ErrorContent>
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
