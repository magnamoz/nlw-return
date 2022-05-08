import express from 'express'
import { NodemailerMailerAdapter } from './adapters/nodemailer/nodemailerMailAdapter';


import { PrismaFeedbacksRepository } from './repositories/prisma/prismaFeedbacksRepository';
import { SubmitFeedbackUserCase } from './useCases/submitFeedback-useCase';
 
export const routes = express.Router()


routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body

    const prismaFeedbackRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailerAdapter()

    const submitFeedbackUserCase = new SubmitFeedbackUserCase(
        prismaFeedbackRepository,
        nodemailerMailAdapter
    )

    await submitFeedbackUserCase.execute({type, comment, screenshot})

    return res.status(201).send()
})
