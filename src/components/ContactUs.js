import React from 'react'

function ContactUs({contactUsDatas}) {
  return (
    <>
      <section className="contact-us">
      <h1>{contactUsDatas.title1} <br/> {contactUsDatas.title2}</h1>
      <div className="contact-form">
        <input type="email" placeholder="Your email address" />
        <button>{contactUsDatas.btn}</button>
      </div>
    </section>
    </>
  )
}

export default ContactUs