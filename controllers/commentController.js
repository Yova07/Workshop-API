import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Create comment
export const createComment = async (req, res) => {
    const { content, id } = req.body

    if(!content) {
        return res.status(400).json({ error: 'You have to specify a content' })
    }

    const comment = await prisma.comment.create({
        data: {
            content,
            productId: id
        }
    })

    res.status(200).json(comment)
}