module.exports = (sequelize, DataType) => {
    const Komik = sequelize.define('Komik', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        judul: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
    }, {
        tableName : 'Komik',
        timestamps: true,
        freezeTableName: true
    });
    return Komik;
}