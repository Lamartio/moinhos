<script setup lang="ts">
const props = defineProps<{
  images: Array<{
    src: string
    alt: string
  }>
}>()

const selectedIndex = ref<number | null>(null)

const selectedImage = computed(() => {
  if (selectedIndex.value === null) return null
  return props.images[selectedIndex.value]
})

function openLightbox(index: number) {
  selectedIndex.value = index
}

function closeLightbox() {
  selectedIndex.value = null
}

function next() {
  if (selectedIndex.value !== null && selectedIndex.value < props.images.length - 1) {
    selectedIndex.value++
  }
}

function prev() {
  if (selectedIndex.value !== null && selectedIndex.value > 0) {
    selectedIndex.value--
  }
}

// Keyboard navigation
function handleKeydown(e: KeyboardEvent) {
  if (selectedIndex.value === null) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') next()
  if (e.key === 'ArrowLeft') prev()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div>
    <!-- Gallery Grid -->
    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <button
        v-for="(image, index) in images"
        :key="index"
        class="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-green-500"
        @click="openLightbox(index)"
      >
        <NuxtImg
          :src="image.src"
          :alt="image.alt"
          class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </button>
    </div>

    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="selectedIndex !== null"
        class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
        @click.self="closeLightbox"
      >
        <!-- Close button -->
        <button
          class="absolute top-4 right-4 text-white text-4xl hover:text-stone-300 transition-colors"
          @click="closeLightbox"
        >
          &times;
        </button>

        <!-- Previous button -->
        <button
          v-if="selectedIndex > 0"
          class="absolute left-4 text-white text-4xl hover:text-stone-300 transition-colors p-4"
          @click="prev"
        >
          &larr;
        </button>

        <!-- Image -->
        <div v-if="selectedImage" class="max-w-4xl max-h-[80vh] px-16">
          <NuxtImg
            :src="selectedImage.src"
            :alt="selectedImage.alt"
            class="max-w-full max-h-[80vh] object-contain"
          />
          <p class="text-white text-center mt-4">
            {{ selectedImage.alt }}
          </p>
        </div>

        <!-- Next button -->
        <button
          v-if="selectedIndex < images.length - 1"
          class="absolute right-4 text-white text-4xl hover:text-stone-300 transition-colors p-4"
          @click="next"
        >
          &rarr;
        </button>

        <!-- Counter -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white">
          {{ selectedIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </Teleport>
  </div>
</template>
