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
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    semi: [2, 'never'],
    quotes: [2, 'single'],
    'comma-dangle': [2, 'never'],
    'object-curly-spacing': [2, 'always'],
    'array-bracket-spacing': [2, 'never'],
    'comma-spacing': [2, { before: false, after: true }],
    'no-unused-vars': [
      1,
      {
        'args': 'after-used',
        'argsIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'ignoreRestSiblings': true
      }
    ]
  }
}
