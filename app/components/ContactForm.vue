<script setup lang="ts">
const { isSubmitting, isSuccess, error, submit, reset } = useNetlifyForm('contact2')

// Track phone fields for hidden inputs (FormData needs name attributes)
const phone = ref('')
const countryCode = ref('')
const phoneFull = computed(() => phone.value ? `${countryCode.value} ${phone.value}` : '')

async function handleSubmit(event: Event) {
  const form = event.target as HTMLFormElement
  await submit(form)
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
      <UButton variant="outline" @click="reset">
        Send Another Message
      </UButton>
    </div>

    <!-- Form -->
    <form v-else name="contact2" class="space-y-6" method="POST" data-netlify="true" @submit.prevent="handleSubmit">
      <input type="hidden" name="form-name" value="contact2">
      <!-- Hidden fields for phone data (PhoneInput doesn't have name attrs) -->
      <input type="hidden" name="phone" :value="phone">
      <input type="hidden" name="countryCode" :value="countryCode">
      <input type="hidden" name="phoneFull" :value="phoneFull">

      <UFormField label="Your Name" name="name" required>
        <UInput
          name="name"
          placeholder="Enter your name"
          size="lg"
          class="w-full"
          required
        />
      </UFormField>

      <UFormField label="Your Email" name="email" required>
        <UInput
          name="email"
          type="email"
          placeholder="Enter your email"
          size="lg"
          class="w-full"
          required
        />
      </UFormField>

      <UFormField label="Phone Number" name="phone">
        <PhoneInput
          v-model="phone"
          v-model:country-code="countryCode"
        />
      </UFormField>

      <UFormField label="Subject" name="subject" required>
        <UInput
          name="subject"
          placeholder="What is this about?"
          size="lg"
          class="w-full"
          required
        />
      </UFormField>

      <UFormField label="Message" name="message" required>
        <UTextarea
          name="message"
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
