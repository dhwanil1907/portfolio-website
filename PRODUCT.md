# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: recruiters hiring for data science, analytics, and ML internship or new-grad roles. They skim fast and want a resume download, an email, or a LinkedIn contact.
Secondary: hiring managers and technical peers who open project write-ups and repos to judge depth.

## Product Purpose

Personal portfolio for Dhwanil Ranpura, a Data Science student at San Jose State University (BS, expected Dec 2027). It presents projects, experience, leadership, awards, and certifications so a visitor can quickly judge fit and get in touch. Success is a recruiter reaching the resume or contact links, and a technical reviewer finding enough substance in the project pages to trust the work.

## Positioning

Finance and ML work shipped end to end: credit risk scoring, forecasting, and data warehouse pipelines, with models served through APIs and backed by explainability and guardrails. Current tagline: "I find what the numbers are hiding."

## Operating Context

Single-page site with section anchors (About, Skills, Projects, Experience, Contact) plus routed pages for Projects, ProjectDetail, Experience, Leadership, Awards, Certifications, About, and Contact. Visitors arrive from resumes, LinkedIn, and applications.

## Capabilities and Constraints

- Stack: React 19, Vite 6, Tailwind CSS v4, React Router, Framer Motion, Lucide icons. Deployed on Vercel with `vercel.json` rewrites. Content lives in `src/data/portfolio.js`. The stack is to be kept.
- Dark and light themes both supported via ThemeContext.
- Metrics and claims must match `project.md` exactly. Do not round, convert, or merge numbers across projects. Respect each project's "Do not claim" list.
- Some items in `project.md` are marked `[verify]`; treat them as unconfirmed.

## Brand Commitments

Name: Dhwanil Ranpura. Existing tagline and copy in `portfolio.js` are the voice baseline. Headshot and project images in `public/` are real assets.

## Evidence on Hand

- Ten project entries with images in `public/`, with resume-ready bullets in `project.md`.
- Experience: Data Automation Intern at Language & Culture Worldwide (Sep 2024 to Feb 2025); Documentation Assistant (volunteer) at GovAI Coalition.
- Leadership: Spartan Analytics (VP of Programs, Senior Vice President, President).
- ASA DataFest 2025 Best Overall Winner (Commercial Lease Market Forecasting).
- Absent: testimonials, client logos, press. Do not invent them.

## Product Principles

1. Truth over polish: every number is traceable to `project.md`.
2. Recruiter-first scanning: the strongest projects and contact paths are reachable within seconds.
3. Depth on demand: project detail pages reward technical reviewers without burdening skimmers.
4. Show the shipped system, not just the model: APIs, explainability, guardrails, and CI are the differentiator.

## Accessibility & Inclusion

No product-specific standard was stated. Both themes must stay legible.
