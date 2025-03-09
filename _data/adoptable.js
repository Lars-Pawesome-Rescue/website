require("dotenv").config();

const contentful = require("contentful");
const client = contentful.createClient({
  host: process.env.CTFL_HOST,
  space: process.env.CTFL_SPACE,
  accessToken: process.env.CTFL_ACCESSTOKEN,
});

module.exports = function () {
  return client
    .getEntries({
      content_type: "adoptable",
    })
    .then(function (response) {
      const items = response.items.filter(function (item) {
        return item.fields.adoptable;
      });

      console.log(`Got ${items.length} adoptable items from Contentful`);
      return items;
    })
    .catch(console.error);
};