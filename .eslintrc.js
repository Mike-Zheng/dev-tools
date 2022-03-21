module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: "vue-eslint-parser",
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    // eslint-config-prettier 的縮寫
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: "@typescript-eslint/parser",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier的縮寫
  plugins: ["vue", "@typescript-eslint", "prettier"],
  rules: {
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "no-var": "error",
    "prettier/prettier": "error",
    // 禁止出現console
    "no-console": "warn",
    // 禁用debugger
    "no-debugger": "warn",
    // 禁止出現重復的 case 標簽
    "no-duplicate-case": "warn",
    // 禁止出現空語句塊
    "no-empty": "warn",
    // 禁止不必要的括號
    "no-extra-parens": "off",
    // 禁止對 function 聲明重新賦值
    "no-func-assign": "warn",
    // 禁止在 return、throw、continue 和 break 語句之後出現不可達代碼
    "no-unreachable": "warn",
    // 強制所有控制語句使用一致的括號風格
    curly: "warn",
    // 要求 switch 語句中有 default 分支
    "default-case": "warn",
    // 強制盡可能地使用點號
    "dot-notation": "warn",
    // 要求使用 === 和 !==
    eqeqeq: "warn",
    // 禁止 if 語句中 return 語句之後有 else 塊
    "no-else-return": "warn",
    // 禁止出現空函數
    "no-empty-function": "warn",
    // 禁用不必要的嵌套塊
    "no-lone-blocks": "warn",
    // 禁止使用多個空格
    "no-multi-spaces": "warn",
    // 禁止多次聲明同一變量
    "no-redeclare": "warn",
    // 禁止在 return 語句中使用賦值語句
    "no-return-assign": "warn",
    // 禁用不必要的 return await
    "no-return-await": "warn",
    // 禁止自我賦值
    "no-self-assign": "warn",
    // 禁止自身比較
    "no-self-compare": "warn",
    // 禁止不必要的 catch 子句
    "no-useless-catch": "warn",
    // 禁止多余的 return 語句
    "no-useless-return": "warn",
    // 禁止變量聲明與外層作用域的變量同名
    "no-shadow": "off",
    // 允許delete變量
    "no-delete-var": "off",
    // 強制數組方括號中使用一致的空格
    "array-bracket-spacing": "warn",
    // 強制在代碼塊中使用一致的大括號風格
    "brace-style": "warn",
    // 強制使用駱駝拼寫法命名約定
    camelcase: "warn",
    // 強制使用一致的縮進
    indent: "off",
    // 強制在 JSX 屬性中一致地使用雙引號或單引號
    // 'jsx-quotes': 'warn',
    // 強制可嵌套的塊的最大深度4
    "max-depth": "warn",
    // 強制最大行數 300
    // "max-lines": ["warn", { "max": 1200 }],
    // 強制函數最大代碼行數 50
    // 'max-lines-per-function': ['warn', { max: 70 }],
    // 強制函數塊最多允許的的語句數量20
    "max-statements": ["warn", 100],
    // 強制回調函數最大嵌套深度
    "max-nested-callbacks": ["warn", 3],
    // 強制函數定義中最多允許的參數數量
    "max-params": ["warn", 3],
    // 強制每一行中所允許的最大語句數量
    "max-statements-per-line": ["warn", { max: 1 }],
    // 要求方法鏈中每個調用都有一個換行符
    "newline-per-chained-call": ["warn", { ignoreChainWithDepth: 3 }],
    // 禁止 if 作為唯一的語句出現在 else 語句中
    "no-lonely-if": "warn",
    // 禁止空格和 tab 的混合縮進
    "no-mixed-spaces-and-tabs": "warn",
    // 禁止出現多行空行
    "no-multiple-empty-lines": "warn",
    // 禁止出現;
    semi: 0,
    // 強制在塊之前使用一致的空格
    "space-before-blocks": "warn",
    // 強制在 function的左括號之前使用一致的空格
    // 'space-before-function-paren': ['warn', 'never'],
    // 強制在圓括號內使用一致的空格
    "space-in-parens": "warn",
    // 要求操作符周圍有空格
    "space-infix-ops": "warn",
    // 強制在一元操作符前後使用一致的空格
    "space-unary-ops": "warn",
    // 強制在註釋中 // 或 /* 使用一致的空格
    // "spaced-comment": "warn",
    // 強制在 switch 的冒號左右有空格
    "switch-colon-spacing": "warn",
    // 強制箭頭函數的箭頭前後使用一致的空格
    "arrow-spacing": "warn",
    "no-var": "warn",
    "prefer-const": "warn",
    "prefer-rest-params": "warn",
    "no-useless-escape": "warn",
    "no-irregular-whitespace": "warn",
    "no-prototype-builtins": "warn",
    "no-fallthrough": "warn",
    "no-extra-boolean-cast": "warn",
    "no-case-declarations": "warn",
    "no-async-promise-executor": "warn",
  },
  globals: {
    defineProps: "readonly",
    defineEmits: "readonly",
    defineExpose: "readonly",
    withDefaults: "readonly",
  },
};
