module.exports = function(sequelize, Datatype) {
    let searchTerm = sequelize.define("searchTerm", {

        id: {
            type: Datatype.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        search: {
            type: Datatype.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        

    },
    {
        timestamps: false
    });

    return searchTerm;
};