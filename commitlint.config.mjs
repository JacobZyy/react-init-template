const commitlintConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['add', 'fix', 'style', 'test', 'revert', 'update', 'feat', 'chore', 'doc'],
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'body-leading-blank': [0, 'never'],
  },
}

export default commitlintConfig
