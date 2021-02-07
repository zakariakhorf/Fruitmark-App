const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const ItemSchema = new Schema ({
    ville: {
        type: String,
        required: true

    },
    stock: {
        type: Number,
        required: true,
        default: 0

    },
    orange: {
        type: Number,
        required: true,
        default: 0

    },
    banane: {
        type: Number,
        required: true,
        default: 0

    },
    pomme: {
        type: Number,
        required: true,
        default: 0

    },
    fraise: {
        type: Number,
        required: true,
        default: 0

    },
    cerise: {
        type: Number,
        required: true,
        default: 0

    },

    date: {
        type: Date,
         default:Date.now

    }
 


})
module.exports = Item = mongoose.model('item', ItemSchema)