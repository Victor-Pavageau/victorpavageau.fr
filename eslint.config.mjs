import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [{
  ignores: ['**/dist', '**/eslint.config.mjs', '**/vite.config.ts'],
}, ...fixupConfigRules(compat.extends(
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:react-hooks/recommended',
)), {
  plugins: {
    'react-refresh': reactRefresh,
  },

  languageOptions: {
    globals: {
      ...globals.browser,
    },

    parser: tsParser,
  },

  rules: {
    'react-refresh/only-export-components': ['warn', {
      allowConstantExport: true,
    }],

    'semi': ['error', 'always'],
    'react-hooks/exhaustive-deps': 'off',
    'quotes': ['error', 'single'],
    'indent': ['error', 2],
    'eqeqeq': 'error',
    'no-console': 'warn',
    'curly': 'error',
    'no-eval': 'error',
    'prefer-const': 'warn',
    'camelcase': 'error',
    'no-trailing-spaces': 'error',
    'comma-dangle': ['error', 'always-multiline'],
    'no-unused-vars': 'warn',
    'no-undef': 'error',
    'no-var': 'error',
    'no-const-assign': 'error',
    'no-this-before-super': 'error',
    'no-irregular-whitespace': 'error',
    'no-unreachable': 'error',
    'no-unexpected-multiline': 'error',
    'no-sparse-arrays': 'error',
    'no-shadow': 'warn',
    'no-prototype-builtins': 'error',
    'no-proto': 'error',
    'no-new-wrappers': 'error',
    'no-new-func': 'error',
    'no-new': 'error',
    'max-lines': ['warn', {
      max: 120,
      skipBlankLines: true,
      skipComments: true,
    }],
    'max-depth': ['warn', {
      max: 4,
    }],
    'max-params': ['warn', {
      max: 4,
    }],
    'max-statements': ['warn', {
      max: 15,
    }],
    'max-nested-callbacks': ['warn', {
      max: 3,
    }],
    'max-len': ['warn', {
      code: 120,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],

    'no-multiple-empty-lines': ['error', {
      max: 1,
    }],

    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/typedef': [
      'warn',
      {
        'variableDeclaration': true,
      },
    ],
  },
}, {
  files: ['**/*.ts', '**/*.tsx'],
}];