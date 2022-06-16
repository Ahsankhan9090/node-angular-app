const _ = require('lodash');

module.exports = (app) => {
  const db = app.get('db');
  const module = {};

  // Get all
  module.get = async (filters) => {
    let query = 'SELECT * FROM audits';

    const filterParts = [];
    if (filters.message) {
      filterParts.push(`message ILIKE '%${filters.message}%'`);
    } else {
      filterParts.push(`status='${filters.status}'`);
    }

    if (!_.isEmpty(filterParts)) {
      query += `\nWHERE ${filterParts.join(' AND ')}`;
    }

    console.log('filterParts: ', filterParts);
    console.log('query: ', query);

    return db.query(query);
  };

  return module;
};
