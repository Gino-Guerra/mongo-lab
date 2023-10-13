import { ObjectId } from "mongodb";
import { db } from "./connectdb.js";

const clotheDb = db.collection('clothes');

const theShirt = {
    size: 's',
    color:'green', 
    Style:'crew-neck',
    sleveLength:'short',
    brand:'nike'

};

export async function addShirt(){
    const shirtAdded = await clotheDb.insertOne(theShirt);
    console.log('Shirt added -->', shirtAdded)
};

export async function getAllShirts(){
    const shirtList = await clotheDb.find({}).toArray();
    console.table(shirtList);
}


export async function updateShirt(){
    const cleanId = new ObjectId ('65295c0dd9961850fa8c4986')
   const dataToUpdate = {size: 'L'}
    const shirtUpdated = await clotheDb.findOneAndUpdate({_id: cleanId}, {$set: dataToUpdate})
}