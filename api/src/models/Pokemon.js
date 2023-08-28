const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
     type:DataTypes.UUID,
     primaryKey:true,
     defaultValue:UUIDV4,
                             //  id,name,image,life,attack,defense,speed,height,weight
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    image:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    life:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    attack:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    defense:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    speed:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    height:{
    type:DataTypes.INTEGER,
    allowNull:false
    },
    weight:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    cretedAtDb:{
      type:DataTypes.BOOLEAN,
      defaultValue:true
    }
  },
  {
   timestamps:false
  });
};
// ID. *
// Nombre. *
// Imagen. *
// Vida. *
// Ataque. *
// Defensa. *
// Velocidad.
// Altura.
// Peso.