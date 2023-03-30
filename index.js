import { client } from './mongoConnect.js'

//connect to client




const addFruits = async () => {
    const myFruit = {
        name: 'Cantalope',
        taste: 'Sour',
        price: 4,
        stock: 5,
    }

    try {
        await client.connect()
        const addedFruit = await collection.insertOne(myFruit)
        console.log(addedFruit)
    } catch (error) {
        console.log(error)
        await client.close()
    }

}




// addFruits()

const editFruit = async () => {

    // collection.findOne({name: 'Cantalope'})
    const updatedFruit = await collection.findOneAndUpdate({ name: 'Cantalope' },
        { $set: { name: 'Pinapple' } })
    console.log(updatedFruit)
}

// editFruit()

const getAllFruits = async () => {
    try {
        await client.connect()
        const allFruits = await collection.find().toArray()
        console.log(allFruits)
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }
}

//**** using .then() .catch()
// collection.find()
//     .toArray()
//     .then(items => console.log(items))
//     .catch(err => console.log(err));



// getAllFruits()

const deleteFruits = async () => {
    //start try catch here
    try {
        const itemDeleted = await collection.deleteOne({ name: 'Pinapple' })
        console.log(itemDeleted)
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }

    }


// deleteFruits()