/**
 * Created by veeru on 10/14/2018.
 */

const express = require('express');
const hbs = require('hbs');

let app = express();

hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');
app.use(express.static(__dirname+'/public'));
hbs.registerHelper('getDay',()=>{
    return 'Monday';
});

app.use((req, res, next)=>{
    console.log(req.url);
    next();
});

app.get('/',(req,res)=>{
    res.render('home.hbs',{
        title:'home',
        body:'lorem ipsum',
        day:'Sunday'
    })
});

app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        title:'about the page',
        day:'Sunday'
    });
});

app.listen(3000,()=>{
    console.log('running on port 3000');
});