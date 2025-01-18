import { type SchemaTypeDefinition } from 'sanity'
import foods from './foods'
import chefs from './chefs'
import blog from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [foods , chefs, blog],
}
