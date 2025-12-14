import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    activities: defineCollection({
      type: 'page',
      source: 'activities/**',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.string().optional(),
        date: z.string().optional(),
      }),
    }),
  },
})
