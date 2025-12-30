<script setup lang="ts">
import { EMAIL_PLACEHOLDER, FARM_ADDRESS } from '~/constants'

useSeoMeta({
  title: 'Contact - Moinhos Do Dao',
  description: 'Get in touch with Moinhos Do Dao - Eco Quinta. Find our location, send us a message, or plan your visit.'
})
</script>

<template>
  <div>
    <!-- Hero -->
    <HeroSection
      title="Contact Us"
      subtitle="We'd love to hear from you"
      background-image="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&h=900&fit=crop"
    />

    <!-- Contact Section -->
    <section class="py-16 px-4 bg-muted">
      <div class="container mx-auto max-w-6xl">
        <div class="grid lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div>
            <h2 class="text-2xl font-bold text-highlighted mb-6">
              Send Us a Message
            </h2>
            <div class="bg-default rounded-xl p-8 shadow-md">
              <ContactForm :email="EMAIL_PLACEHOLDER" />
            </div>
          </div>

          <!-- Location & Info -->
          <div>
            <h2 class="text-2xl font-bold text-highlighted mb-6">
              Find Us
            </h2>
            <LocationMap :address="FARM_ADDRESS" />

            <div class="mt-8 bg-default rounded-xl p-6 shadow-md">
              <h3 class="font-semibold text-highlighted mb-4">Contact Information</h3>
              <ul class="space-y-3 text-toned">
                <li class="flex items-start gap-3">
                  <span class="font-medium">Email:</span>
                  <a :href="`mailto:${EMAIL_PLACEHOLDER}`" class="text-green-700 hover:text-green-800">
                    {{ EMAIL_PLACEHOLDER }}
                  </a>
                </li>
                <li class="flex items-start gap-3">
                  <span class="font-medium">Best time to visit:</span>
                  <span>April - October</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="font-medium">Languages:</span>
                  <span>English, German, Dutch, Portuguese</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
