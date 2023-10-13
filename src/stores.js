import { ObjectId } from "mongodb";
import { db } from "./connectdb.js";

const storeDb = db.collection('stores');

const theStore = {
    city:'boston',
    name:'nike outlet',
    branch:'3'
}

export async function addStore(){
    const storeAdded = await storeDb.insertOne(theStore)
    console.log('Store added -->', storeAdded)
}

export async function getAllStores(){
    const storeList = await storeDb.find({}).toArray();
    console.table(storeList);
}

export async function getStoreById(){
    const storeId = new ObjectId('652960480b5406bfc8bfa59d')
const findStore = await storeDb.findOne({_id:storeId})
console.log(findStore)
}