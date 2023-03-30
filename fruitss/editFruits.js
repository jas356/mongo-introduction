
import {client, fruitCollection} from '../mongoConnect.js'

client.connect()

const editFruit = async () => {

    // collection.findOne({name: 'Cantalope'})
    const updatedFruit = await fruitCollection.findOneAndUpdate(
        { name: 'Cantalope' },
        { $set: { name: 'Pinapple'} }
    )
    console.log(updatedFruit)
}

editFruit()
