// backend/routes/formFields.js
const express = require('express');
const router = express.Router();
const path = require('path');
const { readFormFile, writeToFile } = require('../utils/file');

const defaultFile = path.resolve(__dirname, '../db/forms/signup.json');

//TODO: Load form based on name
router.get('/:name', async (req, res, next) => {
    try {
      const filePath = path.resolve(__dirname, `../db/forms/${req.params.name}.json`);
      const formFields = await readFormFile(filePath);
      res.json({ formFields });
    } catch (error) {
      next(error);
    }
});

router.get('/', async (req, res, next) => {
  try {
    const formFields = await readFormFile(defaultFile);
    res.json({ formFields });
  } catch (error) {
    next(error);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newForm = req.body;
    const fileName = req.body.fileName;
    await writeToFile(fileName, newForm);
    res.status(201).json({ message: "saved" });
  } catch (error) {
    next(error);
  }
});


module.exports = router;
