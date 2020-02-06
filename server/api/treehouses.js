const router = require('express').Router()
const {Treehouse} = require('../db/models')
const {list} = require('../controllers/treeHouseController.api.js')
router.get('/', list)

router.get('/:id', async (req, res, next) => {
  try {
    const treehouseById = await Treehouse.findByPk(req.params.id)
    res.json(treehouseById)
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router
