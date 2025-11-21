module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  rules: {
    // Общий стиль кода
    semi: ['off'], // не требует точку с запятой
    quotes: ['error', 'single'], // одинарные кавычки
    indent: ['error', 2], // отступ 2 пробела

    // Функциональный стиль и иммутабельность
    'no-var': 'error', // запрещает var
    'prefer-const': 'error', // использовать const, если возможно
    'no-param-reassign': 'error', // запрещает мутировать параметры функции
    'no-console': 'warn', // предупреждает про console.log

    // Переменные
    'no-unused-vars': ['warn', { args: 'none', ignoreRestSiblings: true }],
  },
  ignorePatterns: ['node_modules/', 'dist/'],
};
