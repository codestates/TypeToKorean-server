const sample = require("../../data/sampleData");
const sample2 = require("../../data/dataToEnglish");

module.exports = {
  dataSh : {
    get: async (req, res) => {
        let sampleData = sample.shortSentence;
        res.status(200).send(sampleData);
    }
  },
  dataSh2 : {
    get: async (req, res) => {
      let sampleData = sample2.shortSentence;
      res.status(200).send(sampleData);
    }
  },
  dataLO : {
    get: async (req, res) => {
      let sampleData = sample.longSentence;
      res.status(200).send(sampleData);
    }
  }
};
