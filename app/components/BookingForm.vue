<script setup lang="ts">
const props = defineProps<{
  propertyName?: string
}>()

const { isSubmitting, isSuccess, error, submit, reset } = useNetlifyForm('booking2')

const propertyName = computed(() => props.propertyName || 'Boa Vista Cottage')

// Track phone fields for hidden inputs (FormData needs name attributes)
const phone = ref('')
const countryCode = ref('')
const phoneFull = computed(() => phone.value ? `${countryCode.value} ${phone.value}` : '')

// Set minimum date to today
const today = new Date().toISOString().split('T')[0]

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
      <h3 class="text-xl font-semibold text-highlighted mb-2">Booking Request Sent!</h3>
      <p class="text-toned mb-6">
        Thank you for your interest in {{ propertyName }}.<br>
        We'll review your request and get back to you shortly.
      </p>
      <UButton variant="outline" @click="reset">
        Make Another Booking
      </UButton>
    </div>

    <!-- Form -->
    <form v-else name="booking2" class="space-y-6" method="POST" data-netlify="true" @submit.prevent="handleSubmit">
      <input type="hidden" name="form-name" value="booking2">
      <input type="hidden" name="propertyName" :value="propertyName">
      <input type="hidden" name="subject" :value="`Booking Request: ${propertyName}`">
      <!-- Hidden fields for phone data (PhoneInput doesn't have name attrs) -->
      <input type="hidden" name="phone" :value="phone">
      <input type="hidden" name="countryCode" :value="countryCode">
      <input type="hidden" name="phoneFull" :value="phoneFull">

      <div class="grid md:grid-cols-2 gap-6">
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
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <UFormField label="Phone Number" name="phone">
          <PhoneInput
            v-model="phone"
            v-model:country-code="countryCode"
          />
        </UFormField>

        <UFormField label="Number of Guests" name="guests" required>
          <UInput
            name="guests"
            type="number"
            :min="1"
            :max="10"
            value="2"
            size="lg"
            class="w-full"
          />
        </UFormField>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <UFormField label="Check-in Date" name="checkIn" required>
          <UInput
            name="checkIn"
            type="date"
            :min="today"
            size="lg"
            class="w-full"
            required
          />
        </UFormField>

        <UFormField label="Check-out Date" name="checkOut" required>
          <UInput
            name="checkOut"
            type="date"
            :min="today"
            size="lg"
            class="w-full"
            required
          />
        </UFormField>
      </div>

      <UFormField label="Additional Notes" name="message">
        <UTextarea
          name="message"
          placeholder="Any special requests or questions?"
          :rows="3"
          size="lg"
          class="w-full"
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
        {{ isSubmitting ? 'Submitting...' : 'Request Booking' }}
      </UButton>

    </form>
  </div>
</template>
