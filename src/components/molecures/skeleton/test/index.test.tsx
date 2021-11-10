/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'

import SkeletonArticle from 'src/components/molecures/skeleton'

describe('SkeletonArticle', () => {
  it('should be rendered', () => {
    render(<SkeletonArticle />)
    expect(screen.getAllByText('..........')).toBeDefined()
  })
})
