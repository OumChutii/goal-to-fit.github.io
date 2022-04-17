const express = require('express');
const bodyParser = require('body-parser')

const usersRouter = require('./routes/users')
const actRouter = require('./routes/activity')

const app = express();

// Body parse middleware
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));

app.get('/', (req, res) => {
    res.send(`Welcome to web server on port ${PORT}`);
})

app.use('/users', usersRouter)
app.use('/activity', actRouter)


const PORT = process.env.PORT || 4001;
app.listen(PORT, () => console.log(`server is running  on port ${PORT}`));

