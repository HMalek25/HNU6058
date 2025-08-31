require('dotenv').config();
const EleventyFetch = require("@11ty/eleventy-fetch");

async function getTopStories() {
    const apiKey = process.env.ZOTERO_API_KEY;
    const groupID = '322999';
    const url = `https://api.zotero.org/groups/${groupID}/items?key=${apiKey}`;
    const response = EleventyFetch(url, {
        duration: "id",
        type: "json"
    });
    const articles = response
    return articles;
}

module.exports = getTopStories;