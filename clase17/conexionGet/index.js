import dotenv from "dotenv"
import express from "express"
import { MongoClient, ServerApiVersion } from "mongodb"
dotenv.config()

const app = express()
const uri = process.env.MONGO_URI
const port = 3000

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

app.get(`/supermercado`, async (req, res) => {
    try {
        await client.connect()
        const db = client.db(`Supermercado`)
        const supermercado = db.collection(`Supermercado`)
        const lista = await supermercado.find({}).toArray()
        res.json({success: false, data: lista})
        console.log(`Te has conectado a la base de datos!`)
    } catch (error) {
        res.status(500).json({success: false, message: error.message})
    }finally{
        await client.close()
    }
})

app.listen(port, () =>{
    console.log(`URL: http://localhost:${port}/supermercado`)
})