const request = require("request");

const url = "https://api.thecatapi.com/v1/breeds/search?q=";
const breedName = process.argv[2];

request(url + breedName, function (error, response, body) {
  if (!error && response.statusCode === 200) {
    const parsedData = JSON.parse(body);
    if (parsedData.length > 0) {
      console.log(parsedData[0].description);
    } else {
      console.log("No such breed exists.. try again!");
    }
  } else {
    console.log(`error: ${error}`);
  }
});
