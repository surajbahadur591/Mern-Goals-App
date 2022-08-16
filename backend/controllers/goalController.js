const asyncHandler = require('express-async-handler')

// @desc   Get goals 
// @route  GET /api/goals 
// @access Private 

const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get Goals from controller" });
  // console.log(req.body)
})

// @desc   Set goals 
// @route  POST /api/goals 
// @access Private 
const setGoals = asyncHandler(async(req, res) => {
  if(!req.body.message){ 
    res.status(400)
    throw new Error('Please add goals')
  }
  console.log(req.body)
  res.status(200).json({ message: "Set Goal from Controller" });
})

// @desc   Update goals 
// @route  PUT /api/goals/1234
// @access Private 
const UpdateGoals = asyncHandler( async (req, res) => {
  res
    .status(200)
    .json({ message: `Update Goals from controller ${req.params.id}` });
})

// @desc   Delete goals 
// @route  DELETE /api/goals/1234
// @access Private 
const DeleteGoals = asyncHandler( async(req, res) => {
  res
    .status(200)
    .json({ message: `Delete Goals from controller ${req.params.id}` });
})

module.exports = {
  getGoals,
  setGoals,
  UpdateGoals,
  DeleteGoals,
};
