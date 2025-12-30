<script setup lang="ts">
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <!-- Hidden Netlify Form Declarations (for SSR form detection) -->
  <form name="contact3" method="POST" data-netlify="true" hidden>
    <input type="text" name="name">
    <input type="email" name="email">
    <input type="tel" name="phone">
    <input type="text" name="subject">
    <textarea name="message" />
  </form>

  <form name="booking3" method="POST" data-netlify="true" hidden>
    <input type="text" name="name">
    <input type="email" name="email">
    <input type="tel" name="phone">
    <input type="text" name="propertyName">
    <input type="number" name="guests">
    <input type="date" name="checkIn">
    <input type="date" name="checkOut">
    <textarea name="message" />
  </form>
</template>
