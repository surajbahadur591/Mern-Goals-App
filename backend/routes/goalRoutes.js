const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  UpdateGoals,
  DeleteGoals,
} = require("../controllers/goalController");

router.get("/", getGoals);

router.post("/", setGoals);

router.put("/:id", UpdateGoals);

router.delete("/:id", DeleteGoals);

module.exports = router;
