"use strict"

import dotenv from "dotenv"
import { MongoClient, ServerApiVersion } from "mongodb"
import express, { json } from "express"

dotenv.config()

// Hace que nuestro entorno este listo para trabajar
const app = express()

const port = 3000

const uri = process.env.MONGO_URI

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

app.get(`/menu`, async (req, res) => {
    try {
        await client.connect()
        const database = client.db(`Cafeteria_JS`)
        const coleccion = database.collection(`Menu`)
        const list = await coleccion.find({}).toArray()
        res.json({success: true, data: list})
    } catch (error) {
        res.status(500).json({success: false, error: error.message})
    }finally{
        await client.close()
    }
})

app.post(`/menu`, express.json(), async (req, res) => {
    try {
        await client.connect()
        const database = client.db(`Cafeteria_JS`)
        const coleccion = database.collection(`Menu`)
        const result = await coleccion.insertOne(req.body)
        res.json({success: true, insertedId: result.insertedId})
    } catch (error) {
        res.status(500).json({success: false, error: error.message})
    }finally{
        await client.close()
    }
})

//Endpoint de PUT - Actualizar datos
app.put('/menu/:id',express.json(), async(req, res)=> {
    try {
        await client.connect();
        const database = client.db("Cafeteria_JS");
        const coleccion = database.collection("Menu")
        const result = await coleccion.updateOne(
            {_id: new ObjectId(req.params.id)},
            { $set: req.body}
        )

        if(result.matchedCount === 0){
            res.status(404).json({success:false, message: "Product not found"})
        }else{
            res.json({success:true, message: "Product updated", modifiedCount: result.modifiedCount})
        }

    } catch (error) {
        res.status(500).json({success: false, error: error.message})
    }finally{
         await client.close();
    }
})

app.listen(port, () =>{
    console.log(`Te has comnectado a la base de datos.\nPuedes abrir el servidor en la url: http://localhost:${port}/menu`)
})