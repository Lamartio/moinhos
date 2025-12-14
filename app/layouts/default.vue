<script setup lang="ts">
import { EMAIL_PLACEHOLDER } from '~/constants'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-stone-50">
    <!-- Header -->
    <header class="bg-green-900 text-white shadow-lg">
      <div class="container mx-auto px-4">
        <nav class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="text-xl font-bold hover:text-green-200 transition-colors">
            Moinhos Do Dao
          </NuxtLink>
          <ul class="flex items-center gap-6">
            <li>
              <NuxtLink to="/" class="hover:text-green-200 transition-colors">
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/activities" class="hover:text-green-200 transition-colors">
                Activities
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/boa-vista" class="hover:text-green-200 transition-colors">
                Boa Vista
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="hover:text-green-200 transition-colors">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Main Content -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="bg-stone-800 text-stone-300 py-8">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div>
            <h3 class="text-white font-semibold mb-3">Moinhos Do Dao - Eco Quinta</h3>
            <p class="text-sm">Experience nature at our eco-farm in the heart of Portugal.</p>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-3">Quick Links</h3>
            <ul class="space-y-2 text-sm">
              <li><NuxtLink to="/activities" class="hover:text-white transition-colors">Activities</NuxtLink></li>
              <li><NuxtLink to="/boa-vista" class="hover:text-white transition-colors">Boa Vista Cottage</NuxtLink></li>
              <li><NuxtLink to="/contact" class="hover:text-white transition-colors">Contact Us</NuxtLink></li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-3">Contact</h3>
            <p class="text-sm">
              Email: <a :href="`mailto:${EMAIL_PLACEHOLDER}`" class="hover:text-white transition-colors">{{ EMAIL_PLACEHOLDER }}</a>
            </p>
          </div>
        </div>
        <div class="border-t border-stone-700 mt-8 pt-4 text-center text-sm">
          <p>&copy; {{ new Date().getFullYear() }} Moinhos Do Dao - Eco Quinta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>
