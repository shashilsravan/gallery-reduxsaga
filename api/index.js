const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
require("dotenv").config();
const PictureRoute = require('./routes/PictureRoute');

const app = express();

// database
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true, useCreateIndex: true,
    useFindAndModify: false, useUnifiedTopology: true,
  }).then(() => console.log("DB CONNECTED")).catch((err) => console.log(`DB CONNECTION ERR ${err}`))

// middleware
app.use(express.json())
app.use(morgan("common"));
app.use(cors());

app.use("/api/pictures", PictureRoute)

const port = process.env.PORT || 4000
app.listen(port, () => {
    console.log("server is running", port)
})