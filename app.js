const express = require('express');
const cors = require('cors');
const helmet= require('helmet');
const fetch= require('node-fetch');

const app= express();

//middlewear

app.use(cors());
app.use(helmet());

//Routes
app.get('/', (req, res)=>{
	res.json({msg: "Welcome to the fun"})
})

//iTunes Search
app.get('/search/:name/:type/',(req, res)=>{
	const name =req.params.name;
	const type = req.params.type;

	
	fetch('https://itunes.apple.com/search?term=${name}&limit=12&entity=${type}')
	.then(res =>res.json)
	.then(data => res.send(data))
	.catch(err => console.warn(err));
})

const PORT = process.env.PORT || 5050;
app.listen(PORT, ()=> console.log('fun @ port${PORT}'))
