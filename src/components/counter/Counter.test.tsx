import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from './Counter'

//Pointer Events

describe('Counter', () => {
  test('renders correctly', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toBeInTheDocument()

    //find increment button
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    expect(incrementButton).toBeInTheDocument()
  })

  //Initial Test
  test('initial count is zero', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('0')
  })

  //USER EVENT Renders after clicking button
  test('renders after clicking button', async () => {
    userEvent.setup()
    render(<Counter />)
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    await userEvent.click(incrementButton)

    //After Mouse Click
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('1')
  })

  //------------------KEYBOARD INTERACTIONS------------------//

  test('renders a count of 10 after clicking the set button', async () => {
    userEvent.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')

    await userEvent.type(amountInput, '10')
    expect(amountInput).toHaveValue(10)

    //on click set button
    const setButton = screen.getByRole('button', { name: 'Set' })
    await userEvent.click(setButton)
    //Find heading element
    const countElement = screen.getByRole('heading')
    expect(countElement).toHaveTextContent('10')
  })

  //----- Test for Focused Elements in right order with TAB key -----//

  test('Elements are focused in the right order', async () => {
    userEvent.setup()
    render(<Counter />)
    const amountInput = screen.getByRole('spinbutton')
    const setButton = screen.getByRole('button', { name: 'Set' })
    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })

    await userEvent.tab()
    expect(incrementButton).toHaveFocus()

    await userEvent.tab()
    expect(amountInput).toHaveFocus()

    await userEvent.tab()
    expect(setButton).toHaveFocus()
  })
})
