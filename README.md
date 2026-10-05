# Calculadora IPU

Polyurethane Injection (IPU) calculation engines.
Static web interface built with Vite (MPA). Forms are not wired yet.

## Calculation Engines

### 1. IPU Injection Engine
Calculates the injection value from the combined mass
of Isocyanate and Polyol using the machine flow rate.

### 2. IPU Flow Calibration Engine
Uses the Industrial Rule of Three to correct machine values
based on actual extracted weight vs. desired weight.

## Input Validation

Both engines return a discriminated union (`CalcResult`) instead of
throwing, so callers must check `success` before using `value`.

| Code            | Meaning                                             |
|-----------------|-----------------------------------------------------|
| `INVALID_INPUT` | A non-finite number was informed (NaN or Infinity)  |
| `NEGATIVE_INPUT`| A negative value was informed (typing error)        |
| `ZERO_INPUT`    | A required value is zero (missing technical sheet)  |

Both engines validate inputs in order: non-finite check first
(`INVALID_INPUT`), then negatives, then zero.

## Tech Stack

| Layer     | Technology    |
|-----------|---------------|
| Logic     | TypeScript    |
| Interface | HTML / CSS    |
| Dev/Build | Vite 8 (MPA)  |
| Tests     | Jest          |
| Quality   | ESLint        |

## Prerequisites

- Node.js >= 22
- npm >= 11

## Installation

    git clone <url>
    cd calc-IPU
    npm install

## How to Run

    npm run dev       # dev server at http://localhost:5173
    npm run verify    # test + typecheck + lint

`npm run build` bundles to `dist/`; `npm run preview` serves the build.

## Project Structure

    calc-IPU/
    ├── index.html              # Main menu (Vite entry point)
    ├── pages/                  # One screen per engine
    │   ├── injection-page.html
    │   └── calibration-page.html
    ├── public/                 # Served at root (-> /css/...)
    │   └── css/
    │       ├── reset.css
    │       └── style.css
    ├── src/
    │   ├── core/               # Pure calculation engines
    │   └── application/        # Use cases + CalcResult types
    ├── __tests__/              # Mirrors src/
    │   ├── core/
    │   └── application/
    ├── vite.config.ts          # MPA: 3 entry points
    ├── tsconfig.json           # Solution-style config (references)
    ├── tsconfig.app.json       # TypeScript config (build)
    ├── tsconfig.test.json      # TypeScript config (typecheck)
    ├── jest.config.js          # Jest config
    └── eslint.config.js        # ESLint config

> **Note:** Vite serves `public/` at the site root, so HTML references
> `/css/style.css` (not `/public/css/style.css`).

## Scripts

| Command             | Description                |
|---------------------|----------------------------|
| `npm run dev`       | Dev server (port 5173)     |
| `npm test`          | Run tests                  |
| `npm run typecheck` | Check types                |
| `npm run lint`      | Check code quality         |
| `npm run verify`    | Test + typecheck + lint    |
| `npm run build`     | Bundle to `dist/`          |
| `npm run preview`   | Serve the production build |

## Intellectual Property

Proprietary software. All rights reserved.
