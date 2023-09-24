import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import ReCAPTCHA from 'react-google-recaptcha'

const Contact = () => {
  const form = useRef()
  const [isVerified, setIsVerified] = useState(false)

  function onChange(value) {
    console.log('Captcha value:', value)
    setIsVerified(true)
  }

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text)
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
  return (
    <div className='page'>
      <form className='form' ref={form} onSubmit={sendEmail}>
        <div className='form-row'>
          <label className='form-label'>Name</label>
          <input className='form-input' type='text' name='user_name' />
        </div>

        <div className='form-row'>
          <label className='form-label'>Email</label>
          <input className='form-input' type='email' name='user_email' />
        </div>

        <div className='form-row'>
          <label className='form-label'>Message</label>
          <textarea
            rows={5}
            cols={10}
            className='form-textarea'
            name='message'
          />
        </div>
        <ReCAPTCHA
          sitekey='6LfusjQoAAAAAG0XzuLXhEF2e1f2KwCQuCsdR_Za'
          onChange={onChange}
        />
        <input
          disabled={!isVerified}
          className='btn btn-block'
          type='submit'
          value='Send'
        />
      </form>
    </div>
  )
}

export default Contact
