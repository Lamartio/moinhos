<script setup lang="ts">
defineProps<{
  title: string
  subtitle?: string
  backgroundImage?: string
}>()
</script>

<template>
  <section
    class="relative h-[70vh] min-h-[500px] flex items-center justify-center text-white"
    :style="backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}"
    :class="[
      backgroundImage ? 'bg-cover bg-center' : 'bg-green-800'
    ]"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/40" />

    <!-- Content -->
    <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <h1 class="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="text-xl md:text-2xl opacity-90 drop-shadow-md">
        {{ subtitle }}
      </p>
      <div class="mt-8">
        <slot />
      </div>
    </div>
  </section>
</template>
