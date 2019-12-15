module.exports = function (sequelize, DataTypes) {
    const Item = sequelize.define('item', {
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1, 25]
        },
        item_count: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        is_needed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0
        }
    })

    Item.associate = function (models) {
        Item.belongsTo(modles.Store, {
            foreignKey: {
                allowNull: false
            }
        })
    }
    return Item;
}