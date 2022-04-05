const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();
router.use(express.json())

router.get('/', async (req, res, next) => {
  try {
    const products = await ProductModel.getAll();
    res.status(200).json({status: 'Ok', ListProducts: products});
  } catch (error) {
    res.status(500).json({message: 'Erro no servidor.', error})
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await ProductModel.getById(id);
    res.status(200).json({status: 'Ok', Product: product});
  } catch (error) {
    res.status(500).json({message: 'Erro no servidor.', error})
  }

});

router.post('/', async (req, res) => {
  try {
    const { name, brand } = req.body;
    const newProduct = await ProductModel.add(name, brand);
    res.status(201).json({status:'Created', Product: newProduct});
  } catch (error) {
    res.status(500).json({message: 'Erro no servidor.', error})
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const products = await ProductModel.exclude(id);
    res.status(200).json({status: 'Ok', Deleted: products});
  } catch (error) {
    res.status(500).json({message: 'Erro no servidor.', error})
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { name, brand } = req.body;
    const products = await ProductModel.update(id, name, brand);
    res.status(200).json({status: 'Ok', Updated: products});
  } catch (error) {
    res.status(500).json({message: 'Erro no servidor.', error})
  }
});

module.exports = router;