const express = require('express')
const app = express()

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('./Pages/home');
});
app.get('/about', (req, res) => {
    res.render('./Pages/about');
});
app.get('/menu', (req, res) => {
    res.render('./Pages/menu');
});
app.get('/specials', (req, res) => {
    res.render('./Pages/specials');
});
app.get('/event', (req, res) => {
    res.render('./Pages/event');
});
app.get('/chefs', (req, res) => {
    res.render('./Pages/chefs');
});
app.get('/gallery', (req, res) => {
    res.render('./Pages/gallery');
});

app.get('/contact', (req, res) => {
    res.render('./Pages/contact');
});
app.get('/book-a-table', (req, res) => {
    res.render('./Pages/booktable');
});
app.listen(8000, ()=>{
    console.log('Server Start');
})