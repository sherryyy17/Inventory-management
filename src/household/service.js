const { ItemsModel } = require('./model');

module.exports.create = async ({
    itemName,
    quantity,
    isSanitized,
    unit,
    expiryDate,
    createdDate,
    updatedDate,
    category,
    location
}) => {
    const item = await ItemsModel.create({
        name: itemName,
        quantity,
        isSanitized,
        unit,
        expiryDate,
        createdDate,
        updatedDate,
        category,
        location
    })
    return {
        item
    };
};

module.exports.getAll = async() => {
    const items  = await ItemsModel.find();
    return items;
};

module.exports.update = async ({id}, itemdata) => {
    const updateItem = await ItemsModel.findOneAndUpdate({_id: id }, itemdata, {new:true})
    return updateItem;
}

module.exports.delete = async ({ id }) => {
    const res = await ItemsModel.deleteMany({
        _id: id
    });
    return res;
}