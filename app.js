const express = require('express')
const app = express()

app.listen(9999)

const user_router = require('./routes/users')
const channel_router = require('./routes/channel')

app.use("/" , user_router)
app.use("/channels" , channel_router)
