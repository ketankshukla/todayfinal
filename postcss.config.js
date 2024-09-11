module.exports = {
  plugins: [
    require('postcss-strip-inline-comments')(),  // Removes comments and blank lines
    // Custom plugin to remove all blank lines
    function (css) {
      css.walkDecls((decl) => {
        decl.raws.before = decl.raws.before && decl.raws.before.replace(/(\r\n|\n|\r){2,}/g, '\n'); // Removes blank lines within rule blocks
      });
    }
  ]
};
