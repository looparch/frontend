import React from 'react'

const FormSignup = () => {
  return (
    <div className="flex">
      <form
        action="https://looparch.us18.list-manage.com/subscribe/post?u=6236ae131b11b8506326eed86&amp;id=a7bb0e0ce6"
        method="POST"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="items-end w-full gap-4"
        target="_blank"
      >
        <label className="block w-full">
          <span className="form-label">Email Address*</span>
          <input
            type="email"
            name="EMAIL"
            className="block w-full mt-1 required email input form-input"
            id="mce-EMAIL"
            autoComplete="email"
            placeholder=""
          />
        </label>
        <div className="flex justify-end mt-4">
          <input
            type="submit"
            value="Subscribe"
            name="subscribe"
            id="mc-embedded-subscribe"
            className="button is-primary"
          />
        </div>
      </form>
    </div>
  )
}

export default FormSignup
