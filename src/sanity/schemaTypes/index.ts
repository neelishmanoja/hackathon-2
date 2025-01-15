import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blog'
import { shopProducts } from './shopproducts'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog , shopProducts],
}
