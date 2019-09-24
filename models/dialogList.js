/* 
 * Place all functions, classes, and/or DB schemas here for a single 
 * model.
 */

/* Step 1
 *
 * TODO: import mongoose connection
 * NOTE: skip this if you are not using mongoose
 *
 */
const mongoose = require('./connection.js')

/* Step 1 alternative
 *
 * TODO: make a global variable to act as an in memory database. 
 * NOTE: doing this WILL NOT persist your data and you will loose
 * your data once you stop running your server.
 *
 */
global.sampleModel = [];

/* Step 2
 *
 * TODO: create model schema 
 * NOTE: skip this if you are not using mongoose
 *
 */
//const SampleModelSchema = new mongoose.Schema({
//  name: String
//})

const DialogListSchema = new mongoose.Schema({
  userInput:{
      type: string
  },
  botOutput:{
      type:string
  }
});

/* Step 3
 *
 * TODO: create collection API
 * NOTE: skip this if you are not using mongoose
 *
 */
//const SampleCollection = mongoose.model('Sample', SampleModelSchema)
const DialogListCollection = mongoose.model('ChatList', DialogListSchema)

/* Step 4
 *
 * TODO: delete this it's just a sample
 *
 */
function getAllDialog() {
  return DialogListCollection.find()
}

function getOneDialog(id){
    return DialogListCollection.findById(id)
  }

/* Step 5
 *
 * TODO: export all functions from this file by adding their names as keys to this
 * object
 */
module.exports = {
    ChatListCollection,
    getAllDialog,
    getOneDialog
}
