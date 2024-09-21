import express from 'express';
import routerArticle from './routes/article.route';
import routerClient from './routes/client.route';
//import routerLogin from './routes/client.route';
import routerLogin from './routes/login.route'
const expres = require('express');
const cors = require('cors');

// const app = express();

const app = express();
app.use(express.json());
app.use("/api/v1/articles", routerArticle)
app.use("/api/v1/clients", routerClient)
app.use("/api/login", routerLogin)

// Configuration de CORS pour autoriser les requêtes depuis votre frontend
app.use(cors({
    origin: 'http://localhost:3000', // Remplacez par l'URL de votre frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Méthodes HTTP autorisées
    credentials: true // Si vous utilisez des cookies, sessions ou authentification
}));
// Vos routes ici
app.get('/', (req, res) => {
    res.send('Backend configuré avec CORS');
});

const port = 3000; // Exemple de port pour le backend
app.listen(port, () => {
    console.log(`Serveur backend démarré sur le port ${port}`);
});
export default app;