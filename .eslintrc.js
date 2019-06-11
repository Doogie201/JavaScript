module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "jest": true
    },
    "parser": "babel-eslint",
    "extends": "eslint:recommended",
    "extends": "standard",
    "extends": ["prettier"],
    "extends": ["plugin:prettier/recommended"],
    "extends": ["airbnb"],
    "extends": ["plugin:react/recommended"],
    //"extends": ["eslint:all", "plugin:react/all"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": ["prettier",
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, {
            "extensions": [".js", ".jsx"] }],
        "semi": ["error", "always"],
        "quotes": ["error", "double"],
        "prettier/prettier": ["error"],
        "react/no-this-in-sfc": 0,
        "react/destructuring-assignment": 0,
        "react/jsx-one-expression-per-line": 0
    }
};