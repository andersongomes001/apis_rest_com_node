module.exports = function (sequelize) {
    const Users = sequelize.define('Users', {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: sequelize.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        email: {
            type: sequelize.STRING,
            unique: true,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
    });
    Users.hasMany(models.Tasks);
   return Users;
}