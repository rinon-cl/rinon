# Google Analytics 4

Measurement ID authorized by the owner: `G-CLSKZ2P8CJ`.

The root layout supplies this ID to the existing `ProductionTracking` component only when `VERCEL_ENV=production`. `NEXT_PUBLIC_GA_ID` can override the public ID. Preview and development environments do not load the tag.

The existing cookie preferences control loading: neither `gtag.js` nor its configuration runs before the visitor accepts measurement. Selecting only necessary storage prevents loading. Revoking an earlier acceptance clears optional storage and reloads without analytics. The initial page and each client-side Next.js navigation are recorded with the current `page_path`.

This installation does not enable internal analytics writes, GTM or Clarity. Those remain behind the separate `RINON_PRODUCTION_TRACKING_ENABLED` gate. Do not add the same GA4 measurement ID through GTM as well, because that can duplicate measurement.

## Verification

The browser suite intercepts Google/provider requests and internal analytics writes. It checks the script URL, queued `gtag('config', ...)`, consent, revocation and single initialization across client navigation. These are integration checks, not proof of data received by the Google Analytics property.

Build the production configuration with other release flags unchanged:

```sh
VERCEL_ENV=production npm run build
RINON_GA_TEST_ID=G-CLSKZ2P8CJ npx playwright test tests/google-analytics.spec.mjs
```

Check preview isolation with a preview build:

```sh
VERCEL_ENV=preview npm run build
npx playwright test tests/google-analytics.spec.mjs
```

After an authorized deployment, verify the actual domain in a fresh browser: no Google script before acceptance, one script after acceptance, the expected measurement ID, and no loading after revocation. Confirm real reception separately in Tag Assistant or GA4 Realtime. Local verification does not deploy the change.
