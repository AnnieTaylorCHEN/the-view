const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

//middleware
app.use(express.json({ extended: false }));
app.use(cors());

//routes
app.use('/api/images', require('./routes/images'));
app.use('/api/videos', require('./routes/videos'));

//serve static assets in production
if (process.env.NODE_ENV === 'production') {
	//set static folder
	app.use(express.static('frontend/build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
	});
}

//port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('the server is on ' + PORT));
