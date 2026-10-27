# JJ & Jerico — bespoke wedding website

A working Next.js homepage with original hand-coded botanical SVG illustrations, mobile layout, and Sanity CMS schema/editor integration. **No photographs.**

## Run locally
1. Install Node.js 20 or later.
2. Open a terminal in this folder.
3. Run `npm install` then `npm run dev`.
4. Visit http://localhost:3000 to preview. Without Sanity credentials, the site uses editable starter text in `lib/content.ts`.

## Activate your private editing dashboard
1. Create a free account/project at https://www.sanity.io/manage . Choose dataset `production`.
2. Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SANITY_PROJECT_ID` to the project ID. Keep the dataset as `production`.
3. In Sanity project management, configure CORS origins for `http://localhost:3000` and your eventual deployed domain, allowing credentials for Studio login.
4. Restart `npm run dev`, visit http://localhost:3000/studio and log in with your Sanity account.
5. Create a **Wedding website content** document, fill in the fields and **Publish**. Within about 60 seconds the public site will reflect published content.
6. You can invite Jerico as an editor in Sanity project settings. Keep editing access limited to people you trust.

## Publish
1. Create a GitHub repository and upload this project (do not upload `.env.local`).
2. Import it in https://vercel.com/new .
3. Add `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET=production` in Vercel project environment variables.
4. Deploy, add the Vercel domain as a Sanity CORS origin, and later attach your own domain in Vercel.

## Important before sending invitations
- Ceremony venue/time are intentionally marked **to be confirmed**; replace these once final.
- RSVP is currently an informational placeholder, **not** a working guest form. Do not collect guest information by email links or public unprotected documents. Build a proper invitation/guest database and privacy controls before launching RSVPs.
- The artwork is hand-coded vector line art, not a cropped screenshot. It can be replaced with commissioned or AI-generated transparent botanical assets later.
- The studio lets you edit *content*, not drag page elements around. Layout changes require code edits.
