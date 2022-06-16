module.exports = (app) => {
  const db = app.get('db');
  const module = {};

  // Get all
  module.get = async (userId) => db.query(`
    SELECT settings.*
    FROM settings
    WHERE settings.user_id = $1
  `, [userId]);

  // Update
  module.update = async (field, value, userId) => {
    // Add a new setting row for the user if it doesn't exist.
    // Otherwise, update the setting for the right user.
    db.query(`
      INSERT INTO settings (${field}, user_id)
      VALUES($1, $2)
      ON CONFLICT (user_id) DO
      UPDATE SET ${field}=$1 WHERE settings.user_id=$2
    `, [value, userId]);
  };

  return module;
};
