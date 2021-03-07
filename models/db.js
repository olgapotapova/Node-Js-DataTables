const mongoose = require("mongoose");
//mongoose.connect('mongodb://localhost:27017/usersdb', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://potapova:koska777@cluster0.bzxyy.mongodb.net/usersdb', { useNewUrlParser: true, useUnifiedTopology: true });
require('./users');


