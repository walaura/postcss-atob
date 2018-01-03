const postcss = require('postcss');
const reduceFunctionCall = require('reduce-function-call');

module.exports = postcss.plugin('postcss-atob', function (opts) {
  opts = opts || {};

  return (css, result) => {
    css.walkDecls((decl) => {

      decl.value = reduceFunctionCall(decl.value, 'btoa', (body) =>
        new Buffer(body, 'ascii').toString('base64')
      )
      decl.value = reduceFunctionCall(decl.value, 'atob', (body) =>
        new Buffer(body, 'base64').toString('ascii')
      )

    })
  };

});
