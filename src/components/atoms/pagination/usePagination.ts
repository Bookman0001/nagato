import { useCallback } from 'react'

export function usePagination({
  currentIndex,
  totalCount,
  limit,
}: {
  currentIndex: number
  totalCount: number
  limit: number
}) {
  const distanceCountFromEdge = 3

  const totalPaginationCount = Math.ceil(totalCount / limit)
  const onceShowingCountLength = distanceCountFromEdge * 2 + 1
  const defaultShowingCountLength =
    onceShowingCountLength < totalPaginationCount
      ? onceShowingCountLength
      : totalPaginationCount

  /* eslint-disable max-statements */
  const getDisplayPaginations = useCallback(() => {
    let end = currentIndex + distanceCountFromEdge
    let start =
      currentIndex - distanceCountFromEdge > 0
        ? currentIndex - distanceCountFromEdge
        : 1
    if (currentIndex <= distanceCountFromEdge + 1) {
      end = defaultShowingCountLength
    }
    if (currentIndex + distanceCountFromEdge >= totalPaginationCount) {
      end = totalPaginationCount
      if (
        totalPaginationCount - currentIndex < distanceCountFromEdge &&
        totalPaginationCount - currentIndex >= 0
      ) {
        start = totalPaginationCount - (defaultShowingCountLength - 1)
      }
    }

    return Array(end - start + 1)
      .fill(null)
      .map((_, i) => i + start)
  }, [currentIndex, defaultShowingCountLength, totalPaginationCount])
  /* eslint-enable max-statements */

  return {
    getDisplayPaginations,
  }
}
