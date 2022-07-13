module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: ['plugin:vue/essential', 'eslint:recommended'],
    rules: {
        'no-console': 'off',
    },
    parserOptions: {
        parser: 'babel-eslint',
    },
    globals: {
        RootDataView: 'readonly',
        html2canvas: 'readonly',
        VISUALTOOLS_CONFIG: 'readonly',
    },
}
