import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './config/db.js'
import productRoutes from './routes/products.routes.js'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json())
app.use(cors())

app.use('/api/products', productRoutes)

app.listen(PORT, () => {
    connectDB()
    console.log('server started app http://localhost:'+ PORT)
})

