require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connexion à la base de données MySQL
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Erreur de connexion à la base de données:', err);
    } else {
        console.log('Connecté à la base de données MySQL ✅');
    }
});

// Route test
app.get('/', (req, res) => {      
    res.send('API News en ligne 🚀');
});

app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});


app.get('/news', (req, res) => {
    const sql = "SELECT id, Titre, Contenu, DateTime FROM News ORDER BY DateTime DESC";
    db.query(sql, (err, results) => {
        if (err) {
            console.error("Erreur lors de la récupération des news :", err);
            return res.status(500).json({ error: "Erreur serveur" });
        }
        res.json(results);
    });
});


// Ajouter une actualité
app.post('/news', (req, res) => {
    const { titre, contenu, iduser } = req.body;

    if (!titre || !contenu || !iduser) {
        return res.status(400).json({ message: 'Tous les champs sont requis' });
    }

    const sql = 'INSERT INTO News (Titre, Contenu, DateTime, iduser) VALUES (?, ?, NOW(), ?)';
    db.query(sql, [titre, contenu, iduser], (err, result) => {
        if (err) {
            console.error('Erreur lors de l\'ajout de l\'actualité :', err);
            return res.status(500).json({ message: 'Erreur serveur' });
        }
        res.status(201).json({ message: 'Actualité ajoutée avec succès', newsId: result.insertId });
    });
});