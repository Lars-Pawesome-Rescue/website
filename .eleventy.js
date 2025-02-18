module.exports = function(eleventyConfig) {
    // Copy the `img/` directory
    eleventyConfig.addPassthroughCopy("public/images");
  
    return {
      passthroughFileCopy: true
    };
  };