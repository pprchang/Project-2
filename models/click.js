module.exports = function(sequelize, Datatype) {
    let click = sequelize.define("click", {

        id: {
            type: Datatype.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        pageId: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        click_counter: {
            type: Datatype.INTEGER
        }
        

    },
    {
        timestamps: false
    });

    return click;
};