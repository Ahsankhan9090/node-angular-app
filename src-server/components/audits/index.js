module.exports = (app) => {
  const db = app.get('db');
  const module = {};

  // Get all
  module.get = async () => db.query(`
    SELECT *
    FROM audits
  `);

  return module;
};
