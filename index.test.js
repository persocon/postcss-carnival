var postcss = require('postcss')

var plugin = require('./')

function run (input, output, opts) {
  return postcss([plugin(opts)]).process(input).then(function (result) {
    expect(result.css).not.toEqual(output)
    expect(result.warnings()).toHaveLength(0)
  })
}

it('does something', function () {
  return run('a{ color: red; }', 'a { color: red; }', { })
})
