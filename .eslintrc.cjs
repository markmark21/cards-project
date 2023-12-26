module.exports = {
  extends: ["@it-incubator/eslint-config", "plugin:storybook/recommended"],
  plugins: ['storybook'],
  overrides: [
    {
      files: ['**/*.stories.tsx'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
        'no-console': 'off',
      },
    },
  ],
}