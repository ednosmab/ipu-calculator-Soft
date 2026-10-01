# Calculadora IPU

Polyurethane Injection (IPU) calculation engines.
Web interface: planned, not implemented yet.

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
| `NEGATIVE_INPUT`| A negative value was informed (typing error)        |
| `ZERO_INPUT`    | A required value is zero (missing technical sheet)  |

Calibration validates inputs before the operation: negatives first,
then zero extraction.

## Tech Stack

| Layer    | Technology          |
|----------|---------------------|
| Logic    | TypeScript          |
| Interface| HTML / CSS (planned)|
| Tests    | Jest                |
| Quality  | ESLint              |

## Prerequisites

- Node.js >= 22
- npm >= 11

## Installation

    git clone <url>
    cd calc-IPU
    npm install

## How to Run

There is no application entry point yet (engines only). The available
commands are test, typecheck, lint and build:

    npm run verify

## Project Structure

    calc-IPU/
    ├── src/
    │   └── core/           # Calculation engines (calibration, injection, types)
    ├── __tests__/
    │   └── core/           # Engine tests
    ├── tsconfig.json       # Solution-style config (references)
    ├── tsconfig.app.json   # TypeScript config (build)
    ├── tsconfig.test.json  # TypeScript config (typecheck)
    ├── jest.config.js      # Jest config
    └── eslint.config.js    # ESLint config

## Scripts

| Command             | Description                     |
|---------------------|---------------------------------|
| `npm test`          | Run tests                       |
| `npm run typecheck` | Check types                     |
| `npm run lint`      | Check code quality              |
| `npm run verify`    | Test + typecheck + lint         |
| `npm run build`     | Compile to `dist/`              |

## Intellectual Property

Proprietary software. All rights reserved.
