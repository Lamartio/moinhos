<script setup lang="ts">
import { MAP_COORDINATES } from '~/constants'

const props = defineProps<{
  address: string
  coordinates?: {
    lat: number
    lng: number
  }
}>()

const coords = computed(() => props.coordinates || MAP_COORDINATES)

const googleMapsUrl = computed(() => {
  return `https://www.google.com/maps/search/?api=1&query=${coords.value.lat},${coords.value.lng}`
})

const staticMapUrl = computed(() => {
  // Using placeholder with coordinates text
  return `https://placehold.co/600x300/166534/white?text=View+on+Google+Maps`
})
</script>

<template>
  <div class="space-y-4">
    <!-- Map Image -->
    <a
      :href="googleMapsUrl"
      target="_blank"
      rel="noopener noreferrer"
      class="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <img
        :src="staticMapUrl"
        :alt="`Map showing ${address}`"
        class="w-full h-64 object-cover"
      />
      <div class="bg-green-800 text-white py-3 px-4 text-center">
        <span class="font-medium">Open in Google Maps</span>
      </div>
    </a>

    <!-- Address -->
    <div class="bg-white rounded-xl p-6 shadow-md">
      <h3 class="font-semibold text-stone-800 mb-2">Our Address</h3>
      <p class="text-stone-600 whitespace-pre-line">{{ address }}</p>
    </div>
  </div>
</template>
