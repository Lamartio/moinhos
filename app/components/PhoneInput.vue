<script setup lang="ts">
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

const selectedCountry = ref<CountryCode>(
  countryCodes.find(c => c.dial === props.countryCode) || defaultCountry
)

const phoneNumber = ref(props.modelValue || '')

const countryOptions = computed(() =>
  countryCodes.map(country => ({
    label: `${country.flag} ${country.dial}`,
    value: country.dial,
    country
  }))
)

watch(selectedCountry, (country) => {
  emit('update:countryCode', country.dial)
})

watch(phoneNumber, (value) => {
  emit('update:modelValue', value)
})

// Initialize
onMounted(() => {
  emit('update:countryCode', selectedCountry.value.dial)
})
</script>

<template>
  <div class="flex gap-2">
    <USelectMenu
      v-model="selectedCountry"
      :items="countryOptions"
      value-key="value"
      class="w-32 shrink-0"
      size="lg"
    >
      <template #default>
        <UButton
          color="neutral"
          variant="outline"
          class="w-full justify-between"
          size="lg"
        >
          <span>{{ selectedCountry.flag }} {{ selectedCountry.dial }}</span>
          <UIcon name="i-lucide-chevron-down" class="size-4" />
        </UButton>
      </template>
      <template #item="{ item }">
        <span>{{ item.country.flag }} {{ item.country.dial }}</span>
        <span class="text-muted text-sm ml-2">{{ item.country.name }}</span>
      </template>
    </USelectMenu>
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
