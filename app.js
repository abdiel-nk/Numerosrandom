const express = require('express');

const app = express();


app.get('/', () =>{
    res.send('index page');
});
app.get('/random/:numero1/:numero2', (req , res ) =>{
    const min = parseInt(req.params.numero1);
    const max = parseInt(req.params.numero2);
    if(isNaN(min) || isNaN(max)){
        res.status(404);
        res.json({"error": 'bad reques' });
        return;
    }
   const result=  Math.floor (Math.random() *(max - min ) +min)
    res.json({"randomNumber" : result} );
})

app.listen(3000, () => {
   console.log('server on port 3000');
});