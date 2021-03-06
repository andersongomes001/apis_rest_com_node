module.exports = function (sequelize) {
    const Tasks = sequelize.define('Tasks', {
        id: {
            type: sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: sequelize.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        done: {
            type: sequelize.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    });
    Tasks.BelongsTo(models.Users);
   return Tasks;
}