const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

//midelware
app.use(express.static(__dirname+ '/public'));

//Express hbs engine
app.set('view engine', 'hbs');



//los parciales se ocupan para no tener que poner dos veces los header o los footer o los navbar
hbs.registerPartials(__dirname + '/views/parciales');

app.get('/',  (req, res) => {
  res.render('home' , {
    nombre : 'Jorge Isidora Hererra'
  });
  
});

app.get('/about',  (req, res) => {
  res.render('about');
  
});
 
app.listen(port ,  () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})