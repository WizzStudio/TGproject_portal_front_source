const express= require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

/**
 * express server
 */
const app = express();
const port = process.env.PORT || 3000;

/**
 * express global configuration
 */
app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "pug");
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public"), { maxAge: 31557600000 }));



app.get('*',(req,res)=>{
	res.render('notFound')
});


/**
 * start server port
 */
app.listen(port, () => {
	console.log(`server listen at ${port}`);
});