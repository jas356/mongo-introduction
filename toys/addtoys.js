import {client, toysCollection} from '../mongoConnect.js'

client.connect()

const addToy = async () => {
    // get collection

    const myToy = {
        name: 'Optimus Primse',
        type: 'Transformer',
        email: true,
        price: 40,
        description: 'Leader Autobot'
    }

const addToy = await toysCollection.insertOne(myToy)
 console.log(addedToy)

}

addToy()