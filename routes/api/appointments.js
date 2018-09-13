const express = require("express");
const router = express.Router();

// @route   GET api/appointments/test
// @desc    Tests the appointments route
// @access  Public
router.get("/test", (req, res) => res.json({ msg: "Appointments works!" }));

module.exports = router;
