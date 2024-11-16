import express from 'express';
import { AdminRoute } from './routes/AdminRoute';
import { VendorRoute } from './routes/VendorRoute';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { MONGO_URI } from './config';
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/admin',AdminRoute)
app.use('/vendor',VendorRoute)

mongoose.connect(MONGO_URI).then((result)=>{
console.log('connected to mongodb')
}).catch(err=>console.log(err))
app.listen(3000,()=>{
    console.clear()
    console.log('app is running on port 3000')
})