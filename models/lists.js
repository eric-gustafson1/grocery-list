module.exports = function (sequelize, DataTypes) {
    const Lists = sequelize.define('list', {
        item: DataTypes.STRING,
        count: DataTypes.INTEGER,
        needed: DataTypes.BOOLEAN
    })
}