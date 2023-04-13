import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import commentRoutes from './routes/commentRoutes.js'

dotenv.config()

/**
 * Init Express
 */

const app = express()

/**
 * Setup Middleware
 */

app.use(cors())
app.use(express.json())

/**
 * Setup routes
 */

app.use('/category', categoryRoutes)
app.use('/product', productRoutes)
app.use('/comment', commentRoutes)

/**
 * Listening for request
 */

app.listen(process.env.PORT, () => {
    console.log('Server is running on port', process.env.PORT)
})



