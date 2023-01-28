import { render, screen } from '@testing-library/react'

import { Skeleton } from 'src/components/molecures/skeleton'

describe('SkeletonArticle', () => {
  it('should be rendered', () => {
    render(<Skeleton />)
    expect(screen.getByTestId('title')).toBeInTheDocument()
    expect(screen.getByTestId('date')).toBeInTheDocument()
  })
})
