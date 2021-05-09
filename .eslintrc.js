/*by Integral*/
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-nested-ternary': ['off', 'always'],
    'import/no-dynamic-require': ['off', 'always'],
    'no-restricted-globals': ['off', 'always'],
    'max-len': ['off', 'always'],
    'no-param-reassign': ['off', 'always'],
    'no-plusplus': ['off', 'always'],
    'no-bitwise': ['off', 'always'],
    'global-require': ['off', 'always'],
  },
};
