// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `type` and `schema` for each collection
const docsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      uid: z.string(),
      title: z.string(),
      description: z.string(),
      author: z.string(),
      topic: z.string().optional(),
      language: z.string().optional(),
      date: z.date().optional(),
    })
});
// Export a single `collections` object to register your collection(s)
export const collections = {
  docs: docsCollection,
};