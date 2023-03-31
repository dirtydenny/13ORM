const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
// The `/api/tags` endpoint

// find all tags
router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
    .then((tags) => res.json(tags))
    .catch((err) => res.status(400).json(err));   
});
 // find a single tag by its `id`
router.get('/:id', (req, res) => {
  Tag.findOne({
    include: [
      {
        model: Product,
        through: ProductTag,
      },
    ],
  })
    .then((tag) => res.json(tag))
    .catch((err) => res.status(400).json(err));
});

router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((tag) => res.json(tag))
    .catch((err) => res.status(400).json(err));
});

// update tag's name by its `id` value
router.put('/:id', (req, res) => {
  Tag.put()
});

router.delete('/:id', (req, res) => {
  Tag.destroy// delete on tag by its `id` value
});

module.exports = router;
