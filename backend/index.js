import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
const app = express();
const port = process.env.PORT || 9600;
import cors from "cors";
import route from "./router/user.route"
import cookieParser from "cookie-parser";

var corsOptions = {
    origin: 'http://localhost:5175',
    credentials: true,
    optionsSuccessStatus: 200
}


app.use(cookieParser())
app.use(express.static(__dirname))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors(corsOptions))
app.use(route)



mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/crudredux')
    .then(() => console.log('Connected!'));


app.listen(port, () => {
    console.log(`server is running ${port}`)
})