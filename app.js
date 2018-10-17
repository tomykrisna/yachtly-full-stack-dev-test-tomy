const express = require('express');
const Sequelize = require('sequelize');
const sequelize = new Sequelize('user_db', 'postgres', '12345678', {
    dialect: 'postgres'
});
const app = express();
const port = 3000;
const Parser = require('body-parser');

const User = sequelize.import(__dirname + '/models/user');

app.use(Parser.json());
app.use(Parser.urlencoded({extended: true}));


app.get('/', (req, res) => {
    User.findAll().then(users => {
        res.json({
            status: 'success',
            result: users
        });
    })

});

app.post('/api/user/add', (req, res) => {
    console.log('req', req.body);
    User.create({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
    }).then(user => {
        res.json({
            status: 'success',
            result: user
        });
        // console.log(user.get({
        //     plain: true
        // }));
    }).catch(err => {
        res.json({
            status: 'Failed',
            message: ''
        });
        console.log('err', err);
    });
});

app.put('/api/user/edit', (req, res) => {
    User.update({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
    }, {
        where:{
            userID: req.body.userID
        }
    }).then(user =>{
        res.json({
            status: 'success',
            result: user
        });
    }).catch(err =>{
        res.json({
            status: 'Failed',
            message: ''
        });
    })
});


app.delete('/api/user/delete', (req, res)=>{
    User.destroy({
        where:{
            userID: req.body.userID
        }
    }).then(user =>{
        res.json({
            status: 'success',
            result: user
        });
    }).catch(err =>{
        res.json({
            status: 'Failed',
            message: ''
        });
    })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`));