<script setup lang="ts">
const props = defineProps<{
  propertyName?: string
}>()

const { isSubmitting, isSuccess, error, submit, reset } = useNetlifyForm('booking3')

const property = computed(() => props.propertyName || 'Boa Vista Cottage')

// Form state
const name = ref('')
const email = ref('')
const phoneDigits = ref('')
const countryCode = ref('')
const guests = ref('2')
const checkIn = ref('')
const checkOut = ref('')
const message = ref('')

// Combined phone number
const phone = computed(() => phoneDigits.value ? `${countryCode.value} ${phoneDigits.value}` : '')

// Set minimum date to today
const today = new Date().toISOString().split('T')[0]

async function handleSubmit() {
  await submit({
    name: name.value,
    email: email.value,
    phone: phone.value,
    propertyName: property.value,
    guests: guests.value,
    checkIn: checkIn.value,
    checkOut: checkOut.value,
    message: message.value
  })
}

function resetForm() {
  name.value = ''
  email.value = ''
  phoneDigits.value = ''
  guests.value = '2'
  checkIn.value = ''
  checkOut.value = ''
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
      <h3 class="text-xl font-semibold text-highlighted mb-2">Booking Request Sent!</h3>
      <p class="text-toned mb-6">
        Thank you for your interest in {{ property }}.<br>
        We'll review your request and get back to you shortly.
      </p>
      <UButton variant="outline" @click="resetForm">
        Make Another Booking
      </UButton>
    </div>

    <!-- Form -->
    <form v-else class="space-y-6" @submit.prevent="handleSubmit">
      <div class="grid md:grid-cols-2 gap-6">
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
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <UFormField label="Phone Number">
          <PhoneInput
            v-model="phoneDigits"
            v-model:country-code="countryCode"
          />
        </UFormField>

        <UFormField label="Number of Guests" required>
          <UInput
            v-model="guests"
            type="number"
            :min="1"
            :max="10"
            size="lg"
            class="w-full"
          />
        </UFormField>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <UFormField label="Check-in Date" required>
          <UInput
            v-model="checkIn"
            type="date"
            :min="today"
            size="lg"
            class="w-full"
            required
          />
        </UFormField>

        <UFormField label="Check-out Date" required>
          <UInput
            v-model="checkOut"
            type="date"
            :min="checkIn || today"
            size="lg"
            class="w-full"
            required
          />
        </UFormField>
      </div>

      <UFormField label="Additional Notes">
        <UTextarea
          v-model="message"
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
