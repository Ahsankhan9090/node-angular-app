exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('settings', {
    id: 'id',
    daily_email_updates: {
      type: 'boolean',
    },
    // this is a new setting
    audit_table_default_rows: {
      type: 'integer',
    },
    user_id: {
      type: 'integer',
      unique: true,
    },
  });

  pgm.dropColumns('users', ['daily_email_updates']);
};

exports.down = (pgm) => {
};
