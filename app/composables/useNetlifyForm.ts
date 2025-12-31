export function useNetlifyForm(formName: string) {
  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const error = ref<string | null>(null)

  async function submit(data: Record<string, string>) {
    isSubmitting.value = true
    error.value = null
    isSuccess.value = false

    try {
      // Add form-name to the data
      const formData = {
        'form-name': formName,
        ...data
      }

      // Log form data for debugging
      console.log('=== Netlify Form Submission ===')
      console.log('Form name:', formName)
      console.log('Form data:', formData)

      const body = new URLSearchParams(formData).toString()
      console.log('Encoded body:', body)

      // POST to static file, not SSR route - SSR endpoints don't work with Netlify Forms
      const response = await fetch('/forms.html', {
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
