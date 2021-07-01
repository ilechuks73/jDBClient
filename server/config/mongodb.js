const mongodb = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "usermanagementsysdb";

const client = new mongodb.MongoClient(url, { useUnifiedTopology: true });

client.connect(async(err, client) => {
 if (err) {
  console.log("error");
 }

//  const list = client.db(dbName).listCollections().toArray().then(data=> console.log(data));

const list = await client.db(dbName).listCollections().toArray()
console.log(list)
 //setTimeout(()=>console.log(list), 3000)
 // List all the available databases

});
