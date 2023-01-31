import { defineCollection, z } from "astro:content";
const articlesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    createdMS: z.number(),
    modifiedMS: z.number().optional(),
  }),
});
export const collections = {
  articles: articlesCollection,
};
