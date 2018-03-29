Webpack 4 Tree shaking 优化效果
==============================

## 优化前

![优化前](./asset/before.png)

## 优化后

![优化后](./asset/after.png)

## 优化了啥

在 [package.json](./package.json) 中添加了：

```json
"sideEffects": false,
```