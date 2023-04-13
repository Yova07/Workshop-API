import express from 'express'
import { createProduct, getProduct, getProducts } from '../controllers/productController.js'

// Init Express router
const router = express.Router()

// Setup the routes
router.post('/', createProduct)
router.get('/', getProducts)
router.get('/:id', getProduct)

/**
 * Export the routes
 */

export default router