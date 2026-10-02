# P150 Compost Check

The phone page for scoring the P150 bench composters: squeeze test (moisture), smell, and feeds. Open it at **https://virgohomeio.github.io/p150-compost-check/**: the quick score page (score and feed only) is at `/simple/`, the full compost check (photos, water, unload, service, machine status) at `/score/`, and Insights (charts, policy, progress, data health, weekly summary; read-only) at `/insights/`.

Entries go straight to the study's Supabase project. The key in the page is Supabase's publishable key, which the project limits to adding and reading rows in the study tables; it cannot change or delete anything.

This repository only publishes the page. Its source lives in the private study repository (`docs/` in `virgohomeio/RND_AI_DynamicAlgo`), which has a test that keeps it in step with the data schema. Change it there and copy it here.
