const path = require("path");

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
        path.dirname(require.resolve("rxjs-tslint")),
    ],
    rules: {
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
        "valid-jsdoc": true,
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
        "early-exit": true,
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
        "prefer-while": true,
        //rxjs-tslint-rules
        "rxjs-no-create": false,
        "rxjs-no-do": true,
        "rxjs-no-tap": true,
        "rxjs-no-unsafe-switchmap": {severity: "error"},
        "rxjs-no-internal": true,
        "rxjs-ban-observables": {severity: "error"},
        //rxjs-tslint
        "rxjs-collapse-imports": true,
        "rxjs-pipeable-operators-only": true,
        "rxjs-no-static-observable-methods": true,
        "rxjs-proper-imports": true,
        //sonar
        "parameters-max-number": [true, 8],
        //kushki
        "no-unsafe-any": false,
        curly: false,
        "chai-vague-errors": false,
        "variable-name": false,
        "no-submodule-imports": false,
        "match-default-export-name": false,
        "no-implicit-dependencies": false,
        "no-unnecessary-class": ["allow-empty-class", "allow-static-only"],
        "no-void-expression": ["ignore-arrow-function-shorthand"],
        "arrow-return-shorthand": [true, "multiline"],
        "function-name": false,
        "no-suspicious-comment": false,
        "no-import-side-effect": [
            true,
            {
                "ignore-module":
                    "(string.padstart|string.padend|reflect-metadata|source-map-support/register|rxjs-spy/add/operator/tag|rxjs/add/operator/map|rxjs/(\\w|/)+)$"
            }
        ]
    }
};
