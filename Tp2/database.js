const sqlite3 = require("sqlite3").verbose();

// Connexion à la base de données SQLite
const db = new sqlite3.Database(
  "./maBaseDeDonnees.sqlite",
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    if (err) {
      console.error(err.message);
    } else {
      console.log("Connecté à la base de données SQLite.");

      // Création de la table avec une colonne adresse
      db.run(
        `CREATE TABLE IF NOT EXISTS personnes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nom TEXT NOT NULL,
            adresse TEXT
        )`,
        (err) => {
          if (err) {
            console.error(err.message);
          } else {
            console.log(" Table personnes prête.");

            // Insertion de données initiales avec adresse
            const personnes = [
              { nom: "Bob", adresse: "Paris" },
              { nom: "Alice", adresse: "Lyon" },
              { nom: "Charlie", adresse: "Marseille" },
            ];

            personnes.forEach((personne) => {
              db.run(`INSERT INTO personnes (nom, adresse) VALUES (?, ?)`, [
                personne.nom,
                personne.adresse,
              ]);
            });

            console.log(" Données initiales insérées.");
          }
        }
      );
    }
  }
);

module.exports = db;
