const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', (req, res) => {
  Category.findAll({
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
  Category.findOne({
    where: {
      id: req.params.id
    },
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

router.post('/', (req, res) => {
  Category.create(req.body)
  .then(categoryData => {
    res.json(categoryData)
  })
  .catch(err => {
    res.json(err)
  })
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
  }
  })
  .then(categoryData => {
    res.json(categoryData)
  })
  .catch(err => {
    res.json(err)
  })
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(categoryData => {
    res.json(categoryData)
})
.catch(err => {
  res.json(err)
})
});

module.exports = router;