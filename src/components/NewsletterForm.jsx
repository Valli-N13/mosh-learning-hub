import { useState } from 'react'

const formId = import.meta.env.VITE_FORMSPREE_FORM_ID

function NewsletterForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const email = form.email.value.trim()
    const interest = form.interest.value

    if (!formId) {
      setStatus('error')
      setMessage(
        'The newsletter form is not configured yet. Add your Formspree form ID to the VITE_FORMSPREE_FORM_ID environment variable to enable live submissions.',
      )
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email || !emailPattern.test(email)) {
      setStatus('error')
      setMessage('Please enter a valid email address before submitting.')
      form.email.focus()
      return
    }

    setIsSubmitting(true)
    setStatus('idle')
    setMessage('')

    try {
      const response = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: new FormData(form),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      const result = await response.json().catch(() => ({}))

      if (result.ok === false) {
        throw new Error('Submission rejected by Formspree')
      }

      setStatus('success')
      setMessage('Thanks for joining. Your email is on the list and the next update is on the way.')
      form.reset()
      form.interest.value = interest
    } catch (error) {
      setStatus('error')
      setMessage('We could not send your message. Please try again in a moment or contact the site owner.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const isDisabled = isSubmitting || !formId

  return (
    <form className="newsletter-form" onSubmit={handleSubmit} noValidate>
      <div className="input-row">
        <label className="sr-only" htmlFor="newsletter-email">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          placeholder="Enter your email"
          aria-label="Email address"
          disabled={isDisabled}
        />
        <button type="submit" className="button primary" disabled={isDisabled}>
          {isSubmitting ? 'Sending...' : 'Join newsletter'}
        </button>
      </div>

      <div className="interest-row">
        <label htmlFor="newsletter-interest">Programming interest</label>
        <select id="newsletter-interest" name="interest" defaultValue="Python" disabled={isDisabled}>
          <option value="Python">Python</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Web Development">Web Development</option>
          <option value="Java">Java</option>
        </select>
      </div>

      {message && (
        <p className={`form-message ${status}`} role="status" aria-live="polite">
          {message}
        </p>
      )}

      {!formId && (
        <p className="config-note">
          This project is ready for a real Formspree form. Create one, copy its form ID, and add
          <strong> VITE_FORMSPREE_FORM_ID</strong> to your environment file.
        </p>
      )}
    </form>
  )
}

export default NewsletterForm
