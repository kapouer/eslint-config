import globals from "globals";

import js from '@eslint/js';
import { defineConfig } from "eslint/config";
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';
import redosDetector from 'eslint-plugin-redos-detector';
import noreturnLoop from "@kapouer/eslint-plugin-no-return-in-loop";

const config = {
	rules: {
		"@stylistic/indent": ["error", "tab", {
			"MemberExpression": 1,
			"outerIIFEBody": "off",
			"SwitchCase": 1
		}],
		"@stylistic/no-tabs": ["error", {
			"allowIndentationTabs": true
		}],
		"no-var": "error",
		"no-use-before-define": ["error", "nofunc"],
		"@stylistic/linebreak-style": ["error", "unix"],
		"@stylistic/semi": ["error", "always"],
		"@stylistic/space-infix-ops": "warn",
		"no-console": ["error", {
			"allow": ["warn", "error", "info", "group", "groupEnd", "debug"]
		}],
		"no-empty": "warn",
		"no-unreachable-loop": "warn",
		"no-unused-private-class-members": "error",
		"no-unused-vars": ["warn", {
			"args": "none"
		}],
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
		"no-implicit-coercion": ["warn", {
			"disallowTemplateShorthand": true,
			"boolean": true,
			"number": true,
			"string": true
		}],
		"@stylistic/no-multi-spaces": "error",
		"no-implied-eval": "error",
		"no-unsafe-optional-chaining": ["error", {
			"disallowArithmeticOperators": true
		}],
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
		"@kapouer/no-return-in-loop/no-return-in-loop": "error",
		"require-atomic-updates": "error",
		"@typescript-eslint/no-require-imports": ["off"],
		"eqeqeq": ["error", "smart"],
		"no-useless-return": "error",
		"dot-notation": "error",
		"no-useless-assignment": "error",
		"no-self-compare": "error",
		"no-promise-executor-return": "error",
		"array-callback-return": ["error", {
			checkForEach: true
		}],
		"redos-detector/no-unsafe-regex": "error",
		"@typescript-eslint/no-unnecessary-condition": "off"
	},
	languageOptions: {
		ecmaVersion: 2024,
		globals: {
			...globals.browser,
			...globals.node
		},
		parser: tseslint.parser
	},
	files: ['**/*.{js,ts,mjs}'],
	"plugins": {
		'@stylistic': stylistic,
		'redos-detector': redosDetector,
		'@kapouer/no-return-in-loop': noreturnLoop
	}
};

export default function kapouerConfig({ mocha } = {}) {
	const list = [
		js.configs.recommended,
		tseslint.configs.recommended,
		config
	];
	if (mocha) list.push({
		languageOptions: {
			globals: {
				...globals.mocha
			}
		},
	});
	return defineConfig(list);
};

