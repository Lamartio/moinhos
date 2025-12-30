<script setup lang="ts">
</script>
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>

  <!-- Hidden Netlify Form Declarations (for SSR form detection) -->
  <form name="contact2" method="POST" netlify hidden>
    <input type="text" name="name">
    <input type="email" name="email">
    <input type="tel" name="phone">
    <input type="text" name="countryCode">
    <input type="tel" name="phoneFull">
    <input type="text" name="subject">
    <textarea name="message" />
  </form>

  <form name="booking2" method="POST" netlify hidden>
    <input type="text" name="name">
    <input type="email" name="email">
    <input type="tel" name="phone">
    <input type="text" name="countryCode">
    <input type="tel" name="phoneFull">
    <input type="text" name="subject">
    <input type="text" name="propertyName">
    <input type="date" name="checkIn">
    <input type="date" name="checkOut">
    <input type="number" name="guests">
    <textarea name="message" />
  </form>
</template>
