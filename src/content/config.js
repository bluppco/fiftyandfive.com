import { z, defineCollection } from "astro:content"

const footerCollection = defineCollection({

	schema: z.object({

		image_source: z.string(),
		link: z.string(),
		live: z.boolean(),
		order: z.number(),
		title: z.string()

	})

})

export const collections = {

	"footer": footerCollection

}
