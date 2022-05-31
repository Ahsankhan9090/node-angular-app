const Router = require('express-promise-router');
const Audits = require('../../components/audits');
const auth = require('../../components/auth/helpers');

module.exports = (app) => {
  const router = Router();
  const audits = Audits(app);

  // Get all
  router.get('/', auth.authenticate, async (req, res) => {
    const data = await audits.get();
    res.json(data);
  });

  return Router().use('/audits', router);
};
