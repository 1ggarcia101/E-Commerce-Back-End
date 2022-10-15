const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');


router.get('/', (req, res) => {
  Tag.findAll({
    include: [
      {model: Product}
    ]
  })
  .then(categoryData => {
    res.json(categoryData)
  })
  .catch(err => {
    res.json(err)
  })
});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where: {
      id: req.params.id
    },
    include: [
      {model: Product},
    ]
  })
  .then(productData => {
    res.json(productData)
  })
  .catch(err => {
    res.json(err)
  })
});

router.post('/', (req, res) => {
  Tag.create(req.body)
  .then(tagData => {
    res.json(tagData)
  })
  .catch(err => {
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
  }
  })
  .then(tagData => {
    res.json(tagData)
  })
  .catch(err => {
    res.json(err)
  })
});

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(tagData => {
    res.json(tagData)
})
.catch(err => {
  res.json(err)
})
});

module.exports = router;