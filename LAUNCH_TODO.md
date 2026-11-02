# Personal Website — Launch Checklist

_Last updated: 2026-11-02_

---

## ✅ Already Done (Builds & Content)

| Item | Status |
|------|--------|
| Zola builds successfully | ✅ |
| All pages render (Home, About, Contact, Projects, Blog) | ✅ |
| Project pages complete (6 projects) | ✅ |
| About page comprehensive | ✅ |
| Contact page functional | ✅ |
| Projects listing + individual pages | ✅ |
| SEO meta tags (Open Graph, Twitter) | ✅ |
| Sitemap.xml + robots.txt + atom.xml | ✅ |
| Search index (elasticlunr) | ✅ |
| RSS/Atom feed | ✅ |
| Netlify/Cloudflare Pages deploy config | ✅ |

---

## 🔴 Must Fix Before Launch (Blocking)

### 1. Missing Favicon & App Icons
- [x] **favicon.ico** — 16x16, 32x32, 48x48 (referenced in base.html)
- [x] **apple-touch-icon.png** — 180x180 (referenced in base.html)
- [x] **site.webmanifest** — Icons array points to valid files
- [x] **OG image** — Created 1200x630 PNG og-image.png for social sharing

### 2. Missing SASS Source (Build Risk)
- [x] **sass/main.scss** — Created comprehensive source SASS with variables, mixins, components, utilities
- [x] Source SASS added to enable rebuilds on CI/CD

### 3. Social Preview / OG Image
- [x] Created proper 1200x630 PNG og-image.png for social sharing
- [ ] Test with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and [Twitter Card Validator](https://cards-dev.twitter.com/validator)

### 4. Formspree Endpoint (Contact Page)
- [ ] Create real Formspree form → update contact.html action URL
- [ ] Test form submission end-to-end

### 404 Page Content
- [x] Customized 404.html with helpful links + search link

---

## 🟡 Should Fix Before Launch (Quality)

### Content Gaps
- [ ] **Projects page** — Tag list overwhelming; show 1-2 primary tags + "View All" link
- [ ] **Contact page** — Formspree form needs real endpoint, honeypot, AJAX submit, success toast
- [ ] **Blog** — Only "coming-soon.md" exists; add 2-3 real posts before launch

### Mobile/Responsive Fixes
- [ ] **About page** — Tables horizontal scroll on mobile; card layout for <768px
- [ ] **Hero stats** — grid-4 stacks to 2x2; check spacing
- [ ] **Skills grids** — grid-3 → single column, grid-4 → 2-col on mobile

### Analytics (Privacy-Friendly)
- [ ] Add Plausible or Umami (self-hosted on nixconfig)
- [ ] Add to base.html with `data-domain`

---

## 🟢 Nice to Have (Post-Launch)

### Content
- [ ] Add 2-3 blog posts (security, Kubernetes, DevSecOps topics)
- [ ] Verify all project descriptions current
- [ ] Update "13 products" → "20+ products", "50+ pipelines" → "500+ pipelines"

### Technical
- [ ] **Search** — Add pagefind or keep elasticlunr
- [ ] **RSS/Atom** — Verify feeds work in readers
- [ ] **Analytics** — Plausible/Umami
- [ ] **Build-time validation** — Check icon files exist for skills
- [ ] **Centralize tech data** — skills.yaml for single source of truth
- [ ] **Extract partials** — project-card.html, skill-card.html

### SEO
- [ ] JSON-LD structured data on project pages
- [ ] Add `datePublished` to blog post JSON-LD
- [ ] Verify sitemap.xml includes all pages

---

## Quick Commands

```bash
# Local dev
cd ~/Documents/git/personal-website
zola serve

# Build for production
zola build

# Check for broken links
zola check

# Validate HTML
npx html-validator-cli --file public/index.html

# Test OG image
# Upload og-image.png to https://developers.facebook.com/tools/debug/
```

---

## Deploy Checklist

- [ ] Push to main → Cloudflare Pages auto-deploys
- [ ] Verify custom domain DNS (Cloudflare)
- [ ] Test all pages on production URL
- [ ] Test contact form submission
- [ ] Verify OG image on Twitter/LinkedIn/Facebook
- [ ] Submit sitemap to Google Search Console

---

## Related Files

- `TODOS.md` (Obsidian) — Detailed content TODOs
- `LAUNCH_TODO.md` (this file) — Launch-specific blocking items
- `STATUS.md` (Obsidian) — Overall project status