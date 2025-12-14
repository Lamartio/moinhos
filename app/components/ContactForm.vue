<script setup lang="ts">
import { EMAIL_PLACEHOLDER } from '~/constants'

const props = defineProps<{
  email?: string
}>()

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const emailAddress = computed(() => props.email || EMAIL_PLACEHOLDER)

const mailtoLink = computed(() => {
  const subject = encodeURIComponent(form.subject || 'Contact from Website')
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )
  return `mailto:${emailAddress.value}?subject=${subject}&body=${body}`
})

function handleSubmit() {
  window.location.href = mailtoLink.value
}
</script>

<template>
  <form class="space-y-6" @submit.prevent="handleSubmit">
    <UFormField label="Your Name" name="name" required>
      <UInput
        v-model="form.name"
        placeholder="Enter your name"
        size="lg"
        class="w-full"
        required
      />
    </UFormField>

    <UFormField label="Your Email" name="email" required>
      <UInput
        v-model="form.email"
        type="email"
        placeholder="Enter your email"
        size="lg"
        class="w-full"
        required
      />
    </UFormField>

    <UFormField label="Subject" name="subject">
      <UInput
        v-model="form.subject"
        placeholder="What is this about?"
        size="lg"
        class="w-full"
      />
    </UFormField>

    <UFormField label="Message" name="message" required>
      <UTextarea
        v-model="form.message"
        placeholder="Write your message here..."
        :rows="5"
        size="lg"
        class="w-full"
        required
      />
    </UFormField>

    <UButton type="submit" size="lg" block>
      Send Message
    </UButton>

    <p class="text-sm text-stone-500 text-center">
      This will open your email client to send the message.
    </p>
  </form>
</template>
