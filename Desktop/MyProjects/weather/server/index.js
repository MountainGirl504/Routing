const express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    axios = require('axios'),
    port = 8080,
    cors = require('cors')
    
    
    

app.use(bodyParser.json())
app.use(cors())

app.get('/api/weather/:town', (req, res) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${req.params.town}&APPID=c42a3fe83b30aecd6923c9d3b12e454e`)
    .then((response =>{
        res.status(200).send(response.data)
    })
)
})


app.listen(port, ()=> console.log(`Listening on port ${port}`))
