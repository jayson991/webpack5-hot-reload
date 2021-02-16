module.exports = {
  root: true,
  env: {
    amd: true,
    es6: true,
    node: true,
    jest: true,
    browser: true,
    commonjs: true
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-unused-vars': 1,
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'object-curly-spacing': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],
    'comma-spacing': [2, { before: false, after: true }]
  }
}
