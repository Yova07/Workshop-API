import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Create category
export const createCategory = async (req ,res) => {
    const { name } = req.body

    if(!name) {
        return res.status(400).json({ error: 'You have to specify a name' })
    }

    const category = await prisma.category.create({
        data: {
            name
        }
    })

    res.status(200).json(category)
}

// Get all categories
export const getCategories = async (req, res) => {
    const categories = await prisma.category.findMany()

    res.status(200).json(categories)
}

// Get single category and the associate products
export const getCategory = async (req, res) => {
    const { categoryName } = req.params

    if(!categoryName) {
        return res.status(400).json({ error: 'You have to specify a category' })
    }

    const category = await prisma.category.findUnique({
        where: {
            name: categoryName
        },
        include: {
            products: true
        }
    })

    res.status(200).json(category)
}