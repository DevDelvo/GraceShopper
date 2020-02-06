const {Treehouse} = require('../db/models')

exports.list = async (req, res) => {
  try {
    let order = req.query.order ? req.query.order : 'ASC'
    let sortBy = req.query.sortBy ? req.query.sortBy : 'id'
    let limit = req.query.limit ? parseInt(req.query.limit) : 6

    const houses = await Treehouse.findAll({
      sort: [sortBy, order],
      limit
    })
    res.json(houses)
  } catch (err) {
    console.log(err)
  }
}
