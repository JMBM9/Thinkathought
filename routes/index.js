const router = require('express').Router();
// Import all of the API routes from /api/index.js (no need for index.js though since it's implied)
const apiRoutes = require('./api');

//STARTING ROUTE WITH /API
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>  ERROR</h1>');
});

module.exports = router;