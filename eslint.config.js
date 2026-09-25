import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        rules: {
            "no-var": "error",
            "eqeqeq": "error",
            "prefer-const": "error",
        }
    },
    {
        files: ["**/*.test.js", "**/*.test.ts", "**/__tests__/**"],
        languageOptions: {
            globals: {
                test: "readonly",
                expect: "readonly",
                describe: "readonly",
                it: "readonly",
                beforeEach: "readonly",
                beforeAll: "readonly",
                afterEach: "readonly",
                afterAll: "readonly",
            }
        }
    }
]