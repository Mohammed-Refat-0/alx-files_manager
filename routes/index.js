// router

const express = require('express');
const AppController = require('../controllers/AppController');

const router = express.Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', AppController.postNew);
router.get('/connect', AppController.getConnect);
router.get('/disconnect', AppController.getDisconnect);
router.get('/users/me', AppController.getMe);

export default router;
