// noinspection JSUnusedGlobalSymbols

import postcssPresetsEnv from 'postcss-preset-env';
import postcssNesting from 'postcss-nesting';

export default {
    plugins: [
        postcssNesting(),
        postcssPresetsEnv({ stage:1 }),
    ],
}