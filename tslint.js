const path = require("path")

// see https://www.npmjs.com/package/tslint-eslint-rules for more info on some rules
module.exports = {
    rulesDirectory: [
        path.join(path.dirname(require.resolve("tslint-consistent-codestyle")), "./"),
        path.join(path.dirname(require.resolve("tslint-eslint-rules")), "dist/rules"),
        path.join(path.dirname(require.resolve("tslint-microsoft-contrib")), "./"),
    ],
    rules: {
        "array-bracket-spacing": [true, "never"],
        "array-type": [true, "array"],
        "adjacent-overload-signatures": true,
        "align": [
            true,
            "parameters",
            "arguments",
            "statements"
        ],
        "arrow-parens": true,
        "arrow-return-shorthand": [true, "multiline"],
        // "await-promise": true, too many external libraries don't return the right types
        "ban": true, // to be enumerated
        "ban-comma-operator": true,
        "binary-expression-operand-order": true,
        "block-spacing": [
            true,
            "always"
        ],
        "brace-style": [
            true,
            "1tbs",
            {
                "allowSingleLine": false,
            }
        ],
        "class-name": true,
        "comma-dangle": ["error", "only-multiline"],
        "comment-format": [
            true,
            "check-space"
        ],
        "curly": true,
        // experimental
        "cyclomatic-complexity": [true, 8],
        "deprecation": true,
        "encoding": true,
        "eofline": true,
        // len 0 is experimental
        "early-exit": [true, { "max-length": 0, "ignore-constructor": true }],
        "forin": true,
        "handle-callback-err": [true, "^.*(e|E)rr"],
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
        "import-spacing": true,
        "indent": [true, "spaces", 4],
        "interface-name": [true, "never-prefix"],
        "interface-over-type-literal": true,
        "jsdoc-format": true,
        "jsx-no-lambda": false,
        "jsx-no-multiline-js": false,
        "label-position": true,
        "linebreak-style": [true, "LF"],
        "match-default-export-name": true,
        "member-ordering": [
            true,
            "public-before-private",
            "static-before-instance",
            "variables-before-functions"
        ],
        "max-classes-per-file": [true, 1],
        "max-file-line-count": [true, 300],
        "max-len": [2 , 120, 2, { "ignoreUrls": true }],
        "max-line-length": [true, 120],
        "new-parens": true,
        "newline-before-return": true,
        "newline-per-chained-call": true,
        "no-angle-bracket-type-assertion": true,
        "no-any": true,
        "no-arg": true,
        "no-bitwise": true,
        "no-conditional-assignment": true,
        "no-console": true,
        "no-consecutive-blank-lines": true,
        "no-constant-condition": true,
        "no-construct": true,
        "no-control-regex": true,
        "no-debugger": true,
        "no-default-export": false,
        "no-duplicate-imports": true,
        "no-duplicate-switch-case": true,
        "no-duplicate-super": true,
        "no-duplicate-variable": true,
        "no-dynamic-delete": true,
        "no-empty": true,
        "no-empty-character-class": true,
        "no-eval": true,
        "no-ex-assign": true,
        "no-extra-boolean-cast": true,
        // "no-extra-parens": true,
        "no-extra-semi": true,
        "no-floating-promises": true,
        "no-for-in-array": true,
        "no-import-side-effect": true,
        // TODO need to wait on TSLint to patch this issue
        // "no-implicit-dependencies": [true, "src/*", "app/*", "core/*"],
        "no-inferrable-types": true,
        "no-inferred-empty-object-type": true,
        "no-inner-declarations": [
            true,
            "both"
        ],
        "no-internal-module": true,
        "no-invalid-regexp": true,
        "no-invalid-this": true,
        "no-invalid-template-strings": true,
        "no-irregular-whitespace": true,
        "no-mergeable-namespace": true,
        "no-misused-new": true,
        // "no-magic-numbers": true, to be discussed
        "no-multi-spaces": true,
        "no-namespace": [true, "allow-declarations"],
        "no-non-null-assertion": true, // to be discussed?
        "no-null-keyword": false,
        "no-object-literal-type-assertion": true,
        "no-param-reassign": ["error", { "props": false }],
        "no-parameter-properties": true,
        "no-regex-spaces": true,
        "no-reference": true,
        "no-reference-import": true,
        "no-relative-imports": true,
        "no-require-imports": true,
        "no-return-await": true,
        "no-shadowed-variable": true,
        "no-sparse-arrays": true,
        "no-string-literal": true,
        "no-string-throw": true,
        "no-switch-case-fall-through": true,
        "no-this-assignment": true,
        "no-trailing-whitespace": [true, "ignore-template-strings"],
        "no-unbound-method": true,
        "no-underscore-dangle": ["error", { "allowAfterThis": true }],
        "no-unexpected-multiline": true,
        "no-unnecessary-class": true,
        "no-unnecessary-initializer": false,
        "no-unnecessary-qualifier": true,
        // "no-unsafe-any": true, too many errors due to third party types
        "no-unsafe-finally": true,
        "no-unused-expression": true,
        // "no-unused-variable": true, redundant TS 2.9
        "no-use-before-declare": true,
        "no-var-keyword": true,
        "no-var-requires": true,
        "no-void-expression": true,
        "number-literal-format": true,
        "object-curly-spacing": [true, "always"],
        "object-literal-key-quotes": [
            true,
            "consistent-as-needed"
        ],
        "object-literal-shorthand": true,
        "object-literal-sort-keys": [
            true,
            "ignore-case",
            "match-declaration-order",
            "shorthand-first"
        ],
        "one-line": [
            true,
            "check-catch",
            "check-finally",
            "check-else",
            "check-open-brace",
            "check-whitespace"
        ],
        "one-variable-per-declaration": true,
        "only-arrow-functions": [true, "allow-declarations", "allow-named-functions"],
        // "sort-imports": [true, { "ingore-case": true, "memberSyntaxSortOrder": ["none"] }],
        "ordered-imports": [true, {
            "grouped-imports": true,
            "import-sources-order": "case-insensitive",
            "named-imports-order": "case-insensitive",
            "module-source-path": "full"
        }],
        "prefer-const": [true, {"destructuring": "all"}],
        "prefer-for-of": true,
        "prefer-conditional-expression": false, // to be discussed?
        "prefer-function-over-method": true,
        "prefer-method-signature": true,
        "prefer-object-spread": true,
        "prefer-switch": [true, {"min-cases": 2}],
        "prefer-readonly": true,
        "prefer-template": true,
        "prefer-while": true,
        "promise-function-async": true,
        "quote-props": ["error", "as-needed", "avoid-template", "avoid-escape"],
        "quotemark": [true, "single", "jsx-double"],
        "radix": true,
        "restrict-plus-operands": true,
        "return-undefined": true,
        "semi":["error", "never"],
        "semicolon": [true, "never"],
        "space-before-function-paren": [true, "never"],
        "space-within-parens": [0],
        "strict": [0, "global"],
        "switch-default": true,
        "switch-final-break": true,
        "trailing-comma": [
            true,
            {
                "multiline": {
                    "objects": "always",
                    "arrays": "always",
                    "functions": "always",
                    "typeLiterals": "ignore"
                },
                "esSpecCompliant": true
            }
        ],
        "ter-arrow-body-style": ["as-needed"],
        "ter-arrow-spacing": [true],
        "triple-equals": [true, "allow-null-check"],
        "typedef": [
            true,
            // TODO list should be enumerated more?
            "parameter",
            "property-declaration"
        ],
        "typedef-whitespace": [
            true,
            {
                "call-signature": "nospace",
                "index-signature": "nospace",
                "parameter": "nospace",
                "property-declaration": "nospace",
                "variable-declaration": "nospace"
            }
        ],
        // "typeof-compare": true, redundant TS 2.2
        "unified-signatures": true,
        "use-default-type-parameter": true,
        "use-isnan": true,
        // TODO need to see if this affects type definitions
        "variable-name": [
            true,
            "ban-keywords",
            "check-format",
            "allow-leading-underscore",
            "allow-pascal-case",
            "allow-snake-case",
        ],
        "whitespace": [
            true,
            "check-branch",
            "check-decl",
            "check-module",
            "check-preblock",
            "check-operator",
            "check-rest-spread",
            "check-separator",
            "check-type",
            "check-typecast",
            "check-type-operator",
        ],
    }
}
