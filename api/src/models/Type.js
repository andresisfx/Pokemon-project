const {DataTypes,UUIDV4}= require("sequelize");

module.exports= (sequelize)=>{
    sequelize.define("Type",{
        id:{
            type:DataTypes.UUID,
            allowNull:false,
            primaryKey:true,
            defaultValue:UUIDV4
        },
        name:{
            type:DataTypes.TEXT,
            unique:true,
            allowNull:false
        }
    })
}