const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const app = express();
var cors = require('cors')
const connstr='mongodb+srv://bluestoneapp:LPmFgJGcA3OYAWKA@cluster0-c8isl.mongodb.net/test?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;
mongoose.connect(connstr, {useNewUrlParser:true});

app.use(helmet());
app.use(cors());

const products = require('./routes/products');

app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/products', products);

app.use((req,res,next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    const error = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;

    res.status(status).json({
        error: {
            message: error.message
        }
    })

    console.error(err);
});

const PORT = process.env.PORT || 8981
app.listen(PORT, () => console.info(`Started on port ${PORT}`));
