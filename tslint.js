const path = require("path");
const fs = require("fs");

module.exports = {
    extends: [
        "tslint:latest",
        "vrsource-tslint-rules",
        "tslint-consistent-codestyle",
        "tslint-eslint-rules",
        "tslint-microsoft-contrib",
        "tslint-sonarts",
        "rxjs-tslint-rules",
        "tslint-no-unused-expression-chai",
        "tslint-config-prettier"
    ],
    rulesDirectory: [
        path.join(path.dirname(require.resolve("vrsource-tslint-rules")), "rules"),
        path.dirname(require.resolve("rxjs-tslint"))
    ],
    rules: {
        //tslint-microsoft-contrib
        "underscore-consistent-invocation": [true, {style: "static"}],
        "non-literal-fs-path": false,
        "no-null-keyword": false,
        //vrsource-tslint-rules
        "conditional-expression-parens": true,
        "ext-variable-name": [
            true,
            ["class", "pascal"],
            ["interface", "pascal", {regex: "^I.*$"}],
            ["parameter", "camel", "allow-leading-underscore"],
            ["property", "static", "camel", {regex: "^s.*$"}],
            ["property", "private", "camel", "require-leading-underscore"],
            ["property", "protected", "camel", "allow-leading-underscore"],
            ["variable", "local", "snake"],
            ["variable", "const", "upper"],
            ["variable", "camel", {regex: "^g.*$"}],
            ["method", "private", "camel", "require-leading-underscore"],
            ["method", "protected", "camel", "allow-leading-underscore"],
            ["function", "camel"],
            ["default", "camel"]
        ],
        "literal-spacing": [
            true,
            {
                array: ["always"],
                object: ["never"],
                import: ["always"]
            }
        ],
        //tslint-eslint-rules
        "no-constant-condition": true,
        "no-control-regex": true,
        "no-duplicate-case": true,
        "no-empty-character-class": true,
        "no-ex-assign": true,
        "no-extra-boolean-cast": true,
        "no-extra-semi": true,
        "no-inner-declarations": true,
        "no-invalid-regexp": true,
        "no-irregular-whitespace": true,
        "no-regex-spaces": true,
        "no-sparse-arrays": true,
        "no-unexpected-multiline": true,
        "valid-jsdoc": [true],
        "valid-typeof": true,
        "no-multi-spaces": true,
        "handle-callback-err": true,
        "brace-style": true,
        "ter-no-proto": true,
        "ter-no-script-url": true,
        "ter-no-self-compare": true,
        "ter-newline-after-var": [true, "always"],
        //tslint-consistent-codestyle
        "const-parameters": true,
        "early-exit": [true, { "ignore-constructor": true }],
        "ext-curly": true,
        "no-as-type-assertion": true,
        "no-accessor-recursion": true,
        "no-collapsible-if": true,
        "no-else-after-return": [true, "allow-else-if"],
        "no-return-undefined": true,
        "no-static-this": true,
        "no-unnecessary-else": true,
        "no-unused": true,
        "no-var-before-return": true,
        "object-shorthand-properties-first": true,
        "parameter-properties": true,
        "prefer-const-enum": true,
        //rxjs-tslint-rules
        "rxjs-no-create": false,
        "rxjs-no-do": true,
        "rxjs-no-tap": true,
        "rxjs-no-unsafe-switchmap": {severity: "error"},
        "rxjs-no-internal": true,
        "rxjs-ban-observables": {severity: "error"},
        "rxjs-no-unsafe-first": true,
        "rxjs-collapse-imports": true,
        "rxjs-pipeable-operators-only": true,
        "rxjs-no-static-observable-methods": true,
        "rxjs-proper-imports": true,
        "rxjs-prefer-observer": true,
        "rxjs-no-nested-subscribe": true,
        "rxjs-prefer-async-pipe": true,
        "rxjs-no-subclass": { "severity": "error" },
        "rxjs-no-ignored-notifier": true,
        "rxjs-no-ignored-replay-buffer": true,
        //sonar
        "parameters-max-number": [true, 10],
        "no-big-function": false,
        //kushki
        "no-unsafe-any": false,
        curly: false,
        "chai-vague-errors": false,
        "variable-name": false,
        "no-submodule-imports": false,
        "match-default-export-name": false,
        "export-name": false,
        "no-implicit-dependencies": [
            true,
            "dev",
            ['@sendgrid/helpers'].concat(Object.keys(
                JSON.parse(
                    fs
                        .readFileSync(path.resolve(`${process.cwd()}/tsconfig.json`))
                        .toString()
                ).compilerOptions.paths
            ).map(path => {
                const index = path.lastIndexOf("/");
                if (index !== -1) return path.substr(0, index);
                return path;
            }))
        ],
        "no-unnecessary-class": ["allow-empty-class", "allow-static-only"],
        "no-void-expression": ["ignore-arrow-function-shorthand"],
        "arrow-return-shorthand": [true, "multiline"],
        "function-name": false,
        "no-suspicious-comment": false,
        "file-name-casing": [true, "pascal-case"],
        "switch-final-break": [true, "always"],
        "prefer-while": true,
        "comment-format": [
            true,
            "check-space",
            "check-uppercase",
            {"ignore-words": ["istanbul", "prettier-ignore"]}
        ],
        "no-empty": true,
        "promise-function-async": true,
        "member-ordering": [
            true,
            {
                order: [
                    "public-static-field",
                    "public-instance-field",
                    "private-static-field",
                    "private-instance-field",
                    "public-constructor",
                    "private-constructor",
                    "public-instance-method",
                    "protected-instance-method",
                    "private-instance-method"
                ]
            }
        ],
        "no-import-side-effect": [
            true,
            {
                "ignore-module":
                    "(string.padstart|string.padend|reflect-metadata|source-map-support/register|@kushki/pidcrypt/(\\\\w|/)+))$"
            }
        ],
        "max-func-body-length": [
            true,
            {
                "func-body-length": 100,
                "func-expression-body-length": 10,
                "arrow-body-length": 75,
                "method-body-length": 150,
                "ctor-body-length": 50,
                "ignore-comments": true,
                "ignore-parameters-to-function-regex":
                    "^describe|it|beforeEach|afterEach|before|after$"
            }
        ]
    }
};
