module.exports = {
  root: true,
  extends: ['next/core-web-vitals', 'airbnb', 'airbnb/hooks', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:perfectionist/recommended-natural',
      ],

      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 'latest',
      },
      rules: {
        '@typescript-eslint/comma-dangle': 'off',
        '@typescript-eslint/indent': 'off',
      },
    },
  ],
  plugins: ['@typescript-eslint', 'perfectionist'],
  rules: {
    // Reassign prettier settings
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    // Disable require deprecated default props
    'react/require-default-props': 'off',
    // Allow to reassign props otherwise throw an error
    'no-param-reassign': ['error', { props: false }],
    // Only .tsx files for JSX
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    // Disable react in scope rule
    'react/react-in-jsx-scope': 'off',
    // Allows you to skip explicit return types in TypeScript
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    // Allow unnamed functions
    'func-names': 'off',
    // Allow unary operators
    'no-plusplus': 'off',
    // Checks rules of Hooks
    'react-hooks/rules-of-hooks': 'error',
    // Checks effect dependencies
    'react-hooks/exhaustive-deps': 'error',
    // Allow to create input without label associated with 'for'
    'jsx-a11y/control-has-associated-label': [
      'off',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'both',
        depth: 25,
      },
    ],
    // Allow to create label without input associated with 'for'
    'jsx-a11y/label-has-associated-control': [
      'error',
      {
        components: [],
        required: {
          some: ['nesting', 'id'],
        },
        allowChildren: false,
      },
    ],
  },
};
