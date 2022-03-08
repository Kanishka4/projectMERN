require('dotenv').config();
const express=require('express');
const productRoutes=require('./routes/productRoutes');
const connectDB=require('./config/db');
const PORT=process.env.PORT||8000;


connectDB();
const app=express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
  });

app.use('/products',productRoutes);
  
  

app.listen(PORT,function(err){
    if(err){
        console.error(err);
        return;
    }
    console.log(`server is running on port ${PORT}`);
})