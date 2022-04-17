module.exports = {
  extends: 'eslint-config-airbnb-base',
  rules: {
    'no-console': 2,
    'import/prefer-default-export': 0,
  },
  env: {
    browser: true,
    es2021: true,
  },
  globals: {
    document: true,
    alert: true,
  },
};
