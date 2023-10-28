///-----------------CREATING CUSTOM RENDER TEST-----------------///
//Create test-utils.tsx file in src folder
// Add MUI test typescript code from testing library

import { render, screen } from '../../test-utils'
import MuiMode from './MuiMode'

describe('MuiMode', () => {
  test('renders text correctly', () => {
    render(<MuiMode />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toHaveTextContent('dark mode')
  })
})
