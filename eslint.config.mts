import js from '@eslint/js'
import eslintReact from '@eslint-react/eslint-plugin'
import eslintNextPlugin from '@next/eslint-plugin-next'
import vitest from '@vitest/eslint-plugin'
import importPlugin from 'eslint-plugin-import-x'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  {
    ignores: ['dist', 'build', 'node_modules', '.next'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx,mts}'],
    plugins: {
      'react-hooks': reactHooks,
      '@eslint-react': eslintReact,
      '@next/next': eslintNextPlugin,
      'import-x': importPlugin,
      vitest,
    },
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...eslintReact.configs.recommended.rules,
      ...vitest.configs.recommended.rules,
      ...eslintNextPlugin.configs.recommended.rules,
      '@eslint-react/no-array-index-key': 'off',
      '@eslint-react/dom-no-dangerously-set-innerhtml': 'off',
      'import-x/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'parent',
            'sibling',
            'index',
            'object',
          ],

          pathGroups: [
            {
              pattern: '@/**',
              group: 'parent',
              position: 'before',
            },
          ],
          alphabetize: {
            order: 'asc',
          },
          'newlines-between': 'always',
        },
      ],
    },
  }
)
