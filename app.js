import express from 'express';
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
dotenv.config();



const app = express();
const PORT = process.env.PORT || 8090;
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home',
        description: 'This is the home page'
    });
});

app.get('/about', (req, res) => {
    res.render('about', { header: 'About Us', description: 'This is the about page.' });
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});