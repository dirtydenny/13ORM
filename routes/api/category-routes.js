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

router.get('/:id', (req, res) => {
  Category.findOne(
    {
      where: {
        id: req.params.id,
      },
      include: [Product],
    })
      .then((categories) => res.json(categories))
      .catch((err) => res.status(500).json(err));
  
  
    // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
      .then((categories) => res.json(categories))
      .catch((err) => res.status(500).json(err));
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

      .then((categories) => res.json(categories))
      .catch((err) => res.status(500).json(err));
});

module.exports = router;
