import { render, screen } from '@testing-library/react'

import { CirclePicture } from 'src/components/atoms/picture'

describe('Picture', () => {
  it('should be rendered with isCircle', () => {
    render(
      <CirclePicture
        src={'./dummy.jpg'}
        alt={'dummy alt'}
        width={200}
        height={200}
        isCircle
      />
    )
    expect(screen.getByRole('img').getAttribute('src')).toBe('./dummy.jpg')
    expect(screen.getByRole('img').getAttribute('alt')).toBe('dummy alt')
  })

  it('should be rendered', () => {
    render(<CirclePicture src={'./dummy.jpg'} alt={'dummy alt'} />)
    expect(screen.getByRole('img').getAttribute('src')).toBe('./dummy.jpg')
    expect(screen.getByRole('img').getAttribute('alt')).toBe('dummy alt')
  })
})
