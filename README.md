# eslint-config

## How to use

```bash
npm install --save-dev @kapouer/eslint-config
```

Either approve postinstall script, or create a ts(js)config.json file that contains at least:

```json
{
  "compilerOptions": {
    "allowJs": true
  }
}
```


In eslint.config.(m)js:

```js
import getConfig from "@kapouer/eslint-config";
export default getConfig({ mocha: "test/*.js" });
```

