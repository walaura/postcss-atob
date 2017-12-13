# PostCSS Atob

[PostCSS] plugin to encode/decode b64.

[PostCSS]: https://github.com/postcss/postcss

```

//input
.foo {
    color: atob("cmVk")
}

//output
.foo {
  color: red
}
```

## Usage

```js
postcss([ require('postcss-atob') ])
```

See [PostCSS] docs for examples for your environment.
