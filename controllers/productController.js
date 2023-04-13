import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Create product
export const createProduct = async (req, res) => {
    const { name, price, features, category } = req.body

    if(!name || !price || !features) {
        return res.status(400).json({ error: 'All fields have to be filled' })
    }

    const product = await prisma.product.create({
        data: {
            name,
            price,
            features,
            category
        }
    })

    res.status(200).json(product)
}

// Get all products
export const getProducts = async (req, res) => {
    const product = await prisma.product.findMany()

    res.status(200).json(product)
}

// Get single product and all the associate comments
export const getProduct = async (req, res) => {
    const { id } = req.params

    if(!id) {
        return res.status(400).json({ error: 'No such id' })
    }

    const product = await prisma.product.findUnique({
        where: {
            id
        },
        include: {
            comments: {
                select: {
                    content: true
                }
            }
        }
    })

    res.status(200).json(product)
}

