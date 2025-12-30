<script setup lang="ts">
useSeoMeta({
  title: 'Activities - Moinhos Do Dao',
  description: 'Explore our farm activities: nature walks, workshops, and hands-on farming experiences.'
})

const { data: activities } = await useAsyncData('activities', () =>
  queryCollection('activities').order('date', 'DESC').all()
)

const { data: blogPosts } = await useAsyncData('blog', () =>
  queryCollection('blog').order('date', 'DESC').all()
)
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection
      title="Farm Activities"
      subtitle="Experience authentic rural life through our hands-on activities"
      background-image="https://images.unsplash.com/photo-1500076656116-558758c991c1?w=1600&h=900&fit=crop"
    />

    <!-- Activities Grid -->
    <section class="py-16 px-4 bg-muted">
      <div class="container mx-auto">
        <div v-if="activities?.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <HighlightCard
            v-for="activity in activities"
            :key="activity.stem"
            :title="activity.title"
            :description="activity.description"
            :to="activity.path"
            :image="activity.image?.trim() || 'https://images.unsplash.com/photo-1500076656116-558758c991c1?w=600&h=400&fit=crop'"
          />
        </div>

        <div v-else class="text-center py-12">
          <p class="text-toned text-lg">
            Activities coming soon! Check back later for our upcoming events and experiences.
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Section -->
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-6xl">
        <h2 class="text-3xl font-bold text-highlighted mb-4 text-center">
          Stories from the Quinta
        </h2>
        <p class="text-toned text-center mb-12 max-w-2xl mx-auto">
          Read about life at Moinhos do Dão, our conservation efforts, and experiences from guests and volunteers.
        </p>

        <div v-if="blogPosts?.length" class="flex flex-col gap-4">
          <article
            v-for="post in blogPosts"
            :key="post.stem"
            class="bg-default rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <NuxtLink :to="post.path" class="flex flex-col md:flex-row">
              <div class="p-6 flex flex-col justify-center">
                <span
                  v-if="post.category"
                  class="inline-block px-3 py-1 text-xs font-medium text-success bg-success/10 rounded-full mb-3 w-fit"
                >
                  {{ post.category }}
                </span>
                <h3 class="text-xl font-semibold text-highlighted mb-2">
                  {{ post.title }}
                </h3>
                <p class="text-toned text-sm mb-3 line-clamp-2">
                  {{ post.description }}
                </p>
                <time v-if="post.date" class="text-dimmed text-sm">
                  {{ new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }}
                </time>
              </div>
            </NuxtLink>
          </article>
        </div>

        <div v-else class="text-center py-12">
          <p class="text-toned text-lg">
            Blog posts coming soon!
          </p>
        </div>
      </div>
    </section>

  </div>
</template>
