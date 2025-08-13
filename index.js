const importRules = {
  'import/extensions': [
    'warn',
    'never',
    {
      json: 'always',
      css: 'always',
      scss: 'always',
    },
  ],
  'import/no-cycle': 'error',
  'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
  'import/no-import-module-exports': 'off',
  'import/no-named-as-default': 'off',
  'import/order': 'off',
  'import/prefer-default-export': 'off',
};

const reactRules = {
  'react/function-component-definition': ['error', { namedComponents: 'function-declaration' }],
  'react/jsx-filename-extension': 'off',
  'react/jsx-fragments': 'off',
  'react/jsx-props-no-spreading': 'off',
  'react/jsx-sort-props': [
    2,
    {
      callbacksLast: true,
      shorthandFirst: false,
      shorthandLast: true,
      ignoreCase: true,
      noSortAlphabetically: false,
    },
  ],
  'react/no-array-index-key': 'warn',
  'react/no-unescaped-entities': 'off',
  'react/no-unused-prop-types': 'warn',
  'react/prefer-stateless-function': 'off',
  'react/react-in-jsx-scope': 'off',
  'react/state-in-constructor': 'off',
  'react/static-property-placement': 'off',
};

const typescriptRules = {
  '@typescript-eslint/ban-ts-comment': 'off',
  '@typescript-eslint/consistent-generic-constructors': 'warn',
  '@typescript-eslint/consistent-indexed-object-style': 'warn',
  '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
  '@typescript-eslint/consistent-type-exports': 'warn',
  '@typescript-eslint/consistent-type-imports': 'warn',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-member-accessibility': [
    'warn',
    {
      accessibility: 'explicit',
      overrides: {
        accessors: 'explicit',
        constructors: 'no-public',
        methods: 'explicit',
        properties: 'no-public',
        parameterProperties: 'explicit',
      },
    },
  ],
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/member-ordering': 'warn',
  '@typescript-eslint/method-signature-style': ['warn', 'method'],
  '@typescript-eslint/no-array-constructor': 'warn',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
  '@typescript-eslint/no-redundant-type-constituents': 'warn',
  '@typescript-eslint/no-shadow': 'error',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
  '@typescript-eslint/no-unnecessary-condition': 'off',
  '@typescript-eslint/no-unnecessary-type-arguments': 'warn',
  '@typescript-eslint/no-unnecessary-type-assertion': 'error',
  '@typescript-eslint/no-unnecessary-type-constraint': 'error',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-unsafe-argument': 'off',
  '@typescript-eslint/no-useless-constructor': 'warn',
  '@typescript-eslint/no-var-requires': 'off',
  '@typescript-eslint/prefer-includes': 'warn',
  '@typescript-eslint/prefer-optional-chain': 'warn',
  '@typescript-eslint/prefer-reduce-type-parameter': 'warn',
  '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
  '@typescript-eslint/require-array-sort-compare': 'warn',
  '@typescript-eslint/sort-type-constituents': 'warn',
  'arrow-body-style': ['error', 'as-needed'],
  'class-methods-use-this': 'off',
  'default-case': 'off',
  'max-classes-per-file': 'off',
  'no-array-constructor': 'off',
  'no-await-in-loop': 'off',
  'no-dupe-class-members': 'off',
  'no-empty-function': ['warn', { allow: ['constructors'] }],
  'no-shadow': 'off',
  'no-undef': 'off',
  'no-unused-expressions': 'off',
  'no-unused-vars': 'off',
  'no-use-before-define': 'off',
  'no-useless-constructor': 'off',
  'security/detect-object-injection': 'off',
  'space-before-function-paren': 'off',
  'testing-library/no-await-sync-query': 'off',
  'testing-library/no-debugging-utils': 'off',
  'valid-jsdoc': 'off',
  '@typescript-eslint/no-use-before-define': [
    'warn',
    { functions: false, classes: false, variables: false, typedefs: false },
  ],
  '@typescript-eslint/no-unused-expressions': [
    'error',
    { allowShortCircuit: true, allowTernary: true, allowTaggedTemplates: true },
  ],
  '@typescript-eslint/no-unused-vars': [
    'warn',
    { args: 'none', ignoreRestSiblings: true, argsIgnorePattern: '^_' },
  ],
  '@typescript-eslint/consistent-type-assertions': [
    'warn',
    { assertionStyle: 'as', objectLiteralTypeAssertions: 'allow' },
  ],
  '@typescript-eslint/no-misused-promises': [
    'error',
    {
      checksVoidReturn: false,
    },
  ],
  '@typescript-eslint/prefer-readonly': ['error', { onlyInlineLambdas: true }],
  'sort-exports/sort-exports': ['warn', { sortDir: 'asc' }],
};

const unicornRules = {
  'unicorn/better-regex': 'warn',
  'unicorn/catch-error-name': 'warn',
  'unicorn/consistent-function-scoping': ['warn', { checkArrowFunctions: false }],
  'unicorn/custom-error-definition': 'warn',
  'unicorn/empty-brace-spaces': 'warn',
  'unicorn/no-array-push-push': 'warn',
  'unicorn/no-await-expression-member': 'error',
  'unicorn/no-empty-file': 'error',
  'unicorn/no-for-loop': 'warn',
  'unicorn/no-invalid-remove-event-listener': 'error',
  'unicorn/no-unsafe-regex': 'warn',
  'unicorn/no-useless-fallback-in-spread': 'error',
  'unicorn/no-useless-length-check': 'error',
  'unicorn/no-useless-spread': 'error',
  'unicorn/number-literal-case': 'warn',
  'unicorn/prefer-array-find': 'warn',
  'unicorn/prefer-array-some': 'warn',
  'unicorn/prefer-code-point': 'error',
  'unicorn/prefer-date-now': 'warn',
  'unicorn/prefer-default-parameters': 'warn',
  'unicorn/prefer-export-from': 'error',
  'unicorn/prefer-includes': 'warn',
  'unicorn/prefer-object-from-entries': 'warn',
  'unicorn/prefer-optional-catch-binding': 'warn',
  'unicorn/prefer-spread': 'warn',
  'unicorn/prefer-switch': 'warn',
  'unicorn/prefer-ternary': 'warn',
  'unicorn/prefer-top-level-await': 'off',
  'unicorn/prefer-type-error': 'warn',
  'unicorn/prevent-abbreviations': [
    'warn',
    {
      ignore: ['e2e'],
      replacements: {
        acc: false,
        arg: false,
        args: false,
        db: false,
        dev: false,
        el: false,
        env: false,
        fn: false,
        next: false,
        param: false,
        params: false,
        prod: false,
        prop: false,
        props: false,
        ref: false,
        refs: false,
        req: false,
        res: false,
        src: false,
        temp: false,
        var: false,
        vars: false,
      },
    },
  ],
  'unicorn/template-indent': 'warn',
  'unicorn/throw-new-error': 'warn',
};

module.exports = {
  ignorePatterns: ['node_modules', 'dist', 'coverage', 'logs'],
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jest-dom/recommended',
    'plugin:prettier/recommended',
    'plugin:testing-library/react',
    'plugin:sonarjs/recommended-legacy',
    'plugin:security/recommended-legacy',
  ],
  env: {
    commonjs: true,
    es2022: true,
    jest: true,
    'jest/globals': true,
    node: true,
  },
  plugins: [
    '@babel',
    'simple-import-sort',
    'sort-destructure-keys',
    'unicorn',
    'sonarjs',
    '@typescript-eslint',
    'jsx-a11y',
    'sort-exports',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jxs', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', './', './src'],
      },
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['**/*.js?(x)'],
      parser: '@babel/eslint-parser',
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
      },
      rules: {
        'react/prop-types': 'warn',
      },
    },
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      extends: [
        'plugin:import/typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:typescript-sort-keys/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      rules: {
        ...typescriptRules,
        'react/default-props-match-prop-types': 'off',
        'react/prop-types': 'off',
        'react/require-default-props': 'off',
      },
    },
  ],
  rules: {
    curly: ['error', 'all'],
    'global-require': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'newline-per-chained-call': ['warn', { ignoreChainWithDepth: 5 }],
    'no-else-return': ['error', { allowElseIf: true }],
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'accumulator', // for reduce accumulators
          'e', // for events
          'event', // for events / AWS Lambdas
          'el', // for HTMLElements
          'element', // for HTMLElements
          'ctx', // for Koa routing
          'context', // for Koa routing
          'draft', // for immer
          'req', // for Express requests
          'request', // for Express requests
          'res', // for Express responses
          'response', // for Express responses
        ],
      },
    ],
    'no-plusplus': 'off',
    'no-restricted-syntax': ['error', 'LabeledStatement', 'WithStatement'],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
      { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
      { blankLine: 'always', prev: 'block-like', next: '*' },
      { blankLine: 'always', prev: '*', next: 'block-like' },
      { blankLine: 'never', prev: 'case', next: 'block-like' },
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'jsx-a11y/control-has-associated-label': 'warn',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: 'useUpdateEffect',
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          ['^\\u0000'], // Side effect imports
          ['^node', `^(${require('module').builtinModules.join('|')})(/|$)`],
          ['^react$', '^react-dom$', '^react', '^@?(?!test/)\\w'],
          ['^~$'],
          ['^~/modules'],
          ['^~/config'],
          ['^~/actions', '^~/literals', '^~/reducers', '^~/services', '^~/sagas'],
          ['^~/components', '^~/containers', '^~/routes'],
          ['^~', '^src'],
          ['^test/\\w'],
          ['^\\./[^.]'], // './*'
          ['^\\.\\./'], // '../*'
        ],
      },
    ],
    'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: ['expect', 'request.**.expect'],
      },
    ],
    'no-empty-function': ['warn', { allow: ['constructors'] }],
    ...importRules,
    ...reactRules,
    ...unicornRules,
  },
};
