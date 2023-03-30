import { client, fruitCollection } from '../mongoConnect.js'


const getAllFruits = async () => {
	try {
		await client.connect()
		const allFruits = await fruitCollection.find().toArray()
		console.log(allFruits)
	} catch (error) {
		console.log(error)
	} finally {
		await client.close()
	}
// test
	/*** using .then .catch */
	// collection
	// 	.find()
	// 	.toArray()
	// 	.then(items => console.log(items))
	// 	.catch(err => console.log(err))
}

getAllFruits()