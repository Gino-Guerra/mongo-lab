import { closeClient } from "./src/connectdb.js";
import { addShirt, getAllShirts, updateShirt } from "./src/clothes.js";
import { addStore, getAllStores, getStoreById } from "./src/stores.js";


//await addShirt();

//await updateShirt();
//await getAllShirts();
//await addStore();
//await getAllStores();
await getStoreById();
closeClient();