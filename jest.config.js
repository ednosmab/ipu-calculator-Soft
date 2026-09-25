import { createDefaultEsmPreset } from "ts-jest"

const presetConfig = createDefaultEsmPreset({
    tsconfig: 'tsconfig.app.json',
})

export default{
    ...presetConfig,
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
}