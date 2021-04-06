// 1. CSV to JSON

// **Sort by price** and **transforms** those collection into object within an array like this format:

// CSV file Path
const csvPath = "./data.csv";

async function csvToJSON(path) {
  // 3rd party library
  const csvtojson = require("csvtojson");
  let jsonData, price, commaPrice;
  // Parse CSV to JSON
  jsonData = await csvtojson().fromFile(path);
  // Sort Price by lowest to highest
  jsonData = jsonData.sort((a, b) => a.PRICE - b.PRICE);
  // Add currency to price
  for (let i = 0; i < jsonData.length; i++) {
    price = jsonData[i].PRICE;
    commaPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    jsonData[i].PRICE = "RP" + commaPrice;
  }
  console.log(jsonData);
}
csvToJSON(csvPath);
