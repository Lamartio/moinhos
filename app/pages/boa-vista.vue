<script setup lang="ts">
useSeoMeta({
  title: 'Boa Vista Cottage - Moinhos Do Dao',
  description: 'Stay at Boa Vista, our charming cottage with stunning views. Book your peaceful getaway at Moinhos Do Dao eco-farm.'
})

const cottageImages = [
  { src: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&h=600&fit=crop', alt: 'Boa Vista Cottage - Exterior view' },
  { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', alt: 'Cozy living room with fireplace' },
  { src: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=600&fit=crop', alt: 'Comfortable bedroom with traditional decor' },
  { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', alt: 'Fully equipped rustic kitchen' },
  { src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=600&fit=crop', alt: 'Terrace with panoramic views' },
  { src: 'https://images.unsplash.com/photo-1558293842-c0fd3db86157?w=600&h=600&fit=crop', alt: 'Private garden area' },
]

const amenities = [
  'Fully equipped kitchen',
  'Fireplace',
  'Private garden',
  'Terrace with views',
  'Free WiFi',
  'Parking',
  'Bed linens & towels',
  'BBQ area',
]
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection
      title="Boa Vista Cottage"
      subtitle="Your peaceful retreat in the heart of nature"
      background-image="https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1600&h=900&fit=crop"
    >
      <UButton href="#booking" size="lg" color="neutral" variant="solid">
        Book Your Stay
      </UButton>
    </HeroSection>

    <!-- Gallery Section -->
    <section class="py-16 px-4 bg-muted">
      <div class="container mx-auto max-w-5xl">
        <h2 class="text-3xl font-bold text-highlighted mb-8 text-center">
          Explore the Cottage
        </h2>
        <ImageGallery :images="cottageImages" />
      </div>
    </section>

    <!-- Description Section -->
    <section class="py-16 px-4">
      <div class="container mx-auto max-w-4xl">
        <div class="grid md:grid-cols-2 gap-12">
          <div>
            <h2 class="text-2xl font-bold text-highlighted mb-6">
              About Boa Vista
            </h2>
            <div class="prose prose-stone">
              <p>
                Nestled on our eco-farm with panoramic views of the Dao valley, Boa Vista
                ("Good View") lives up to its name. This traditional stone cottage has been
                lovingly restored to offer modern comfort while preserving its rustic charm.
              </p>
              <p>
                Wake up to birdsong, enjoy breakfast on the terrace overlooking the
                vineyards, and spend your days exploring the farm or relaxing in your
                private garden. Evenings are perfect for stargazing or cozying up by
                the fireplace.
              </p>
              <p>
                The cottage accommodates up to 4 guests and includes access to all farm
                amenities. Perfect for couples, families, or friends seeking a peaceful
                rural escape.
              </p>
            </div>
          </div>

          <div>
            <h2 class="text-2xl font-bold text-highlighted mb-6">
              Amenities
            </h2>
            <ul class="grid grid-cols-2 gap-3">
              <li
                v-for="amenity in amenities"
                :key="amenity"
                class="flex items-center gap-2 text-toned"
              >
                <span class="text-green-600">&#10003;</span>
                {{ amenity }}
              </li>
            </ul>

            <div class="mt-8 p-6 bg-primary/10 rounded-xl">
              <h3 class="font-semibold text-highlighted mb-2">Good to Know</h3>
              <ul class="space-y-2 text-toned text-sm">
                <li><strong>Check-in:</strong> 3:00 PM</li>
                <li><strong>Check-out:</strong> 11:00 AM</li>
                <li><strong>Minimum stay:</strong> 2 nights</li>
                <li><strong>Pets:</strong> Welcome (please inquire)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Booking Section -->
    <section id="booking" class="py-16 px-4 bg-elevated">
      <div class="container mx-auto max-w-2xl">
        <h2 class="text-3xl font-bold text-highlighted mb-8 text-center">
          Book Your Stay
        </h2>
        <div class="bg-default rounded-xl p-8 shadow-lg">
          <BookingForm property-name="Boa Vista Cottage" />
        </div>
      </div>
    </section>
  </div>
</template>
