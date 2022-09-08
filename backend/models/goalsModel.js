const mongoose = require("mongoose");


// we have to create schema - Schema defines the Structure of data
const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "please add a text"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

// this goal schema will be imported where we will create goals i.e goalController 

module.exports = mongoose.model("Goal", goalSchema);
