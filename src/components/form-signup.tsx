import React from 'react'

const FormSignup = () => {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://looparch.us18.list-manage.com/subscribe/post?u=6236ae131b11b8506326eed86&amp;id=a7bb0e0ce6"
        method="POST"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="grid grid-cols-1 gap-4"
        target="_blank"
      >
        <label className="block">
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
        {/* <label className="block">
          <span className="form-label">First Name</span>
          <input
            type="text"
            name="FNAME"
            id="mce-FNAME"
            autoComplete="given-name"
            className="block w-full mt-1 required email input form-input"
            placeholder=""
          />
        </label>
        <label className="block">
          <span className="form-label">Last Name</span>
          <input
            type="text"
            name="LNAME"
            id="mce-LNAME"
            autoComplete="family-name"
            className="block w-full mt-1 required email input form-input"
            placeholder=""
          />
        </label> */}
        <div id="mce-responses" className="clear">
          <div className="response" id="mce-error-response" />
          <div className="response" id="mce-success-response" />
        </div>
        <div aria-hidden="true" className="hidden">
          <input
            type="text"
            name="b_6236ae131b11b8506326eed86_a7bb0e0ce6"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        <div className="clear">
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
