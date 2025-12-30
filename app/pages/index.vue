<script setup lang="ts">
useSeoMeta({
  title: 'Moinhos Do Dao - Eco Quinta',
  description: 'Experience nature at our eco-farm in the Dao region of Portugal. Activities, cottage rental, and authentic rural experiences.'
})
</script>

<template>
  <div>
    <!-- Hero Section -->
    <HeroSection
        title="Moinhos Do Dao"
        subtitle="Eco Quinta - Experience authentic Portuguese farm life"
        background-image="/uploads/DroneOverviewTerrain.jpg"
    >
      <div class="flex flex-wrap gap-4 justify-center">
        <UButton to="/activities" size="lg" variant="solid">
          Explore Activities
        </UButton>
        <UButton to="/boa-vista" size="lg" variant="solid">
          Book Boa Vista Cottage
        </UButton>
      </div>
    </HeroSection>

    <!-- Highlights Section -->
    <section class="py-16 px-4 bg-elevated">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold text-center text-highlighted mb-12">
          Discover Our Farm
        </h2>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <HighlightCard
              title="Farm Activities"
              description="Join our workshops, nature walks, and hands-on farming experiences. Connect with nature and learn traditional practices."
              to="/activities"
              image="/uploads/Horta-August-2014_2.jpg"
          />

          <HighlightCard
              title="Boa Vista Cottage"
              description="Stay in our charming cottage with stunning views. Perfect for a peaceful getaway surrounded by nature."
              to="/boa-vista"
              image="/uploads/IMG_2259.jpg"
          />

          <HighlightCard
              title="Visit Us"
              description="Located in the beautiful Dao region of Portugal. Come experience the tranquility of rural life."
              to="/contact"
              image="/uploads/RuaPrincipal.jpg"
          />
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-4xl text-center">
        <h2 class="text-3xl font-bold text-highlighted mb-6">
          Welcome to Our Eco Farm
        </h2>
        <p class="text-lg text-toned mb-8">
          Moinhos Do Dao is a family-run eco-farm nestled in the heart of Portugal's Dao wine region.
          We offer authentic rural experiences, from hands-on farming activities to peaceful stays
          in our traditional cottage. Whether you're looking for adventure or relaxation, our farm
          provides the perfect escape from the everyday.
        </p>
        <UButton to="/contact" size="lg">
          Get in Touch
        </UButton>
      </div>
    </section>
  </div>
</template>
