const mongoose = require('mongoose');
const users = mongoose.model('User');
const fs = require('fs');

exports.getSet = (req, res) => {

    users.find((error, result) => {
        if (!error) {
            const res = result.map(l => l.description)
            fs.writeFileSync('./public/data.json', JSON.stringify(res));
        } else {
            console.log("Failed to retireve data: ", error);
        }
    });
    res.render("index1.ejs");
};

exports.getFormPage = (req, res) => {
    res.render("form.ejs");
}

exports.postUser = (req, res) => {
    const item = req.body.newUser;
    let newUser = new users();
    newUser.description = item;

    newUser.save((error, response) => {
        if (!error) {
            res.redirect("/");
        } else {
            console.log(error);
        }
    });
}
