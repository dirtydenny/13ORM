const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories and their products
router.get('/', (req, res) => {
  Category.findAll({
    include: [Product],    
  })
      .then((categories) => res.json(categories))
      .catch((err) => res.status(500).json(err));
});
  //find one category by ID, include its products
router.get('/:id', (req, res) => {
  Category.findOne(
    {
      where: {
        id: req.params.id,
      },
      include: [Product],
    })
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json(err));
 });
// create a new category
router.post('/', (req, res) => {
  Category.create(req.body)
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json(err));
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
        id: req.params.id,
      },
  })
  // update a category by its `id` value
      .then((category) => res.json(category))
      .catch((err) => res.status(400).json(err));
});
// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((category) => res.json(category))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
