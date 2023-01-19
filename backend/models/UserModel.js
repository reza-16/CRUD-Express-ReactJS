import { Sequelize } from "sequelize";
import db from "../config/database.js";

const {DataTypes} = Sequelize

const User = db.define("users", {
    name : {
        type : DataTypes.STRING(45),
        allowNull : true
    },
    email : {
        type : DataTypes.STRING(45),
        allowNull : true
    },
    gender : {
        type : DataTypes.STRING(45),
        allowNull : true
    }
}, {
    freezeTableName : true
});

export default User;

(async ()=> {
    await db.sync();
})();