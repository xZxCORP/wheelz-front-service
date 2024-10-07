/* eslint-disable @typescript-eslint/no-var-requires */
const zcorpConfig = require('@zcorp/prettier-config');

module.exports = {
  ...zcorpConfig,
  plugins: ['prettier-plugin-tailwindcss'],
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
};
