
var mongoose = require('mongoose')

var Schema = mongoose.Schema

var CategorySchema = new Schema({
    idCategory: String,
    name: String
})
var CategoryModel = mongoose.model("CategoryData", CategorySchema);
const appCategory=function(){
    const category1 = new CategoryModel({idCategory: "1",name:"ЖКХ"});
    const category2 = new CategoryModel({idCategory: "2",name:"Автомобильные дороги"});
    const category3 = new CategoryModel({idCategory: "3",name:"Социальная среда"});
    const category4 = new CategoryModel({idCategory: "4",name:"Общественный транспорт"});
    const category5 = new CategoryModel({idCategory: "5",name:"Трудовые отношения"});
    const category6 = new CategoryModel({idCategory: "6",name:"Экология"});
    const category7 = new CategoryModel({idCategory: "7",name:"Торговля,товары и услуги"});
    const category8 = new CategoryModel({idCategory: "8",name:"Связь и телекоммуникации"});
    const category9 = new CategoryModel({idCategory: "9",name:"Стройплощадки"});
    
    category1.save(function(err){ if(err) return console.log(err);});
    category2.save(function(err){ if(err) return console.log(err);});
    category3.save(function(err){ if(err) return console.log(err);});
    category4.save(function(err){ if(err) return console.log(err);});
    category5.save(function(err){if(err) return console.log(err);});
    category6.save(function(err){if(err) return console.log(err);});
    category7.save(function(err){if(err) return console.log(err);;});
    category8.save(function(err){if(err) return console.log(err);});
    category9.save(function(err){if(err) return console.log(err);});  
}
module.exports=appCategory();

module.exports = mongoose.model("CategoryData", CategorySchema);
