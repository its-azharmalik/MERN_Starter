import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors';

const app = express();

console.log('Server is Running at Port 3000')

app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded ({ limit: "30mb", extended: true}))
app.use(cors())

//Start here by connecting cloud atlas mongo db