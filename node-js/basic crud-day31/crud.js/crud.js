const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://roya:Behaslaha26@cluster0.jvy5q7o.mongodb.net/?retryWrites=true&w=majority";

async function main() {
  try {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect();
    const db = client.db("mira1")
    const collection = db.collection("col1")
    //crud operations
    //CREATE
    // await collection.insertOne({name:"yishai"})
    //await collection.insertMany([{name:"roya"},{name:"dani"},{name:"itamar"},{name:"yinon"},{name:"yishai"}])


    //READ
    // const readRes = await collection.find({name:"roya"}).toArray()
    //console.log("readRes",readRes);

    //DELETE
    //await collection.deleteMany({name:"yishai"})

    //UPDATE
    //await collection.updateOne({name:"roya"},{$set:{age:44}}),

    //query: name includes "yi"
    //await collection.find({name:/yi/}).toArray

    //query:name includes"yi" and age is greater or equal to 32
    //const res = await collection.find({ name: /yi/, age: { $gte: 32 } })

//query:name in array
//const res =await collection.find({"name":{$in:["yishai","yair"]}}).toArray()
 // one of the conditaions
 const res =await collection.find({$or:[{name:/yi/,age:{$gt:15}}]}).toArray()
    await client.close()
  } catch (error) {
    console.log("the error is:", error);
  }
}

main()