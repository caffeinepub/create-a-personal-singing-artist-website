# Specification

## Summary
**Goal:** Display the newly uploaded photo in the About section on the home page.

**Planned changes:**
- Add `IMG_20251223_133615~2-6.jpg` to `frontend/public/assets/uploads/`.
- Update `frontend/src/components/sections/AboutSection.tsx` to reference `/assets/uploads/IMG_20251223_133615~2-6.jpg` for the About section image and ensure it has a non-empty English alt attribute.

**User-visible outcome:** The About section on the home page shows the new uploaded photo correctly on both desktop and mobile without broken-image icons.
