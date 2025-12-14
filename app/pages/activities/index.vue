<script setup lang="ts">
useSeoMeta({
  title: 'Activities - Moinhos Do Dao',
  description: 'Explore our farm activities: nature walks, workshops, and hands-on farming experiences.'
})

const { data: activities } = await useAsyncData('activities', () =>
  queryCollection('activities').order('date', 'DESC').all()
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
    <section class="py-16 px-4 bg-stone-50">
      <div class="container mx-auto">
        <div v-if="activities?.length" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <HighlightCard
            v-for="activity in activities"
            :key="activity.stem"
            :title="activity.title"
            :description="activity.description"
            :to="activity.path"
            :image="activity.image || 'https://placehold.co/600x400/166534/white?text=' + encodeURIComponent(activity.title)"
          />
        </div>

        <div v-else class="text-center py-12">
          <p class="text-stone-600 text-lg">
            Activities coming soon! Check back later for our upcoming events and experiences.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
