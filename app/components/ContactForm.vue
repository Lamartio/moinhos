<script setup lang="ts">
const { isSubmitting, isSuccess, error, submit, reset } = useNetlifyForm('contact3')

// Form state
const name = ref('')
const email = ref('')
const phoneDigits = ref('')
const countryCode = ref('')
const subject = ref('')
const message = ref('')

// Combined phone number
const phone = computed(() => phoneDigits.value ? `${countryCode.value} ${phoneDigits.value}` : '')

async function handleSubmit() {
  await submit({
    name: name.value,
    email: email.value,
    phone: phone.value,
    subject: subject.value,
    message: message.value
  })
}

function resetForm() {
  name.value = ''
  email.value = ''
  phoneDigits.value = ''
  subject.value = ''
  message.value = ''
  reset()
}
</script>

<template>
  <div>
    <!-- Success State -->
    <div v-if="isSuccess" class="text-center py-8">
      <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
        <UIcon name="i-lucide-check" class="size-8 text-primary" />
      </div>
      <h3 class="text-xl font-semibold text-highlighted mb-2">Message Sent!</h3>
      <p class="text-toned mb-6">Thank you for reaching out. We'll get back to you soon.</p>
      <UButton variant="outline" @click="resetForm">
        Send Another Message
      </UButton>
    </div>

    <!-- Form -->
    <form v-else class="space-y-6" @submit.prevent="handleSubmit">
      <UFormField label="Your Name" required>
        <UInput
          v-model="name"
          placeholder="Enter your name"
          size="lg"
          class="w-full"
          required
        />
      </UFormField>

      <UFormField label="Your Email" required>
        <UInput
          v-model="email"
          type="email"
          placeholder="Enter your email"
          size="lg"
          class="w-full"
          required
        />
      </UFormField>

      <UFormField label="Phone Number">
        <PhoneInput
          v-model="phoneDigits"
          v-model:country-code="countryCode"
        />
      </UFormField>

      <UFormField label="Subject" required>
        <UInput
          v-model="subject"
          placeholder="What is this about?"
          size="lg"
          class="w-full"
          required
        />
      </UFormField>

      <UFormField label="Message" required>
        <UTextarea
          v-model="message"
          placeholder="Write your message here..."
          :rows="5"
          size="lg"
          class="w-full"
          required
        />
      </UFormField>

      <!-- Error Message -->
      <UAlert
        v-if="error"
        color="error"
        variant="soft"
        :title="error"
        icon="i-lucide-alert-circle"
      />

      <UButton type="submit" size="lg" block :loading="isSubmitting">
        {{ isSubmitting ? 'Sending...' : 'Send Message' }}
      </UButton>

      <p class="text-sm text-muted text-center">
        Your message will be sent directly to our team.
      </p>
    </form>
  </div>
</template>
