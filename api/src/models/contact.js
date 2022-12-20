const mongoose = require("mongoose")

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("Contact", contactSchema);