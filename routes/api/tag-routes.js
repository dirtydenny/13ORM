const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
// The `/api/tags` endpoint

// Find all tags.
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
 // find a single tag by its `id`.
router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id,
    },
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
//Create a new tag by it "id" value.
router.post('/', (req, res) => {
  Tag.create(req.body)
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(400).json(err));
});
// update tag's name by its `id` value.
router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(400).json(err));
});
// delete tag by its `id` value.
router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((tag) => res.status(200).json(tag))
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
