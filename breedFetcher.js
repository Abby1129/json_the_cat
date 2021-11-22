const request = require("request");

const url = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function (breedName, callback) {
  const userInput = url + breedName;
  request(userInput, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const parsedData = JSON.parse(body);
      if (parsedData.length === 0) {
        callback("Not found", null);
      } else {
        callback(null, parsedData[0].description);
      }
    } else {
      callback(error, null);
    }
  });
};

module.exports = fetchBreedDescription;
