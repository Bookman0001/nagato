import { render, screen } from '@testing-library/react'

import { ParagraphContent } from 'src/components/atoms/paragraphContent'

describe('ParagraphContent', () => {
  it('should be rendered', () => {
    render(<ParagraphContent>{'test description'}</ParagraphContent>)
    expect(screen.getByText('test description')).toBeInTheDocument()
  })
})
