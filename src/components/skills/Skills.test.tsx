import { logRoles, render, screen } from '@testing-library/react'
import Skills from './Skills'

describe('Skills', () => {
  const skills = ['React', 'TypeScript', 'Jest']

  //Renders correctly
  test('renders correctly', () => {
    render(<Skills skills={skills} />)

    //Get UL tag by role
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  //All items renders in the list
  test('renders a list of skills', () => {
    render(<Skills skills={skills} />)
    //------------------Get All by Role------------------//
    const listItems = screen.getAllByRole('listitem')
    expect(listItems.length).toBe(skills.length)
  })

  //--------------- RENDERS LOGIN BUTTON -----------------//

  test('renders login button', () => {
    render(<Skills skills={skills} />)
    const loginButton = screen.getByRole('button', { name: 'Login' })
    expect(loginButton).toBeInTheDocument()
  })

  //Let Start Learning button is not rendered
  //Query By Role
  test('Start learning button is not rendered', () => {
    render(<Skills skills={skills} />)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start Learning',
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  //--------------- RENDERS APPEARING/DISSAPEARING (USEEFFECT) -----------------//
  test('Start learning button is eventually displayed', async () => {
    render(<Skills skills={skills} />)
    // const view = render(<Skills skills={skills} />);
    // logRoles(view.container);

    //debugging
    // screen.debug();
    const startLearningButton = await screen.findByRole(
      'button',
      {
        name: 'Start Learning',
      },
      {
        timeout: 2000,
      },
    )
    expect(startLearningButton).toBeInTheDocument()
  })
})
