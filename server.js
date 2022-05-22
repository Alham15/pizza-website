const express=require('express');


const mongoose = require('mongoose');

const app=express();
//let userSchema=new mongoose.Schema({_id:mongoose.Schema.OdjectId,name:String});
mongoose.connect('mongodb://127.0.0.1:27017/webPro', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
  
app.set('view engine','ejs');

const User = mongoose.model('pizzas', {
    _id:{type:mongoose.Schema.ObjectId},
    name: { type: String },
    price:{ type: String},
    createdAt:{ type:Date },
    size:{ type: String }

});

User.find({}, function (err, docs) {
    if (err){
        console.log(err);
    }
    else{
        console.log("First function call : ", docs);
        app.get("/api/products",(req,res)=>{
            res.render('index',{user:docs});
        })
    }
});

app.listen(4000, () => console.log('Listening on port 4000'));
