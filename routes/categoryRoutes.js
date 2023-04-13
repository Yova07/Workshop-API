import express from 'express'
import { createCategory, getCategories, getCategory } from '../controllers/categoryController.js'

// Init Express router
const router = express.Router()

// Setup the routes
router.post('/', createCategory)
router.get('/', getCategories)
router.get('/:categoryName', getCategory)

/**
 * Export the routes
 */

export default router