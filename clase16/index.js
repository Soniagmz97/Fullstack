import dotenv from "dotenv"
import { MongoClient, ServerApiVersion } from "mongodb"
dotenv.config()

const uri = ProcessingInstruction.env.MONGODB_URI

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true
    }
})

const run = async () =>{
    try {
        await client.connect()
        await client.db(`admin`).command({ping:1})
        console.log(`Pinged your desployment. You succesfully connected to MongoDB`)

        const dbName = `Cafeteria_JS`
        const adminDb = client.db(`admin`)
        const dbList = await adminDb.admin().listDatabases()
        const exist = dbList.databases.some((db) => db.name === dbName)
        if (exist){
            console.log(`La base de datos ${dbName} existe`)
        }else{
            console.log(`La base de datos ${dbName} no existe`)
        }
    } catch (error) {
        console.error(`error`)
    }finally{
        await client.close()
    }
}

run()