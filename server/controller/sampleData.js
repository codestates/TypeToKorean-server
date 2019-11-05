const sample = require("../../data/sampleData");

module.exports = {
  data : {
    get: async (req, res) => {
        let sampleData = sample.sentence;
        res.status(200).send(sampleData);
    }
  }
};
