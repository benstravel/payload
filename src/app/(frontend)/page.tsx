import PageTemplate, { generateMetadata } from './[slug]/page'

// The build environment has no network access to Postgres, so this must
// render on-demand per request instead of being prerendered at build time.
export const dynamic = 'force-dynamic'

export default PageTemplate

export { generateMetadata }
