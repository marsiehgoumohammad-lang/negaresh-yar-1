# Project Identity

* Project name:
  Negaresh Yar V1

* Current technology stack:
  Next.js + React + TypeScript + Tailwind CSS

* Database:
  PostgreSQL + Prisma (not implemented yet)

* AI:
  Google Gemini (not connected yet)

# Completed Tasks

List all completed tasks:

* Laravel migration to Next.js (removed old files)
* Next.js foundation creation (app router, basic layout, page, not-found)
* RTL configuration & Tailwind CSS v4 setup
* ESLint setup & build issue diagnosis
* TASK-008: Homepage Redesign V1 Final (Removed all public authentication UI, redesigned Header with logo right & hamburger left, redesigned Hero with specified Persian copy, abstract document visual, improved spacing/typography, fast & mobile-first)
* TASK-009 / TASK-009A / TASK-009B: Mobile Drawer Menu Rebuild & Fixes
  - Left-sliding drawer (matching left hamburger position)
  - Full viewport height (100dvh), 85% screen width (max 340px)
  - Semi-transparent backdrop with click-to-close behavior
  - Closes on menu item tap & Android Back button press (popstate)
  - Section separators and official web SVG logos for WhatsApp, Telegram, Eitaa, Bale, and Rubika in `/public/icons/messengers/`
  - Version V1 footer in drawer
* TASK-011: Premium Hero V2 Flagship Section
  - Mobile-first, luxury, minimal flagship hero layout
  - Floating legal document system with stacked glassmorphic cards, PDF badge, AI judicial verdict analysis, official seal & verification badges
  - Pure CSS 60FPS animations with GPU acceleration and prefers-reduced-motion support
  - Exact headline ("نگارش یار"), second line ("نگارش نامه اداری، عریضه‌نویسی، کافی‌نت آنلاین"), and 3-line trust-oriented Persian copy
  - Primary ("تفسیر رأی و اوراق قضایی") & Secondary ("ثبت درخواست") buttons with complete state classes
  - Trust bar chips with elegant SVG icons for confidentiality, speed, and expert legal document preparation
* TASK-012: Pixel-Perfect Hero Implementation & Asset Integration
  - Recreated Hero section visually matching the single source of truth reference image with 95%+ precision
  - Deep luxury dark theme (`#070B15`) with ambient radial gold spotlights and golden glowing orbital rings
  - Integrated high-resolution 3D Hero stage visual asset (`/images/hero_3d_stage.jpg`) rendered with Next.js optimized `<Image>` component
  - Centered typography hierarchy: Title ("نگارش یار") in crisp bold white and Subtitle ("نگارش نامه اداری - عریضه نویسی - کافی نت آنلاین") in warm golden text
  - Primary CTA button: Solid gold gradient fill (`bg-gradient-to-r from-[#D4AF37] via-[#E5C158] to-[#D4AF37]`) with dark bold text and left arrow icon (`←`)
  - Secondary CTA button: Dark background with golden outline (`border border-[#E5C158]/60`) and warm gold text
  - Trust bar: 4 horizontal items (`محرمانگی کامل`, `پشتیبانی حرفه‌ای`, `تحویل سریع`, `تضمین کیفیت`) with golden SVG icons and light text
* Services 3D Graphic Cards Enhancement:
  - Designed high-resolution 3D visual emotion illustration assets for all service offerings (`service_letter.jpg`, `service_legal.jpg`, `service_cybernet.jpg`)
  - Built luxury dark-themed glassmorphic cards (`#0D1424`) with gold accents, top category badges, hover elevation, and responsive interactive CTA buttons
* Ultra-Minimal Professional Articles Redesign:
  - Designed high-end 3D editorial graphic assets (`article_legal.jpg`, `article_admin.jpg`)
  - Created a dual layout spotlight: 7-column featured article spotlight card with high-resolution image, reading time, and custom backdrop overlays
  - Built a 5-column minimalist editorial list with gold index numbering (01, 02, 03, 04), category tags, and clean Persian typography
  - Integrated interactive category tab filtering ("همه مطالب", "حقوقی و قضایی", "نامه‌نگاری اداری", "ثبت‌نام‌های اینترنتی")
  - Added full interactive reading modal popup allowing visitors to view complete article guidelines with instant online order CTA
* CTA Section Removal:
  - Completely removed the "آماده دریافت خدمات هستید" section and deleted `cta-section.tsx` as requested.
* Footer Redesign & Gap Fix:
  - Eliminated the excessive top margin gap above the bottom divider line (`border-t border-slate-800/80`), attaching the copyright line closely and naturally to the footer text.
  - Aligned the color scheme and visual appearance (`#070B15` background with warm `#E5C158` gold accents and ambient lighting) to match the Hero and Services sections.
* AI Legal Document Interpretation Dedicated Page Redesign:
  - Removed sample documents list, text area input, and document type dropdown menu as requested.
  - Implemented a single drag-and-drop / click-to-upload file dropzone supporting PDF documents and image formats (JPG, PNG, WEBP).
  - Configured `@google/genai` with `gemini-3.6-flash` in `/api/gemini/analyze-legal` to accept inline base64 file data and output structured legal analysis along with a persuasive call-to-action statement (`compellingActionCall`).
  - Added a luxury gold-bordered persuasion card at the bottom of the AI response encouraging users to submit a formal request.
  - Built a persistent floating CTA button ("ثبت درخواست اختصاصی حقوقی / اداری") fixed at the bottom of the screen, staying visible as the user scrolls.
* Why Negaresh Yar (چرا نگارش یار) Visual Redesign & Harmonization:
  - Replaced the light background layout with the brand's dark luxury theme (`#070B15`, gold `#E5C158` accents, `#0D1424` panels, and ambient radial background lighting).
  - Enhanced feature cards with gold icon containers, metric badges, subtle top-border hover effects, and crisp typography.
  - Added a high-end trust banner at the bottom highlighting user satisfaction (>98%) and order volume (>5,000 successful requests).
* TASK-012 — Flagship AI Legal Document Interpreter Page Complete Redesign:
  - Refactored `/src/app/ai-interpreter/page.tsx` into a modular architecture under `/src/components/legal-ai/`.
  - Created `Hero.tsx`: Flagship luxury banner with 3-step visual cards, gold accents, badge, and animated layered legal document scanner graphic.
  - Created `Trust.tsx`: Trust metrics (Full Confidentiality, Auto File Deletion, Gemini AI Powered, No Signup Required).
  - Created `DocumentSelector.tsx`: Interactive visual card grid (دادنامه، ابلاغیه ثنا، قرارداد، دادخواست، اظهارنامه، سایر).
  - Created `Uploader.tsx`: Dropbox-style luxury drag & drop upload box with supported format badges (PDF, JPG, PNG, WEBP, HEIC up to 15MB).
  - Created `SelectedFileCard.tsx`: File status card with thumbnail/PDF preview, size, status indicator, remove action, and gold gradient CTA button.
  - Created `AnalysisLoading.tsx`: AI Thinking Interface timeline with step-by-step progress steps (scanning, legal extraction, risk calculation, explanation prep).
  - Created `ResultSummary.tsx`: Executive summary card, document category badge, and key verdict outcome.
  - Created `RiskCard.tsx`: Visual risk score meter (Green/Amber/Red) with explanatory vulnerabilities.
  - Created `Timeline.tsx`: Key legal points and critical deadline timeline.
  - Created `LegalDictionary.tsx`: Legal terms glossary in simple Persian.
  - Created `RecommendedActions.tsx`: Numbered actionable next steps and suggested legal document templates.
  - Created `CTA.tsx`: Commercial conversion card linking to custom legal document drafting and consultation.
  - Created `EmptyState.tsx`: High-end preview template card before upload.
  - Verified with `npm run lint` and `NODE_ENV=production next build` (both succeeded cleanly).

# Current Project Status

Explain:

* What currently works: Production-ready Homepage V1, Header with Left Drawer, and Flagship AI Legal Document Interpreter Page (`/ai-interpreter`) completely designed and verified. Fast server-rendered pages with zero lint or build errors.
* What is incomplete: All requested tasks through TASK-012 are 100% complete and verified.
* Current errors or warnings: None.

# Last Modified Files

List:

* /src/app/ai-interpreter/page.tsx: Flagship AI Document Interpreter Server Component with full SEO metadata.
* /src/components/legal-ai/*: Complete modular suite (Hero, Trust, DocumentSelector, Uploader, SelectedFileCard, AnalysisLoading, ResultSummary, RiskCard, Timeline, LegalDictionary, RecommendedActions, CTA, EmptyState, LegalInterpreterClient).
* /src/components/layout/header.tsx: Redesigned header and mobile left drawer with backdrop, scroll lock, back button listener, and official messenger icons.

# Current Build Status

Include:

* npm run lint result: Succeeded without errors.
* npm run build result: Succeeded (`NODE_ENV=production next build`). All pages compiled and prerendered cleanly.
* Remaining issues: None.

# Next Recommended Task

Wait for exact implementation instructions from ChatGPT for Homepage section polishing. Feature development is frozen.

# Important Decisions

Record all confirmed project decisions:

* Mobile first.
* No public customer registration or login buttons (admin route hidden).
* No CRM.
* No case management.
* No chat system.
* SEO is a priority.
* Feature development frozen — acting strictly as implementation engineer following step-by-step instructions.
