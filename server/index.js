const express = require('express'),
        bodyParser = require('body-parser'),
        controller = require ('./controller');

require('dotenv').config()

const app = express();

app.use(bodyParser.json());

app.get('/api/videoList', controller.getVideos);
app.post('/api/addVideos', controller.addVideos);

app.delete('/api/playlist/:id', controller.deleteVideos);
// app.put('/api/videolist', controller.updateVideos);






const port = 4000;
app.listen(port, () => console.log(`Eavesdropping on PORT ${port}`));