module.exports = {
  root: true,
  overrides: [
    {
      files: ['./**/*.ts', './**/*.tsx'],
      extends: ['@myparcel-eslint/eslint-config-prettier-typescript', '@myparcel-eslint/eslint-config-import'],
      rules: {
        'class-methods-use-this': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
      },
    },
    {
      files: ['./**/index.ts'],
      plugins: ['sort-exports'],
      rules: {
        'sort-exports/sort-exports': ['warn', {sortDir: 'asc', sortExportKindFirst: 'type'}],
      },
    },
    {
      files: ['./**/*.js', './**/*.cjs', './**/*.mjs'],
      extends: [
        '@myparcel-eslint/eslint-config-node',
        '@myparcel-eslint/eslint-config-esnext',
        '@myparcel-eslint/eslint-config-prettier',
      ],
    },
    {
      files: ['./**/*.spec.*', './**/*.test.*', './**/__tests__/**'],
      rules: {
        '@typescript-eslint/no-magic-numbers': 'off',
        'max-len': 'off',
        'max-lines-per-function': 'off',
      },
    },
  ],
};
