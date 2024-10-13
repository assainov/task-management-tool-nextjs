module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:@next/next/recommended',
  ],
  plugins: [
    'unused-imports',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },

  rules: {
    // https://stackoverflow.com/a/61555310/8936345
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    'react/jsx-props-no-spreading': 'off',
    'react/react-in-jsx-scope': 'off', // coz Next.js
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'max-len': ['error', {
      code: 120,
      ignoreTemplateLiterals: true,
      ignoreStrings: true,
      ignoreUrls: true,
    }],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx', '.tsx'],
    }],
    'jsx-a11y/anchor-is-valid': 'off', // coz Next.js
    'import/no-extraneous-dependencies': 'off',
    'react/prop-types': 'off',
    'template-curly-spacing': ['error', 'always'],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'react/jsx-no-bind': 'off',
    'consistent-return': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-require-imports': 'off',
    'no-restricted-exports': ['off', { restrictedNamedExports: ['default'] }],
    'no-undef': 'off',
    'react/jsx-closing-tag-location': 'off',
    'class-methods-use-this': 'off',
    'import/no-unresolved': 'off',
    'react/function-component-definition': 'off',
    'no-mixed-spaces-and-tabs': 'off',
  },
  overrides: [
    {
      // Disable shadcn-specific rule violations
      files: ['src/components/@common/*'],
      rules: {
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-empty-object-type': 'off',
        'react/no-unknown-property': 'off',
      },
    },
  ],
};
