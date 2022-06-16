process.env.NODE_ENV = 'test';

const request = require('supertest');
const migrate = require('../../../scripts/db-migrate');
const seed = require('../../../scripts/db-seed');
const App = require('../../app');

describe('[GET /api/audits]', () => {
  let app = {};

  // // Run migrations, clear DB, then seeding
  beforeAll(async () => {
    await migrate();
    const { db } = await seed.openDB();
    await seed.clearDB(db);
    await seed.seed(db);
    await seed.closeDB(db);
  }, 30000);

  // Wait for the app to load
  beforeAll(async () => {
    app = await App();
  }, 30000);

  it('responds 200', () => (
    request(app)
      .post('/api/audits')
      .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiaWF0IjoxNjU0MDI0NTM4fQ.nPQpnVQN3JGn-be2T4Mua0EWSr0ob_rhJdzLjb__ht4')
      .expect(200)
  ));
});
