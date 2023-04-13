import express from 'express'
import { createComment } from '../controllers/commentController.js'

// Init Express router
const router = express.Router()

// Setup the routes
router.post('/', createComment)

/**
 * Export the routes
 */

export default router