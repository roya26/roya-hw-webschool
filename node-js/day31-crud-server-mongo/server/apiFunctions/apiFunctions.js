const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://roya:Behaslaha26@cluster0.jvy5q7o.mongodb.net/?retryWrites=true&w=majority";

async function read() {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect();
    const db = client.db("mira1")
    const collection = db.collection("col1")
    //read
    const readRes = await collection.find({}).toArray()
    console.log("readRes", readRes);
    client.close()

}

async function create(document) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect();
    const db = client.db("mira1")
    const collection = db.collection("col1")
    //CREATE
    await collection.insertOne({ name: "yishai" })
    await collection.insertMany([{ name: "roya" }, { name: "dani" }])
    client.close()
}

async function deleteUser(document) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect();
    const db = client.db("mira1")
    const collection = db.collection("col1")
    //DELETE
    await collection.deleteOne({ name: "yishai" })
    client.close()
}

async function update(document) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect();
    const db = client.db("mira1")
    const collection = db.collection("col1")
    //UPDATE
    await collection.updateOne({ name: "roya" }, { $set: { age: 33 } }),
    client.close()
}

module.exports = { read, deleteUser, create, update }


//query
//await collection.find({name:/yi/}).toArray