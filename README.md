# PostCSS Carnival [![Build Status][ci-img]][ci]

[PostCSS] plugin Randomize all colors in your CSS.

[PostCSS]: https://github.com/postcss/postcss
[ci-img]:  https://travis-ci.org/persocon/postcss-carnival.svg
[ci]:      https://travis-ci.org/persocon/postcss-carnival

```css
.foo {
  color: red;
}
.bar {
  color: #FFFFFF;
}
.xyz {
  color: rgba(255, 255, 255, 0.5);
}
```

```css
.foo {
  color: rgb(RANDOM, RANDOM, RANDOM);
}
.bar {
  color: rgb(RANDOM, RANDOM, RANDOM);
}
.xyz {
  color: rgb(RANDOM, RANDOM, RANDOM);
}
```

## Usage

```js
postcss([ require('postcss-carnival') ])
```

See [PostCSS] docs for examples for your environment.
