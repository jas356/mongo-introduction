
import {client, fruitCollection } from '../mongoConnect.js'


const addFruits = async () => {
    const myFruit = {
        name: 'Cantalope',
        taste: 'Sour',
        price: 4,
        stock: 5,
    }

    try {
        await client.connect()
        const addedFruit = await fruitCollection.insertOne(myFruit)
        console.log(addedFruit)
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }

}

 addFruits()
