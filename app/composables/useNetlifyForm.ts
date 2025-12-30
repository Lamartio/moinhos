export function useNetlifyForm(formName: string) {
  const isSubmitting = ref(false)
  const isSuccess = ref(false)
  const error = ref<string | null>(null)

  async function submit(data: Record<string, unknown>) {
    isSubmitting.value = true
    error.value = null
    isSuccess.value = false

    try {
      const formData = new FormData()
      formData.append('form-name', formName)

      for (const [key, value] of Object.entries(data)) {
        if (value !== null && value !== undefined) {
          formData.append(key, String(value))
        }
      }

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString()
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
