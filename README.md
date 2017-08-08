# mat-nei

## Installation

```sh
npm install --save-dev mat-nei
```

## Basic Usage

```javascript
var mat   = require('mat')
var nei = require('mat-nei')

mat.task('nei', function() {
  mat.url([/api/])
    .use(nei({
      key: 'b9386da5dd11df7bd4ca54f97afe9060'
    }))
})
```
## Options

`key` - 从[https://nei.netease.com](https://nei.netease.com)上获取具体某个项目的 `key` 值。
