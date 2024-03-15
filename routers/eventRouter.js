const express = require("express");
const router = express.Router();
const {
  getEvents,
  addEvent,
  getEvent,
  deleteEvent,
  updateEvent,
} = require("../controllers/eventController");
const requireAuth = require("../middleware/requireAuth");

// require auth for all workout routes
router.use(requireAuth);

// GET all events
router.get("/", getEvents);

// POST a new event
router.post("/", addEvent);

// GET a single event
router.get("/:id", getEvent);

// DELETE a event
router.delete("/:id", deleteEvent);

// Update event using PUT
router.put("/:id", updateEvent);

module.exports = router;
