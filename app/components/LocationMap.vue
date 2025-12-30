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

    <!-- Entrances -->
    <div class="bg-default rounded-xl p-6 shadow-md">
      <h3 class="font-semibold text-highlighted mb-4">How to Get Here</h3>
      <div class="space-y-3">
        <a
          v-for="location in locations"
          :key="location.name"
          :href="getGoogleMapsUrl(location.coords)"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-between p-3 bg-muted rounded-lg hover:bg-primary/10 transition-colors group"
        >
          <div>
            <p class="font-medium text-highlighted group-hover:text-primary">{{ location.name }}</p>
            <p class="text-sm text-muted">{{ location.description }}</p>
          </div>
          <span class="text-primary text-sm font-medium">Open Map &rarr;</span>
        </a>
      </div>
    </div>
  </div>
</template>
