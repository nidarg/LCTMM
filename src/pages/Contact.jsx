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
        `${import.meta.env.VITE_EMAIL_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_EMAIL_PUBLIC_KEY}`,
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
    <div className="contact-page">
      <div className="contact">
          <h5>Informatii de contact:</h5>
        <p>Email: lctmmoffice@gmail.com</p>
        <p>Telefoane:0743845283 / 0770804170 </p>
      </div>
      <form className='form' ref={form} onSubmit={sendEmail}>
      
        <div className='form-row'>
          <label className='form-label'>Nume</label>
          <input required className='form-input' type='text' name='user_name' />
        </div>

        <div className='form-row'>
          <label className='form-label'>Email</label>
          <input required className='form-input' type='email' name='user_email' />
        </div>

        <div className='form-row'>
          <label className='form-label'>Telefon</label>
          <input required className='form-input' type='text' name='user_phone' />
        </div>

        <div className='form-row'>
          <label className='form-label'>Mesaj</label>
          <textarea
          required
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
          className={!isVerified ? 'disabled btn-block': 'btn btn-block'}
          type='submit'
          value='Send'
        />
      </form>
  </div>
  )
}

export default Contact
