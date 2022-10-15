const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {

  return species.filter((specie) => ids.find((id) => id === specie.id));
}

module.exports = getSpeciesByIds;
