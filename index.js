var postcss = require('postcss')

module.exports = postcss.plugin('postcss-carnival', function () {
  return function (root) {
    root.walkRules(function (rule) {
      rule.walkDecls(/color/, function (decl) {
        decl.value = 'rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')' // eslint-disable-line
        return decl
      })
    })
  }
})
