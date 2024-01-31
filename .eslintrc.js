module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['import', 'prettier', 'simple-import-sort'],
  settings: {
    'import/resolver': {
      typescript: {}, // this is for TypeScript support
    },
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'no-console': 'off',
    'import/order': ['error', { 'newlines-between': 'always' }],
  },
}
