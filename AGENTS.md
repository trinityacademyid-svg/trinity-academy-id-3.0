<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Future upgrade notes

### Sitemap & robots upgrade path
If the project grows (new pages, database-driven content, or traffic increases):
- Replace `public/sitemap.xml` with `app/sitemap.js` for dynamic sitemap generation
- Replace `public/robots.txt` with `app/robots.js` for dynamic robots config
- This gives auto `lastmod`, easier maintenance when adding pages, and no manual XML edits

See `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.md` and `robots.md` for API reference.
