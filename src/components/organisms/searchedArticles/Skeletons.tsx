import { Skeleton } from 'src/components/molecures/skeleton'

interface Props {
  itemCount: number
}

export function Skeletons({ itemCount }: Props) {
  return (
    <div
      className={
        'mx-auto tablet:max-w-180 phone:max-w-140 max-w-80 min-h-[calc(100vh-110px)]'
      }
    >
      {[...Array(itemCount)].map((_, i) => {
        return (
          <div key={i}>
            <Skeleton />
          </div>
        )
      })}
    </div>
  )
}
