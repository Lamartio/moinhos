<script setup lang="ts">
import { EMAIL_PLACEHOLDER } from '~/constants'

const props = defineProps<{
  propertyName?: string
  email?: string
}>()

const form = reactive({
  name: '',
  email: '',
  checkIn: '',
  checkOut: '',
  guests: 2,
  message: ''
})

const propertyName = computed(() => props.propertyName || 'Boa Vista Cottage')
const emailAddress = computed(() => props.email || EMAIL_PLACEHOLDER)

// Set minimum date to today
const today = new Date().toISOString().split('T')[0]

const mailtoLink = computed(() => {
  const subject = encodeURIComponent(`Booking Request: ${propertyName.value}`)
  const body = encodeURIComponent(
    `Booking Request for ${propertyName.value}

Guest Information:
- Name: ${form.name}
- Email: ${form.email}
- Number of Guests: ${form.guests}

Dates:
- Check-in: ${form.checkIn}
- Check-out: ${form.checkOut}

Additional Notes:
${form.message || 'None'}

---
Sent from the Moinhos Do Dao website`
  )
  return `mailto:${emailAddress.value}?subject=${subject}&body=${body}`
})

function handleSubmit() {
  window.location.href = mailtoLink.value
}
</script>

<template>
  <form class="space-y-6" @submit.prevent="handleSubmit">
    <div class="grid md:grid-cols-2 gap-6">
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
    </div>

    <div class="grid md:grid-cols-2 gap-6">
      <UFormField label="Check-in Date" name="checkIn" required>
        <UInput
          v-model="form.checkIn"
          type="date"
          :min="today"
          size="lg"
          class="w-full"
          required
        />
      </UFormField>

      <UFormField label="Check-out Date" name="checkOut" required>
        <UInput
          v-model="form.checkOut"
          type="date"
          :min="form.checkIn || today"
          size="lg"
          class="w-full"
          required
        />
      </UFormField>
    </div>

    <UFormField label="Number of Guests" name="guests">
      <UInput
        v-model.number="form.guests"
        type="number"
        :min="1"
        :max="6"
        size="lg"
        class="w-full"
      />
    </UFormField>

    <UFormField label="Additional Notes" name="message">
      <UTextarea
        v-model="form.message"
        placeholder="Any special requests or questions?"
        :rows="3"
        size="lg"
        class="w-full"
      />
    </UFormField>

    <UButton type="submit" size="lg" block>
      Request Booking
    </UButton>

    <p class="text-sm text-stone-500 text-center">
      This will open your email client with the booking details pre-filled.
    </p>
  </form>
</template>
