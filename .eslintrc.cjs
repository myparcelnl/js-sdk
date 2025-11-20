module.exports = {
  root: true,
  overrides: [
    {
      files: ['./**/*.ts', './**/*.tsx'],
      extends: ['@myparcel-dev/eslint-config-prettier-typescript', '@myparcel-dev/eslint-config-import'],
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
        '@myparcel-dev/eslint-config-node',
        '@myparcel-dev/eslint-config-esnext',
        '@myparcel-dev/eslint-config-prettier',
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
