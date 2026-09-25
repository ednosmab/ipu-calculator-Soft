import { createDefaultEsmPreset } from "ts-jest"

const presetConfig = createDefaultEsmPreset({})

export default{
    ...presetConfig,
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
}