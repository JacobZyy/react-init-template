import antfu from '@antfu/eslint-config'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import tailwindPlugin from 'eslint-plugin-tailwindcss'

export default antfu({
  ignores: ['tsconfig**.json'],
  formatters: true,
  react: true,
}).append([
  {
    rules: {
      'no-unused-vars': 'off',
      'no-console': [
        // 提交时不允许有console.log
        'warn',
        {
          allow: ['warn', 'error'],
        },
      ],
      'style/arrow-parens': ['error', 'always'],
      'n/prefer-global/process': ['warn', 'always'],
      'ts/consistent-type-definitions': ['warn', 'type'],
      'react-dom/no-unsafe-target-blank': 'off',
      'react-dom/no-missing-button-type': 'off',
      'ts/ban-ts-comment': 'warn',
      'ts/no-explicit-any': 'warn',
      'ts/no-non-null-assertion': 'warn',
      'ts/no-unused-vars': 'warn',
      'no-debugger': 'warn',
      'import/order': 'off',
      'antfu/top-level-function': 'off',
      'sort-imports': 'off',
      'react-refresh/only-export-components': 'off',
    },

  },
])
  .append([
    {
      plugins: {
        tailwindcss: tailwindPlugin,
      },
      rules: {
        ...tailwindPlugin.configs.recommended.rules,
        'tailwindcss/no-custom-classname': 'off',
        'tailwindcss/classnames-order': ['warn', {
          ignoredKeys: ['icon'],
        }],
      },
    },
  ]).append([
    {
      plugins: {
        'simple-import-sort': simpleImportSort,
      },
      rules: {
        'simple-import-sort/imports': [
          'warn',
          {
            groups: [
              ['^react', '^@?\\w'],
              // Parent imports. Put `@/` last.
              ['^@/'],
              // parent import
              ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
              // Other relative imports. Put same-folder imports and `.` last.
              ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
              // Style imports.
              ['^.+\\.s?css$'],
              // svg imports
              ['^.+\\.svg$', '^.+\\.png$', '^.+\\.jpg$', '^.+\\.jpeg$', '^.+\\.webp$'],
            ],
          },
        ],
        'simple-import-sort/exports': 'off',
      },
    },
  ])
