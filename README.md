
# image-dimensions

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]
[![Gittip][gittip-image]][gittip-url]

Get the dimensions of an image blob.

```js
import getDimensions from 'image-dimensions'

const file = document.query('input[type="file"]')

getDimensions(file).then(function (size) {
  console.log(size.width)
  console.log(size.height)
})
```

[npm-image]: https://img.shields.io/npm/v/image-dimensions.svg?style=flat-square
[npm-url]: https://npmjs.org/package/image-dimensions
[github-tag]: http://img.shields.io/github/tag/mgmtio/image-dimensions.svg?style=flat-square
[github-url]: https://github.com/mgmtio/image-dimensions/tags
[travis-image]: https://img.shields.io/travis/mgmtio/image-dimensions.svg?style=flat-square
[travis-url]: https://travis-ci.org/mgmtio/image-dimensions
[coveralls-image]: https://img.shields.io/coveralls/mgmtio/image-dimensions.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/mgmtio/image-dimensions
[david-image]: http://img.shields.io/david/mgmtio/image-dimensions.svg?style=flat-square
[david-url]: https://david-dm.org/mgmtio/image-dimensions
[license-image]: http://img.shields.io/npm/l/image-dimensions.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/image-dimensions.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/image-dimensions
[gittip-image]: https://img.shields.io/gratipay/jonathanong.svg?style=flat-square
[gittip-url]: https://gratipay.com/jonathanong/
