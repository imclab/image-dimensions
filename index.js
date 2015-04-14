'use strict'

const supported = window.FileReader
  && typeof FileReader.prototype.readAsDataURL === 'function'

export default function dimensions(file) {
  if (!supported) return Promise.resolve()

  return new Promise(function (resolve, reject) {
    const img = document.createElement('img')
    const reader = new FileReader()

    img.addEventListener('load', function () {
      resolve({
        width: img.naturalWidth || img.width,
        height: img.naturalHeight || img.height,
      })
    })

    img.addEventListener('error', function () {
      reject(new Error('something went wrong with loading the image'))
    })

    reader.addEventListener('load', function () {
      img.src = reader.result
    })

    reader.addEventListener('error', function () {
      reject(new Error('something went wrong with loading the file'))
    })

    reader.readAsDataURL(file)
  })
}
