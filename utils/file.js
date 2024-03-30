const fs = require('fs').promises;

async function readFormFile(path) {
    try {
      const data = await fs.readFile(path);
      return JSON.parse(data);
    } catch (error) {
        console.log(error)
      return [];
    }
  }

async function writeToFile(path, data) {
    await fs.writeFile(path, JSON.stringify(data));
  }

  module.exports = {
    readFormFile,
    writeToFile
  }