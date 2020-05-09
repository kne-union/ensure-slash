# ensureSlash
确保结尾斜线

```shell script
npm i @kne/ensure-slash
```

# 使用说明

```js
import ensureSlash from '@kne/ensure-slash';

console.log(ensureSlash('/a/b')); //=> /a/b
console.log(ensureSlash('/a/b/')); //=> /a/b

console.log(ensureSlash('/a/b',true)); //=> /a/b/
console.log(ensureSlash('/a/b/',true)); //=> /a/b/
```
