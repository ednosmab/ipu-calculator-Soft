# Calculadora IPU

Polyurethane Injection (IPU) calculation engines.
Static web interface built with Vite (MPA).

> Status: the injection page renders its form dynamically and
> validates every field with a labeled PT-BR message (empty,
> invalid, negative, zero). Result wiring and the calibration
> form are still pending.

## Calculation Engines

### 1. IPU Injection Engine
Calculates the injection value from the combined mass
of Isocyanate and Polyol using the machine flow rate.

### 2. IPU Flow Calibration Engine
Uses the Industrial Rule of Three to correct machine values
based on actual extracted weight vs. desired weight.

## Input Validation

Validation happens at two boundaries.

### Domain — `src/application/`

Both engines return a discriminated union (`CalcResult`) instead of
throwing, so callers must check `success` before using `value`.

| Code            | Meaning                                             |
|-----------------|-----------------------------------------------------|
| `INVALID_INPUT` | A non-finite number was informed (NaN or Infinity)  |
| `NEGATIVE_INPUT`| A negative value was informed (typing error)        |
| `ZERO_INPUT`    | A required value is zero (missing technical sheet)  |

Both engines validate inputs in order: non-finite check first
(`INVALID_INPUT`), then negatives, then zero.

### UI — `src/ui/validations/`

`validateField(value, labelText)` checks the raw string before it
reaches the domain and returns a PT-BR message (or `''` when valid):

| Case       | Message                            |
|------------|------------------------------------|
| empty      | `Informe um número para <campo>`   |
| not a number | `Valor inválido para <campo>`    |
| negative   | `<campo> não pode ser negativo`    |
| zero       | `<campo> não pode ser zero`        |

Accepted input: comma or dot as decimal separator (`12,5` → 12.5)
and border spaces (`' 7'`); internal spaces are rejected.

Rule ownership: numeric rules live in `application/` (covered by
Jest); string parsing, messages and field labels live in
`src/ui/validations/` (also covered by Jest).

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
    ├── index.html                  # Main menu (Vite entry point)
    ├── pages/                      # One screen per engine
    │   ├── injection-page.html
    │   └── calibration-page.html
    ├── public/
    │   └── assets/images/          # App icons (served at root)
    ├── src/
    │   ├── core/                   # Pure calculation engines
    │   ├── application/            # Use cases + CalcResult types
    │   └── ui/
    │       ├── components/         # number-field factory
    │       ├── styles/             # reset.css + style.css
    │       ├── validations/        # validate-field (string + labels)
    │       └── injection-page.ts   # Injection form glue
    ├── __tests__/                  # Mirrors src/
    │   ├── core/
    │   ├── application/
    │   └── ui/
    ├── vite.config.ts              # MPA: 3 entry points
    ├── tsconfig.json               # Solution-style config (references)
    ├── tsconfig.app.json           # TypeScript config (build)
    ├── tsconfig.test.json          # TypeScript config (typecheck)
    ├── jest.config.js              # Jest config
    └── eslint.config.js            # ESLint config

> **Note:** CSS lives under `src/ui/styles/` (not `public/`) so the
> Vite dev server hot-reloads it on change.

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
