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

app.use('/public', express.static('dist/public'));
app.use('/app/public', express.static('dist/public'));


app.get('/', (req, res) => {
    User.findAll().then(users => {
        res.json({
            status: 'success',
            result: users
        });
    })

});

app.get('/api/user/detail/:userID', (req, res) => {
    User.findAll({
        where: {
            userID: req.params.userID
        }
    }).then(users => {
        if (users.length > 0) {

            res.json({
                status: 'success',
                result: users[0]
            });
        } else {
            res.json({
                status: 'failed',
                message: 'user not found'
            });
        }
    })

});

app.post('/api/user/add', (req, res) => {
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
    }).catch(err => {
        res.json({
            status: 'failed',
            message: '',
            data: req.body
        });
    });
});

app.put('/api/user/edit', (req, res) => {
    User.update({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
    }, {
        where: {
            userID: req.body.userID
        }
    }).then(user => {
        res.json({
            status: 'success',
            result: user
        });
    }).catch(err => {
        res.json({
            status: 'failed',
            message: ''
        });
    })
});


app.delete('/api/user/delete', (req, res) => {
    User.destroy({
        where: {
            userID: req.body.userID
        }
    }).then(user => {
        res.json({
            status: 'success',
            result: user
        });
    }).catch(err => {
        res.json({
            status: 'failed',
            message: ''
        });
    })
});

app.get('/users', (req, res) => {
    res.sendFile(__dirname + '/angular/index.html');
});

app.get('/user/add', (req, res) => {
    res.sendFile(__dirname + '/angular/addUser.html');
});

app.get('/user/edit/:userID', (req, res) => {
    res.sendFile(__dirname + '/angular/editUser.html');
});

app.get('/app', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.get('/app/*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));