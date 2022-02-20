import * as express from 'express';
import * as bodyParser from 'body-parser';
import routes from './routes';
import connect from './connect';

const app = express();
const port = 8080;

app
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.use(routes)

	.listen(port, () => {
		console.log(`Server is listening on port ${port}`);
	});

const db = 'mongodb://mongodb:27017/demo';
connect({ db });