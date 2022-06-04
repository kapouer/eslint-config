# eslint-config

## How to use

```bash
npm install --save-dev @kapouer/eslint-config
```

In package.json:

```json
"eslintConfig": {
 "extends": "@kapouer/eslint-config",
 "globals": {
  "HttpError": true
 },
 "overrides": [
  {
   "files": [
    "models/**",
    "resources/**",
    "routes/**",
    "app.js"
   ],
   "env": {
    "node": true,
    "es6": true
   }
  },
  {
   "files": [
    "public/js/**"
   ],
   "env": {
    "browser": true
   }
  }
 ]
}
```

It's a good idea to override files/env as they usually depend on the project.

## Using pnpm ?

Put these into your ~/.npmrc

```rc
public-hoist-pattern[]=@babel/*
public-hoist-pattern[]=eslint
public-hoist-pattern[]=eslint-*
public-hoist-pattern[]=@kapouer/no-return-in-loop
```
