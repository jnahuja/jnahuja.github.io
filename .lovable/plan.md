

# Personal Website for Jashan Ahuja — Implementation Plan

## Overview
A single-page scrolling portfolio site with 6 sections, sticky nav, scroll animations, and a polished dark editorial aesthetic.

## Design System
- **Background**: `#0A0F1E` (deep navy), **Text**: `#F5F0E8` (warm off-white), **Accent**: `#C9A84C` (warm gold)
- **Fonts**: Playfair Display (serif headings) + DM Sans (body) via Google Fonts
- **Spacing**: Generous padding (py-24+), max-width container (~1100px)

## Technical Approach
- Single-page with anchor sections, smooth scroll via CSS `scroll-behavior: smooth`
- **Scroll animations**: Custom hook using Intersection Observer — sections fade/slide in on entry
- **Sticky nav**: Fixed top bar, background opacity increases on scroll via scroll event listener
- **Case studies**: Accordion or expandable cards using existing Radix accordion component
- **Responsive**: Mobile hamburger menu using Sheet component, stacked layouts on small screens

## File Structure

| File | Purpose |
|------|---------|
| `src/index.css` | Update CSS variables for dark theme, import Google Fonts |
| `tailwind.config.ts` | Add custom colors, font families, fade-in keyframes |
| `src/hooks/useScrollAnimation.ts` | Intersection Observer hook for reveal animations |
| `src/components/Navbar.tsx` | Sticky nav with scroll opacity, mobile menu |
| `src/components/HeroSection.tsx` | Headline, intro, CTA, 3 stat cards |
| `src/components/AboutSection.tsx` | Bio paragraphs, 3 value cards, "outside work" line |
| `src/components/WorkSection.tsx` | 3 role cards/accordions with bullets |
| `src/components/CaseStudiesSection.tsx` | 3 expandable case study cards |
| `src/components/WritingSection.tsx` | Placeholder card |
| `src/components/ContactSection.tsx` | Headline, body, 2 CTA buttons |
| `src/components/Footer.tsx` | Simple copyright footer |
| `src/pages/Index.tsx` | Compose all sections |

## Section Details

**Navbar**: Name mark left, nav links right. On scroll, `bg-opacity` transitions from 0 to ~90%. Mobile: hamburger icon opens Sheet sidebar with nav links.

**Hero**: Large Playfair Display headline, gold accent on key phrase, stats row with gold numbers, "Let's connect" button with gold styling.

**About**: Long-form text with comfortable line-height, 3 value cards in a grid with gold left-border accent, "Outside work" as a subtle italic line.

**Work**: 3 accordion items — click to expand role details and bullet points. Tags shown as small badges.

**Case Studies**: Cards with title/subtitle visible, expand to reveal full narrative. Gold tagline highlighting what each case shows.

**Writing**: Single placeholder card with muted styling and "stay tuned" message.

**Contact**: Centered text, two side-by-side buttons (LinkedIn outline, Email filled gold).

**Footer**: Centered, muted text, thin top border.

## All content will be used exactly as provided — no paraphrasing.

