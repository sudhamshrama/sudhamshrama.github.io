# sudhamshrama.github.io

Personal portfolio for **Sudhamsh Rama** — DevOps Engineer.

**Live:** https://sudhamshrama.github.io/

## About

A single-page portfolio covering professional experience, technical skills, selected
projects, certifications, and education. Focus areas are Azure and AWS platform
engineering, Kubernetes operations, infrastructure as code, GitOps delivery, and site
reliability.

## Stack

Plain HTML, CSS, and JavaScript — no framework, no build step. Deployed on GitHub Pages
directly from `main`.

```
index.html      markup
style.css       styles
script.js       mobile nav, scroll reveal, scrollspy, hero typing effect
assets/         favicon, social preview image, certification badge
resume/         résumé (PDF)
```

## Notes

- Respects `prefers-reduced-motion` — all animation and the typing effect are disabled.
- Responsive down to 375px with a collapsible mobile navigation.
- Open Graph and Twitter card metadata for link previews.

## Projects featured

- [url-shortener](https://github.com/sudhamshrama/url-shortener) — CI/CD, supply-chain
  security gating, and observability
- [url-shortener-config](https://github.com/sudhamshrama/url-shortener-config) — GitOps
  configuration with Argo CD and Kustomize
- [job-radar](https://github.com/sudhamshrama/job-radar) — event-driven AWS pipeline in
  Terraform, with a [live dashboard](https://d18zgxdvd2esd3.cloudfront.net)
