const express = require('express');
const CustomerRoute = require('./user.route');
const AuthRoute = require('./auth.route');

const router = express.Router();

router.get('/status', (req, res) => res.send('Server is up'));
router.use('/auth', AuthRoute);
router.use('/users', CustomerRoute);
router.use((req, res) => {
    res.status(404).json({'message': 'Page Not Found'});
});

module.exports = router;