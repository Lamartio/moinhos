<script setup lang="ts">
const route = useRoute()

const { data: post } = await useAsyncData(`blog-${route.params.slug}`, () =>
  queryCollection('blog').path(`/blog/${route.params.slug}`).first()
)

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found'
  })
}

useSeoMeta({
  title: () => `${post.value?.title} - Moinhos Do Dao`,
  description: () => post.value?.description
})

const formattedDate = computed(() => {
  if (!post.value?.date) return ''
  return new Date(post.value.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})
</script>

<template>
  <div v-if="post">
    <!-- Hero -->
    <HeroSection
      :title="post.title"
      :subtitle="post.category"
      :background-image="post.image"
    />

    <!-- Content -->
    <article class="py-16 px-4">
      <div class="container mx-auto max-w-3xl">
        <div class="mb-8 flex items-center justify-between">
          <NuxtLink to="/activities" class="text-green-700 hover:text-green-800 transition-colors">
            &larr; Back to Stories
          </NuxtLink>
          <time class="text-stone-500">{{ formattedDate }}</time>
        </div>

        <div class="prose prose-stone prose-lg max-w-none prose-img:rounded-xl prose-a:text-green-700">
          <ContentRenderer :value="post" />
        </div>

        <div class="mt-12 pt-8 border-t border-stone-200">
          <p class="text-stone-600 mb-4">Want to learn more about life at the quinta?</p>
          <UButton to="/contact" size="lg">
            Get in Touch
          </UButton>
        </div>
      </div>
    </article>
  </div>
</template>
