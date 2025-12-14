<script setup lang="ts">
import { COORDINATES } from '~/constants'

const props = defineProps<{
  address: string
}>()

const locations = [
  {
    name: 'Moinhos Do Dao',
    description: 'Main entrance',
    coords: COORDINATES.quinta
  },
  {
    name: 'Entrance via Fagilde',
    description: 'Northern access',
    coords: COORDINATES.fagilde
  },
  {
    name: 'Entrance via Tibaldinho',
    description: 'Southern access',
    coords: COORDINATES.tibaldinho
  }
]

function getGoogleMapsUrl(coords: { lat: number; lng: number }) {
  return `https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}`
}
</script>

<template>
  <div class="space-y-4">
    <!-- Main Location -->
    <a
      :href="getGoogleMapsUrl(COORDINATES.quinta)"
      target="_blank"
      rel="noopener noreferrer"
      class="block rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <img
        src="~/assets/maps.png"
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

    <!-- Entrances -->
    <div class="bg-white rounded-xl p-6 shadow-md">
      <h3 class="font-semibold text-stone-800 mb-4">How to Get Here</h3>
      <div class="space-y-3">
        <a
          v-for="location in locations"
          :key="location.name"
          :href="getGoogleMapsUrl(location.coords)"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-between p-3 bg-stone-50 rounded-lg hover:bg-green-50 transition-colors group"
        >
          <div>
            <p class="font-medium text-stone-800 group-hover:text-green-800">{{ location.name }}</p>
            <p class="text-sm text-stone-500">{{ location.description }}</p>
          </div>
          <span class="text-green-700 text-sm font-medium">Open Map &rarr;</span>
        </a>
      </div>
    </div>
  </div>
</template>
