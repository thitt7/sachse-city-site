import { CollectionConfig } from "payload/types";
import slug from '../Fields/slug'
import meta from '../Fields/meta'

const News: CollectionConfig = {
    slug: 'news',
    admin: {
        useAsTitle: 'Title',
      },
    fields: [
        {
            name: 'Title',
            type: 'text', 
            label: 'Article Title'
        },
        {
            name: 'Author',
            type: 'text',
            label: 'Author',

        },
        {
            name: 'Body',
            type: 'richText',
            label: 'Article Body',
            required: true,

        },
        slug,
        meta
    ]
}

export default News;