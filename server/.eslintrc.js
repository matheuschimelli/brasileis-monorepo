module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },

  // env: {
  //   browser: true,
  //   es2021: true,
  //   jest: true,
  // },
  // plugins: ['prettier'],
  // extends: ['airbnb-typescript', 'plugin:prettier/recommended'],
  // parserOptions: {
  //   ecmaVersion: 12,
  //   sourceType: 'module',
  //   project: ['./tsconfig.json'],
  // },
  // rules: {
  //   'import/no-extraneous-dependencies': [
  //     'error',
  //     {
  //       devDependencies: true,
  //     },
  //   ],
  //   'no-unused-vars': 'warn',
  //   'import/prefer-default-export': 'off',
  // },
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       moduleDirectory: ['node_modules', 'src'],
  //     },
  //   },
  // },
};
