module.exports = {
	"rules": {
		"indent": ["error", "tab", {
			"MemberExpression": 1,
			"outerIIFEBody": "off",
			"SwitchCase": 1
		}],
		"no-var": "error",
		"no-use-before-define": ["error", "nofunc"],
		"linebreak-style": ["error", "unix"],
		"semi": ["error", "always"],
		"no-multi-spaces": "warn",
		"space-infix-ops": "warn",
		"no-console": ["error", { "allow": ["warn", "error"] }],
		"no-empty": "warn",
		"no-unreachable-loop": "warn",
		"no-unused-vars": ["warn", { "args": "none" }],
		"no-restricted-globals": ["error", {
			"name": "isNaN",
			"message": "Use Number.isNaN"
		}, {
			"name": "parent",
			"message": "Use window.parent"
		}],
		"no-caller": "error",
		"no-constructor-return": "error",
		"no-eval": "error",
		"no-new-func": "error",
		"no-implicit-coercion": ["warn", { "disallowTemplateShorthand": true, "boolean": true, "number": true, "string": true }],
		"no-multi-spaces": "error",
		"no-implied-eval": "error",
		"no-unsafe-optional-chaining": ["error", { "disallowArithmeticOperators": true }],
		"yoda": "error",
		"prefer-const": "error"
	},
	"env": {
		"browser": true,
		"node": true,
		"es6": true
	},
	"parser": "@babel/eslint-parser",
	"plugins": [
		"@babel"
	],
	"parserOptions": {
		"requireConfigFile": false,
		"ecmaVersion": 11,
		"sourceType": "module",
		"babelOptions": {
			"plugins": [
				"@babel/plugin-syntax-class-properties"
			],
			"presets": [
				[
					"@babel/env",
					{
						"targets": "supports es6-module and supports private-class-fields"
					}
				]
			]
		}
	},
	"extends": "eslint:recommended"
};

