import React from 'react'

type Props = {}

const Application = (props: Props) => {
  return (
    <>
      <h1>Job Application Form</h1>
      <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Fullname"
            value="Nayan"
            onChange={() => {}}
          />
          <p>all fields Are mandatory</p>
          <span title="close">X</span>
          <img
            src="https://via.placeholder.com/150"
            alt="a person with a laptop"
          />
          <div data-testid="custom-element">Custom HTML Element</div>
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <textarea name="bio" id="bio" />
        </div>
        <div>
          <label htmlFor="job-location">Name</label>
          <select name="job-location" id="job-location">
            <option value="">Select Country</option>
            <option value="US">United States</option>
            <option value="GB">United Kingdom</option>
            <option value="CA">Canada</option>
            <option value="JP">Japan</option>
            <option value="AU">Australia</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" name="termsCondition" id="termsCondition" />{' '}
            I agree to the terms and conditions
          </label>
        </div>
        <button disabled>Submit</button>
      </form>
    </>
  )
}

export default Application
