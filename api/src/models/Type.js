const {DataTypes,UUIDV4}= require("sequelize");

module.exports= (sequelize)=>{
    sequelize.define("Type",{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
            
        },
        name:{
            type:DataTypes.TEXT,
            unique:true,
            allowNull:false
        }
    },
    {
        timestamps:false
    })
}