//change schema according to your needs

import mongoose from 'mongoose'

const replySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: Number,
        required: true
    },
    msg: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})


const Reply = mongoose.model('Reply', replySchema)

export default Reply