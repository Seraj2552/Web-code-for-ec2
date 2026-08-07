const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.static('/var/www/html'));

app.get('/api/products', (req,res)=>{

    const products = JSON.parse(
        fs.readFileSync('./products.json')
    );

    res.json(products);

});

app.listen(5000,()=>{
    console.log('Server running');
});
