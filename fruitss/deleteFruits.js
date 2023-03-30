import {client, fruitCollection} from '../mongoConnect.js'

client.connect()

const deleteFruits = async () => {
    //start try catch here
    try {
        const itemDeleted = await fruitCollection.deleteOne({ name: 'Pinapple' })
        console.log(itemDeleted)
    } catch (error) {
        console.log(error)
    } finally {
        await client.close()
    }

    }

 deleteFruits()