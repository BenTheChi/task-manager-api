const mongoose = require('mongoose')

mongoose.connect('hyperkitty-pv4q1.mongodb.net:27017',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})