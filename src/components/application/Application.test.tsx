import { render, screen } from '@testing-library/react'
import Application from './Application'
describe('Application', () => {
  test('renders correctly', () => {
    render(<Application />)

    //Checking Page Heading
    const pageHeading = screen.getByRole('heading', {
      level: 1,
    })
    expect(pageHeading).toBeInTheDocument()

    const sectionHeading = screen.getByRole('heading', {
      level: 2,
    })
    expect(sectionHeading).toBeInTheDocument()

    //checking if input element is present or not
    const nameElement = screen.getByRole('textbox', {
      name: 'Name',
    })
    expect(nameElement).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio',
    })
    expect(bioElement).toBeInTheDocument()

    //checking select element
    const jobLocationElement = screen.getByRole('combobox')
    expect(jobLocationElement).toBeInTheDocument()

    //Terms and conditions checkbox
    const termsElement = screen.getByRole('checkbox')
    expect(termsElement).toBeInTheDocument()

    //Check if Submit button is present
    const submitButtonElement = screen.getByRole('button')
    expect(submitButtonElement).toBeInTheDocument()

    //------------------Get Label Text Testing------------------//
    //Checking label text
    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input',
    })
    expect(nameElement2).toBeInTheDocument()

    const termsElement2 = screen.getByLabelText(
      'I agree to the terms and conditions',
    )
    expect(termsElement2).toBeInTheDocument()

    //------------------Get by Placeholder------------------//
    const nameElement3 = screen.getByPlaceholderText('Fullname')
    expect(nameElement3).toBeInTheDocument()

    //------------------Get by Text------------------//
    const paragraphElement = screen.getByText(/^All fields are mandatory$/i)
    expect(paragraphElement).toBeInTheDocument()

    //------------------Get by Display Value------------------//
    const nameElement4 = screen.getByDisplayValue('Nayan')
    expect(nameElement4).toBeInTheDocument()

    //------------------Get by ALT------------------//
    const imageElement = screen.getByAltText('a person with a laptop')
    expect(imageElement).toBeInTheDocument()

    //------------------Get by Title------------------//
    const closeElement = screen.getByTitle('close')
    expect(closeElement).toBeInTheDocument()

    //------------------Get by Test ID------------------//
    const customElement = screen.getByTestId('custom-element')
    expect(customElement).toBeInTheDocument()
    //------------------ Submit Button disabled initially ------------------//
    expect(submitButtonElement).toBeDisabled()
  })
})
