import { useMemo } from 'react'

import { usePagination } from './usePagination'

interface Props {
  currentIndex: number
  totalCount: number
  limit: number
  onClick: (clickedIndex: number) => void
}

export function Pagination({
  currentIndex,
  totalCount,
  limit,
  onClick,
}: Props) {
  const { getDisplayPaginations } = usePagination({
    currentIndex,
    totalCount,
    limit,
  })

  const displayPaginations = useMemo(
    () => getDisplayPaginations(),
    [getDisplayPaginations]
  )

  if (!totalCount) return null

  const handleClick = (clickedIndex: number) => {
    onClick(clickedIndex)
  }

  return (
    <div className={'flex items-center justify-center'}>
      {displayPaginations.map((num, index) => {
        const selected = currentIndex === num
        return (
          <div key={index} data- className="group">
            <button
              onClick={() => handleClick(num)}
              key={index}
              className={`flex justify-center items-center border-3 border-solid border-white rounded-lg w-10 h-10 mx-4 text-lg cursor-pointer text-center
      ${
        selected
          ? 'text-black bg-white border-white'
          : 'text-white bg-transparent border-transparent'
      }
    `}
            >
              {num}
            </button>
          </div>
        )
      })}
    </div>
  )
}
