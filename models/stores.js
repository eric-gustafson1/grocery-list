module.exports = function (sequelize, DataTypes) {
    const Store = sequelize.define('store', {
        store_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        }
    });

    Store.associate = function (models) {
        Store.hasMany(models.Item)
    }
    return Store;


}