const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemsSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        quantity: {
            type: Number,
            required: true
        },
        isSanitized: Boolean,
        unit: {
            type: String,
            required: true
        },
        expiryDate: {
            type: Date
        },
        createdDate: {
            type: Date,
            default: Date.now
        },
        updatedDate: {
            type: Date,
            default: Date.now
        },
        category: Array,
        location: Array
    }
)

const ItemsModel = mongoose.model('Items', itemsSchema);

module.exports = {
    ItemsModel
};