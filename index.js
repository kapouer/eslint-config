module.exports = {
	"rules": {
		"@stylistic/js/indent": ["error", "tab", {
			"MemberExpression": 1,
			"outerIIFEBody": "off",
			"SwitchCase": 1
		}],
		"@stylistic/js/no-tabs": ["error", {
			"allowIndentationTabs": true
		}],
		"no-var": "error",
		"no-use-before-define": ["error", "nofunc"],
		"@stylistic/js/linebreak-style": ["error", "unix"],
		"@stylistic/js/semi": ["error", "always"],
		"@stylistic/js/space-infix-ops": "warn",
		"no-console": ["error", { "allow": ["warn", "error", "info", "group", "groupEnd", "debug"] }],
		"no-empty": "warn",
		"no-unreachable-loop": "warn",
		"no-unused-private-class-members": "error",
		"no-unused-vars": ["warn", { "args": "none" }],
		"no-restricted-globals": ["error", {
			"name": "name",
			"message": "Do not use 'name' global variable"
		}, {
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
		"no-implicit-globals": "error",
		"no-implicit-coercion": ["warn", { "disallowTemplateShorthand": true, "boolean": true, "number": true, "string": true }],
		"@stylistic/js/no-multi-spaces": "error",
		"no-implied-eval": "error",
		"no-unsafe-optional-chaining": ["error", { "disallowArithmeticOperators": true }],
		"yoda": "error",
		"prefer-const": "error",
		"no-underscore-dangle": "warn",
		"no-nested-ternary": "warn",
		"no-lonely-if": "warn",
		"no-useless-call": "warn",
		"no-return-await": "error",
		"no-proto": "error",
		"no-new-wrappers": "error",
		"prefer-arrow-callback": "warn",
		"@kapouer/no-return-in-loop/no-return-in-loop": "error"
	},
	"env": {
		"browser": true,
		"node": true,
		"es2024": true
	},
	"plugins": [
		"@stylistic/js",
		"@kapouer/no-return-in-loop"
	],
	"extends": ["eslint:recommended"]
};

