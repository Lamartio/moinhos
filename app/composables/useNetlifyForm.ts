export function useNetlifyForm(formName: string) {
  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const error = ref<string | null>(null)

  async function submit(form: HTMLFormElement) {
    isSubmitting.value = true
    error.value = null
    isSuccess.value = false

    try {
      const formData = new FormData(form)

      // Log form data for debugging
      console.log('=== Netlify Form Submission ===')
      console.log('Form name:', formName)
      console.log('Form data:')
      for (const [key, value] of formData.entries()) {
        console.log(`  ${key}: ${value}`)
      }

      const body = new URLSearchParams(formData as unknown as Record<string, string>).toString()
      console.log('Encoded body:', body)

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      })

      console.log('Response status:', response.status)
      console.log('Response ok:', response.ok)

      if (!response.ok) {
        const text = await response.text()
        console.error('Response body:', text)
        throw new Error('Form submission failed')
      }

      console.log('=== Form submitted successfully ===')
      isSuccess.value = true
    }
    catch (e) {
      console.error('Form submission error:', e)
      error.value = e instanceof Error ? e.message : 'An error occurred'
    }
    finally {
      isSubmitting.value = false
    }
  }

  function reset() {
    isSuccess.value = false
    error.value = null
  }

  return {
    isSubmitting,
    isSuccess,
    error,
    submit,
    reset
  }
}
