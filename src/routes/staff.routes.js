const express = require('express');
const { getStaff } = require('../controllers/staff.controller');

const router = express.Router();

router.get('/', getStaff);

module.exports = router;
