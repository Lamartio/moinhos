export function useNetlifyForm(formName: string) {
  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const error = ref<string | null>(null)

  async function submit(data: Record<string, string>) {
    isSubmitting.value = true
    error.value = null
    isSuccess.value = false

    try {
      const formData = {
        'form-name': formName,
        ...data
      }

      const body = new URLSearchParams(formData).toString()

      // POST to static file - SSR endpoints don't work with Netlify Forms
      const response = await fetch('/forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      isSuccess.value = true
    }
    catch (e) {
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
