module.exports = function (sequelize, DataTypes) {
    const Store = sequelize.define('store', {
        store_name: DataTypes.STRING
    })
}