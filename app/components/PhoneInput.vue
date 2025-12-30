<script setup lang="ts">
import type { SelectMenuItem } from '@nuxt/ui'
import { countryCodes, type CountryCode } from '~/composables/useCountryCodes'

const props = defineProps<{
  modelValue?: string
  countryCode?: string
  required?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'update:countryCode': [value: string]
}>()

const { defaultCountry } = useCountryCodes()

const selectedCountry = ref<SelectMenuItem & { country: CountryCode }>(
  (() => {
    const country = countryCodes.find(c => c.dial === props.countryCode) || defaultCountry
    return {
      label: `${country.flag} ${country.dial}`,
      dial: country.dial,
      name: country.name,
      country
    }
  })()
)

const phoneNumber = ref(props.modelValue || '')

const countryOptions = computed(() =>
  countryCodes.map(country => ({
    label: `${country.flag} ${country.dial}`,
    dial: country.dial,
    name: country.name,
    country
  }))
)

watch(selectedCountry, (item) => {
  if (item?.country) {
    emit('update:countryCode', item.country.dial)
  }
})

watch(phoneNumber, (value) => {
  emit('update:modelValue', value)
})

// Initialize
onMounted(() => {
  emit('update:countryCode', selectedCountry.value.country.dial)
})
</script>

<template>
  <div class="flex gap-2">
    <USelectMenu
      v-model="selectedCountry"
      :items="countryOptions"
      :filter-fields="['label', 'dial', 'name']"
      :search-input="{ placeholder: 'Search...' }"
      class="w-28 shrink-0"
      size="lg"
    />
    <UInput
      v-model="phoneNumber"
      type="tel"
      placeholder="Phone number"
      size="lg"
      class="flex-1"
      :required="required"
    />
  </div>
</template>
