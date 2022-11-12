module.exports = {
  // 현재 eslintrc 파일을 기준으로 ESLint 규칙을 적용
  root: true,
  parser: 'vue-eslint-parser',
  env: {
    node: true,
  },
  // 추가적인 규칙들을 적용
  extends: [
    'eslint:recommended',
    // 'plugin:vue/essential',
    'plugin:vue/vue3-recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  // 코드 정리 플러그인 추가
  plugins: ['prettier'],
  // 사용자 편의 규칙 추가
  rules: {
    'prettier/prettier': [
      'error',
      // 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
      // https://prettier.io/docs/en/options.html
      {
        printWidth: 90, // 한 줄의 라인 수
        tabWidth: 2, // tab의 너비
        useTabs: false, // tab 사용 여부
        semi: true, // ; 사용 여부
        singleQuote: true, // 'string' 사용 여부
        quoteProps: 'consistent', // 객체 property의 따옴표 여부
        trailingComma: 'es5', // 끝에 , 사용 여부
        bracketSpacing: true, // Object literal에 띄어쓰기 사용 여부 (ex: { foo: bar })
        arrowParens: 'always', // 함수에서 인자에 괄호 사용 여부 (ex: (x) => y)
        endOfLine: 'lf',
      },
    ],
    'vue/multi-word-component-names': 'off',
    'eslint-disable-next-line': 'off',
    'vue/no-unused-components': 'off',
    'vue/no-reserved-component-names': 'off',
    'no-debugger': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
