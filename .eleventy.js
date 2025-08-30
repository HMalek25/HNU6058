module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/css/");
    
    eleventyConfig.addWatchTarget("src/css/")
  
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: 'site',
        },
    templateFormats : ['md', 'njk', 'html'],
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
        };
    }