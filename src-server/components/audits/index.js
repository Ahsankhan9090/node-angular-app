module.exports = (app) => {
  const db = app.get('db');
  const module = {};

  // Get all
  module.get = async (filters) => db.query(`
    SELECT *
    FROM audits
    WHERE message ILIKE '%${filters.message}%'
  `);

  return module;
};
