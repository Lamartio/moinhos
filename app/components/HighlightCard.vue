<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon?: string
  to?: string
  image?: string
}>()
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    class="group block bg-default rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
  >
    <div v-if="image" class="h-48 overflow-hidden">
      <NuxtImg
        :src="image"
        :alt="title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div v-else class="h-48 bg-primary/10 flex items-center justify-center">
      <UIcon v-if="icon" :name="icon" class="text-6xl text-primary" />
      <div v-else class="text-6xl text-primary">
        <slot name="icon" />
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold text-highlighted mb-2 group-hover:text-primary transition-colors">
        {{ title }}
      </h3>
      <p class="text-toned">
        {{ description }}
      </p>
    </div>
  </NuxtLink>

  <div
    v-else
    class="bg-default rounded-xl shadow-md overflow-hidden"
  >
    <div v-if="image" class="h-48 overflow-hidden">
      <NuxtImg
        :src="image"
        :alt="title"
        class="w-full h-full object-cover"
      />
    </div>
    <div v-else class="h-48 bg-primary/10 flex items-center justify-center">
      <UIcon v-if="icon" :name="icon" class="text-6xl text-primary" />
      <div v-else class="text-6xl text-primary">
        <slot name="icon" />
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold text-highlighted mb-2">
        {{ title }}
      </h3>
      <p class="text-toned">
        {{ description }}
      </p>
    </div>
  </div>
</template>
