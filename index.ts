import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as mongoose from 'mongoose';
import Bluebird = require("bluebird");
(<any>mongoose).Promise = Bluebird;

import messenger from './src/controllers/messenger';
import { Settings, getConnectionString } from './settings';
import routes from './src/routes/crmRoutes';

const app = express();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

// mongoose connection
mongoose.connect(getConnectionString(DB_USER, DB_PASSWORD), {
    useMongoClient: true
}).catch((error) => {`Error: ${error}`});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

const message = new messenger(Settings.PORT).messagePrint();

app.get('/', (req, res) =>
    res.send(message)
);

app.listen(Settings.PORT, () =>
    console.log(message)
);