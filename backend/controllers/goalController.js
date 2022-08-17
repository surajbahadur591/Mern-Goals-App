const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalsModel')

// @desc   Get goals 
// @route  GET /api/goals 
// @access Private 

const getGoals = asyncHandler(async (req, res) => {
  
  // console.log(req.body)

  const goals = await Goal.find()
  res.status(200).json(goals);

})

// @desc   Set goals 
// @route  POST /api/goals 
// @access Private 
const setGoals = asyncHandler(async(req, res) => {
  if(!req.body.text){ 
    res.status(400)
    throw new Error('Please add goals')
  }

  const goal = await Goal.create({
    text : req.body.text
  })
  console.log(req.body)
  res.status(200).json(goal);
})

// @desc   Update goals 
// @route  PUT /api/goals/1234
// @access Private 
const UpdateGoals = asyncHandler( async (req, res) => {

  const goaltoUpdate = await Goal.findById(req.params.id)

  if(!goaltoUpdate){
    res.status(400)
    throw new Error ('No Goal Found')
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new : true,
  })
  res
    .status(200)
    .json(updatedGoal);
})

// @desc   Delete goals 
// @route  DELETE /api/goals/1234
// @access Private 
const DeleteGoals = asyncHandler( async(req, res) => {


  const goaltoDelete = await Goal.findById(req.params.id)

  if(!goaltoDelete){
    res.status(400)
    throw new Error ('No Goal Found')
  }

  await goaltoDelete.remove()

  res
    .status(200)
    .json({ id : req.params.id });
})

module.exports = {
  getGoals,
  setGoals,
  UpdateGoals,
  DeleteGoals,
};
