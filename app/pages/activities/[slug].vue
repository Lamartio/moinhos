<script setup lang="ts">
const route = useRoute()

const { data: activity } = await useAsyncData(`activity-${route.params.slug}`, () =>
  queryCollection('activities').path(`/activities/${route.params.slug}`).first()
)

if (!activity.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Activity not found'
  })
}

useSeoMeta({
  title: () => `${activity.value?.title} - Moinhos Do Dao`,
  description: () => activity.value?.description
})
</script>

<template>
  <div v-if="activity">
    <!-- Hero -->
    <HeroSection
      :title="activity.title"
      :background-image="activity.image"
    />

    <!-- Content -->
    <article class="py-16 px-4">
      <div class="container mx-auto max-w-3xl">
        <div class="mb-8">
          <NuxtLink to="/activities" class="text-green-700 hover:text-green-800 transition-colors">
            &larr; Back to Activities
          </NuxtLink>
        </div>

        <div class="prose prose-stone prose-lg max-w-none">
          <ContentRenderer :value="activity" />
        </div>

        <div class="mt-12 pt-8 border-t border-stone-200">
          <p class="text-stone-600 mb-4">Interested in this activity?</p>
          <UButton to="/contact" size="lg">
            Contact Us to Book
          </UButton>
        </div>
      </div>
    </article>
  </div>
</template>
