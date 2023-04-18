import {createClient} from '@sanity/client'

export const client = createClient({
    projectId: 'by03ls1l',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})