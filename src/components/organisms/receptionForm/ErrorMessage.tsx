interface Props {
  errorMessage: string
  id: string
}

export function ErrorMessage({ errorMessage, id }: Props) {
  return (
    <p id={id} className={'pt-2 text-warning'}>
      {errorMessage}
    </p>
  )
}
