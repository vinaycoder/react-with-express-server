const express = require('express');
const path = require('path');

const app = express(); 

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/postList', async (req, res)=>{
	var list = ["item1", "item2", "item3"];
	res.json(list);
})

    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname+'/client/build/index.html'));
    });

const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log('App is listening on port ' + port);
})