# Calculadora IPU

Polyurethane Injection (IPU) calculation engine with a web interface.

## Calculation Engines

### 1. IPU Injection Engine
Calculates the required injection index based on the combined mass
of Isocyanate and Polyol.

### 2. IPU Flow Calibration Engine
Uses the Industrial Rule of Three to correct machine values
based on actual extracted weight vs. desired weight.

## Tech Stack

| Layer    | Technology |
|----------|------------|
| Logic    | TypeScript |
| Interface| HTML / CSS |
| Tests    | Jest       |
| Quality  | ESLint     |

## Prerequisites

- Node.js >= 22
- npm >= 11

## Installation

    git clone <url>
    cd calc-IPU
    npm install

## How to Run

    npm start

## Project Structure

    calc-IPU/
    ├── src/                # Calculation engines
    ├── __tests__/          # Tests
    ├── tsconfig.json       # TypeScript config (build)
    ├── tsconfig.test.json  # TypeScript config (typecheck)
    ├── jest.config.js      # Jest config
    └── eslint.config.js    # ESLint config

## Scripts

| Command             | Description                     |
|---------------------|---------------------------------|
| `npm start`         | Start the application           |
| `npm test`          | Run tests                       |
| `npm run typecheck` | Check types                     |
| `npm run lint`      | Check code quality              |
| `npm run verify`    | Test + typecheck + lint         |
| `npm run build`     | Compile to `dist/`              |

## Intellectual Property

Proprietary software. All rights reserved.
